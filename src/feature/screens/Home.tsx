import { View, Text, SafeAreaView, ScrollView, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native';
import ApiService from '../../core/api/services/TestService';

const Home = ({ navigation }: any) => {
    const [isLoading, setLoading] = React.useState(false);
    const [isRefreshing, setRefreshing] = React.useState(false);
    const colors = useTheme().colors;

    const api = new ApiService();

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchSliderData();
    }, []);

    const fetchSliderData = () => {
        setLoading(true)
        api.getTrending()
            .then(res => {
                if (res) {
                    console.log(res);
                }
                setLoading(false);
                setRefreshing(false);
            })
            .catch((e) => {
                console.log('err:', e);
                setLoading(false);
                setRefreshing(false);
            })
    }

    useEffect(() => {
        fetchSliderData();
    }, [])

    return (
        <SafeAreaView>
            {/* <View style={[styles.SearchBar, { borderColor: colors.border, borderWidth: 1, height: 40 }]} >
                <Ionicons name='menu' size={30} color={colors.text} onPress={() => navigation.openDrawer()} />
                <Search />
            </View> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                } >
                <View style={{ backgroundColor: colors.background }} >
                    <Text style={{ color: colors.text }} >Home</Text>


                </View>
            </ScrollView>

            {isLoading && <ActivityIndicator size='large' />}

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