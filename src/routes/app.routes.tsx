import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";
import { defaultTheme } from "../global/styles/theme";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: defaultTheme.colors.secondary100,
                }
            }}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen 
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}