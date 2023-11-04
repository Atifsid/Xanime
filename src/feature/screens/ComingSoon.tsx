import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';

const ComingSoon = () => {
    const colors = useTheme().colors;
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={{ backgroundColor: colors.background }} >
                    <Text style={{ color: colors.text }} >Coming Soon ...</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ComingSoon