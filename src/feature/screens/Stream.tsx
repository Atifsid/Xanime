import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GogoAnimeService from '../../core/api/services/GogoAnimeService'
import { ServerResponse } from '../../core/models/ServerResponse';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

const Stream = (props: any) => {
    const colors = useTheme().colors;
    const api = new GogoAnimeService();
    const [servers, setServers] = useState<ServerResponse>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.getServers(props.route.params.id)
            .then((res) => {
                if (res) {
                    setServers(res)
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
        <View>
            <FlatList
                contentContainerStyle={{ margin: 6 }}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                horizontal={true}
                data={servers} renderItem={(item) =>
                    <Pressable style={[styles.serverTab, { borderColor: colors.border, backgroundColor: colors.card }]} onPress={() => { }} >
                        <Text style={{ color: colors.text }} > {item.item.name} </Text>
                    </Pressable>
                } />
        </View>
    )
}

export default Stream

const styles = StyleSheet.create({
    serverTab: {
        padding: 14,
        borderWidth: 1,
        borderRadius: 14
    }
})