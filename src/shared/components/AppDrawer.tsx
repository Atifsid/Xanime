import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useTheme } from '@react-navigation/native';

const Drawer = (props: any) => {
    const colors = useTheme().colors;
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.primary }}>
                <View
                    style={{ padding: 10 }}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Roboto-Medium',
                        }}>
                        Xanime
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: colors.card, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <DrawerItem style={{ backgroundColor: colors.card }} label={'More Tabs Coming Soon ...'} onPress={() => { ToastAndroid.show("More features Coming soon.", ToastAndroid.BOTTOM) }} />

        </View>
    )
}

export default Drawer