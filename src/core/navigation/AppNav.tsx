import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from '../../shared/components/AppDrawer';
import Home from '../../feature/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { NavStackParamList } from '../../shared/utils/NavProps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../../feature/screens/Details';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<NavStackParamList>();

function HomeNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

const AppNav = () => {
    const colors = useTheme().colors;

    return (
        <Drawer.Navigator screenOptions={{
            headerTintColor: colors.primary,
            headerShown: false
        }} drawerContent={props => AppDrawer(props)}>
            <Drawer.Screen name='Home' component={HomeNav}
                options={{
                    drawerIcon: ({ color }: any) => (
                        <Ionicons name='home' size={22} color={color} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

export default AppNav

function createStackNavigator() {
    throw new Error('Function not implemented.');
}
