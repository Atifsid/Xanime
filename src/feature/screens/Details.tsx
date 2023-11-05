import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GogoAnimeService from '../../core/api/services/GogoAnimeService';
import { DetailsResponse } from '../../core/models/DetailsResponse';
import { Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

const Details = (props: any) => {
    const colors = useTheme().colors;
    const col = 6
    const [isLoading, setLoading] = useState(false);
    const [res, setRes] = useState<DetailsResponse>()
    const api = new GogoAnimeService();

    useEffect(() => {
        setLoading(true)
        api.getDetails(props.route.params.id)
            .then((res) => {
                if (res) {
                    setRes(res)
                }
                setLoading(false)
            })
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList numColumns={col}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    ListHeaderComponent={
                        <>
                            <View>
                                <Image
                                    loadingIndicatorSource={{
                                        // add static img
                                    }}
                                    style={styles.image} key={res?.id} source={{ uri: res?.image }} />
                            </View>
                            <Text style={{ color: colors.text }} >{res?.description}</Text>

                            <Text style={{ marginVertical: 6 }}>Episodes: -</Text>
                        </>
                    }
                    data={res?.episodes} renderItem={(item) =>
                        <View style={styles.epBox}>
                            <Pressable
                                onPress={() => { props.navigation.navigate('Stream', { id: item.item.id }) }}
                                style={[styles.epText, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]} >
                                <Text style={{ color: colors.text }} >{item.item.number}</Text>
                            </Pressable>
                        </View>
                    }>

                </FlatList>

            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        margin: 18
    },
    image: {
        height: 225,
        width: 156,
        marginBottom: 10
    },
    epBox: {
        flex: 1,
        justifyContent: 'center',
    },
    epText: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        textAlign: 'center'
    },
})