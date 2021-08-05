import React from 'react';

import * as AuthSession from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';



import {
    REDIRECT_URI, 
    SCOPE, 
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from '../configs';

import { COLLECTION_USER } from "../configs";

type IUser = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type IAuthContextData = {
    user: IUser;
    singIn: () => Promise<void>;
    loading: boolean;
    singOut : () => Promise<void>;
}

type IAuthProviderProps = {
    children: React.ReactNode;
}

type IAuthResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string
    }
}

const AuthContext = React.createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider = ({children}: IAuthProviderProps) => {
    const [user, setUser] = React.useState<IUser>({} as IUser);
    const [loading, setLoading] = React.useState(false);

    const singIn = async () => {

        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
        try {
            setLoading(true);


            const {type, params} = await AuthSession
            .startAsync({ authUrl }) as IAuthResponse;

            if(type === "success" && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');

                const firstName = userInfo.data.username.split(" ")[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {...userInfo.data, firstName, token: params.access_token};

                setUser(userData);

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
            }

        } catch {
            throw new Error("Nao foi possivel fazer o login");
        } finally {
            setLoading(false);
        }
    }

    const singOut = async () => {
        setUser({} as IUser);
        await AsyncStorage.removeItem(COLLECTION_USER);
    }

    const loadUserDatabaseData = async () => {
        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if(storage) {
            const userLogged = JSON.parse(storage) as IUser;

            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged)
        }
    }

    React.useEffect(() => {
        loadUserDatabaseData();
    }, [])

    return (
        <AuthContext.Provider value={
            {user, singIn, loading, singOut}
        }>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = React.useContext(AuthContext);

    return context;
}

export { 
    AuthProvider,
    useAuth
}
