import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from '../../shared/components/AppDrawer';
import Home from '../../feature/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ComingSoon from '../../feature/screens/ComingSoon';
import { useTheme } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const AppNav = () => {
    const colors = useTheme().colors;

    return (
        <Drawer.Navigator screenOptions={{
            headerTintColor: colors.primary,
            headerShown: true
        }} drawerContent={(props: any) => <AppDrawer{...props} />}>
            <Drawer.Screen name='Home' component={Home}
                options={{
                    drawerIcon: ({ color }: any) => (
                        <Ionicons name='home' size={22} color={color} />
                    )
                }} />
            {/* <Drawer.Screen name='Coming Soon' component={ComingSoon}
                options={{
                    drawerIcon: ({ color }: any) => (
                        <Ionicons name='chatbox-ellipses' size={22} color={color} />
                    )
                }} /> */}
        </Drawer.Navigator>
    )
}

export default AppNav