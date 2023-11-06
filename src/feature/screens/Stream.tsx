import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GogoAnimeService from '../../core/api/services/GogoAnimeService'
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { StreamResponse } from '../../core/models/StreamResponse';
import VideoPlayer from 'react-native-media-console';
import { useAnimations } from '@react-native-media-console/reanimated';

const Stream = (props: any) => {
    const colors = useTheme().colors;
    const api = new GogoAnimeService();
    const [stream, setStream] = useState<StreamResponse | null>(null)
    const [isLoading, setLoading] = useState(false)

    const [url, setUrl] = useState<string>()

    const getGogoCdn = () => {
        setStream(null)
        setLoading(true)
        api.getStreams(props.route.params.id, "gogocdn")
            .then((res) => {
                if (res) {
                    setStream(res)
                }
                setLoading(false)
            })
            .finally(() => { setLoading(false) })
    }

    const getVidstreaming = () => {
        setStream(null)
        setLoading(true)
        api.getStreams(props.route.params.id, "vidstreaming")
            .then((res) => {
                if (res) {
                    setStream(res)
                }
                setLoading(false)
            })
            .finally(() => { setLoading(false) })
    }

    const getStreamSb = () => {
        setStream(null)
        setLoading(true)
        api.getStreams(props.route.params.id, "streamsb")
            .then((res) => {
                if (res) {
                    setStream(res)
                }
                setLoading(false)
            })
            .finally(() => { setLoading(false) })
    }


    if (isLoading) {
        return (
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator size="large" />
                </View>
            </View>
        );
    }

    return (
        <View>

            {!isLoading && stream &&
                <View>
                    {/* {url && url.length > 0 &&
                        <VideoPlayer
                            style={{ flex: 1 }}
                            useAnimations={useAnimations}
                            source={{ uri: url }}
                            navigator={props.navigator}
                        />
                    } */}
                    <FlatList
                        horizontal={true}
                        data={stream.sources} renderItem={(item) =>
                            <Pressable style={{ padding: 10, alignContent: 'space-around', backgroundColor: colors.card, margin: 10, borderColor: colors.text, borderWidth: 1, borderRadius: 14 }}
                                onPress={() => {
                                    setUrl(item.item.url)
                                    console.log(url);
                                    props.navigation.navigate('Player', { url: item.item.url })
                                }}
                            >
                                <Text style={{ color: colors.text }} >{item.item.quality}</Text>
                            </Pressable>
                        } />
                </View>}

            {isLoading && <ActivityIndicator size="large" />}

            {stream === null && <Text style={{ color: colors.text, textAlign: 'center', padding: 20 }} >Nothing found, Please select a server</Text>}


            <View style={styles.tabGroup} >
                <Pressable style={[styles.serverTab, { borderColor: colors.border, backgroundColor: colors.card }]}
                    onPress={getGogoCdn} >
                    <Text style={[{ color: colors.text }, { textAlign: 'center' }]} > Gogo </Text>
                </Pressable>

                <Pressable style={[styles.serverTab, { borderColor: colors.border, backgroundColor: colors.card }]}
                    onPress={getStreamSb} >
                    <Text style={[{ color: colors.text }, { textAlign: 'center' }]} > StreamSb </Text>
                </Pressable>

                <Pressable style={[styles.serverTab, { borderColor: colors.border, backgroundColor: colors.card }]}
                    onPress={getVidstreaming} >
                    <Text style={[{ color: colors.text }, { textAlign: 'center' }]} > Vidstreaming </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Stream

const styles = StyleSheet.create({
    tabGroup: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    serverTab: {
        padding: 14,
        borderWidth: 1,
        borderRadius: 14
    }
})
