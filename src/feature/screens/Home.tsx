import { View, Text, SafeAreaView, ScrollView, Button, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Search from '../../shared/components/SearchBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }: any) => {
    const colors = useTheme().colors;
    return (
        <SafeAreaView>
            {/* <View style={[styles.SearchBar, { borderColor: colors.border, borderWidth: 1, height: 40 }]} >
                <Ionicons name='menu' size={30} color={colors.text} onPress={() => navigation.openDrawer()} />
                <Search />
            </View> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={{ backgroundColor: colors.background }} >
                    <Text style={{ color: colors.text }} >Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Home