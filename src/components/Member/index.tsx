import React from "react";
import { 
    Text, 
    View 
} from "react-native";
import { defaultTheme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type IMembersProps = {
    data: MemberProps
}

export const Member = ({ data } : IMembersProps) => {

    const {on, primary} = defaultTheme.colors;

    const isOnline = data.status === "online";

    return (
        <View style={styles.container}>
          <Avatar 
            photo={data.avatar_url}
          />

          <View>
              <Text style={styles.title}>
                { data.username }
              </Text>

              <View style={styles.status}>
                <View style={[styles.bulletStatus, {
                    backgroundColor: isOnline ? on : primary
                }]} />
                <Text style={styles.nameStatus}>
                    {isOnline ? 'Disponivel' : 'Ocupado' }
                </Text>
              </View>
          </View>
        </View>
    )
}