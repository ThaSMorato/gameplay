import React from 'react';

import * as AuthSession from 'expo-auth-session';

import { api } from '../services/api';

import { 
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE
} from '../configs'

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
}

type IAuthProviderProps = {
    children: React.ReactNode;
}

type IAuthResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token : string
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

            if(type === "success") {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');

                const firstName = userInfo.data.username.split(" ")[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                setUser({...userInfo.data, firstName, token: params.access_token});

                setLoading(false);
            } else {
                setLoading(false);
            }

        } catch {
            throw new Error("Nao foi possivel fazer o login");
        }
    }

    return (
        <AuthContext.Provider value={
            {user, singIn, loading}
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
