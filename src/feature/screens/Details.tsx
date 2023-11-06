import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GogoAnimeService from '../../core/api/services/GogoAnimeService';
import { DetailsResponse } from '../../core/models/DetailsResponse';
import { Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { Source, StreamResponse } from '../../core/models/StreamResponse';

const Details = (props: any) => {
    const colors = useTheme().colors;
    const col = 6
    const [isLoading, setLoading] = useState(false);
    const [isModalLoading, setModalLoading] = useState(false);
    const [res, setRes] = useState<DetailsResponse>()
    const api = new GogoAnimeService();

    const [selectedEpId, setSelectedEpId] = useState('')

    const [modalVisible, setModalVisible] = useState(false);

    const [stream, setStream] = useState<StreamResponse | null>(null)

    const [selectedQuality, setSelectedQuality] = useState<Source>()
    const [selectedSource, setSelectedSource] = useState<string>()

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

    const getGogoCdn = () => {
        setStream(null)
        setSelectedSource('')
        setModalLoading(true)
        api.getStreams(selectedEpId, "gogocdn")
            .then((res) => {
                if (res) {
                    setSelectedSource("gogocdn")
                    setStream(res)
                }
                setModalLoading(false)
            })
            .finally(() => { setModalLoading(false) })
    }

    const getVidstreaming = () => {
        setStream(null)
        setModalLoading(true)
        setSelectedSource('')
        api.getStreams(selectedEpId, "vidstreaming")
            .then((res) => {
                if (res) {
                    setSelectedSource("vidstreaming")
                    setStream(res)
                }
                setModalLoading(false)
            })
            .finally(() => { setModalLoading(false) })
    }

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
                    contentContainerStyle={{ height: 'auto', flexGrow: 0 }}
                    maxToRenderPerBatch={20}
                    initialNumToRender={10}
                    windowSize={10}
                    removeClippedSubviews={true}
                    ListHeaderComponent={
                        <>
                            <View>
                                {res && res.image && <Image style={styles.image} key={res?.id} source={{ uri: res?.image }} />}
                            </View>
                            <Text style={{ color: colors.text }} >{res?.description}</Text>

                            <Text style={{ marginVertical: 6 }}>Episodes: -</Text>
                        </>
                    }
                    data={res?.episodes} renderItem={(item) =>
                        <View style={styles.epBox}>
                            <Pressable
                                onPress={() => {
                                    setSelectedEpId(item.item.id)
                                    setModalVisible(true)
                                }}
                                style={[styles.epText, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]} >
                                <Text style={{ color: colors.text }} >{item.item.number}</Text>
                            </Pressable>
                        </View>
                    }>

                </FlatList>

            </View>

            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible(!modalVisible) }}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, { backgroundColor: colors.card }]}>
                            <View style={{ height: 'auto', width: 300 }} >

                                <View style={{ justifyContent: 'center', padding: 10 }} >
                                    <Text style={[styles.dropDownItem, { color: colors.text, borderColor: selectedSource == 'gogocdn' ? colors.primary : colors.border }]} onPress={getGogoCdn} >Gogo</Text>
                                    <Text style={[styles.dropDownItem, { color: colors.text, borderColor: selectedSource == 'vidstreaming' ? colors.primary : colors.border }]} onPress={getVidstreaming}>Vidstreaming</Text>
                                </View>

                                {stream && <FlatList data={stream.sources} renderItem={({ item }) =>
                                    <Pressable style={{ padding: 10, alignContent: 'space-around', backgroundColor: colors.card, margin: 10, borderColor: selectedQuality == item ? colors.primary : colors.border, borderWidth: 1, borderRadius: 14 }}
                                        onPress={() => { setSelectedQuality(item) }}
                                    >
                                        <Text style={{ color: colors.text }} >{item.quality}</Text>
                                    </Pressable>
                                } />}

                                {isModalLoading && <ActivityIndicator size={'large'} />}

                                {!stream && <Text style={{ color: colors.text, textAlign: 'center' }} > Please select Server and Quality. </Text>}

                                <View style={styles.btnGroup} >
                                    <Pressable
                                        onPress={() => {
                                            setSelectedEpId('')
                                            setStream(null)
                                            setSelectedSource(undefined)
                                            setSelectedQuality(undefined)
                                            setModalVisible(false)
                                        }}
                                        style={[{ backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border }, styles.btn]}  >
                                        <Text style={{ color: colors.text, padding: 10 }} > Cancel </Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={() => {
                                            { selectedQuality && props.navigation.navigate('Player', { url: selectedQuality.url }) }
                                            setSelectedEpId('')
                                            setStream(null)
                                            setSelectedSource(undefined)
                                            setSelectedQuality(undefined)
                                            setModalVisible(false)
                                        }}
                                        disabled={selectedQuality === undefined}
                                        style={[{ backgroundColor: colors.background, borderWidth: 1, borderColor: selectedQuality !== undefined ? colors.primary : colors.border, marginLeft: 10 }, styles.btn]}  >
                                        <Text style={{ color: colors.text, padding: 10 }} > Play </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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

    dropDownItem: {
        padding: 14,
        borderWidth: 1
    },
    btn: {
        borderRadius: 14
    },
    btnGroup: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 14,
        paddingEnd: 20
    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 'auto'
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})