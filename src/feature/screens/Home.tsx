import { View, Text, SafeAreaView, ScrollView, StyleSheet, RefreshControl, ActivityIndicator, TextInput, FlatList, Dimensions, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import FaIcon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import AniListService from '../../core/api/services/TestService';
import GogoAnimeService from '../../core/api/services/GogoAnimeService';
import { Result, SearchResponse } from '../../core/models/SearchResponse';

const Home = ({ navigation }: any) => {
    const numColumns = 3
    const [isLoading, setLoading] = useState(false);
    const [isRefreshing, setRefreshing] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [staticData, setStatic] = useState<Array<Result>>()
    const colors = useTheme().colors;
    const [searchData, SetSearchData] = useState<SearchResponse | null>(null)

    const [searchPhrase, setSearchPhrase] = useState("");

    const gogo = new GogoAnimeService();

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    }, []);

    const handleSearch = () => {
        if (searchPhrase.length > 0) {
            setLoading(true);
            gogo.search(searchPhrase)
                .then((res) => {
                    if (res) {
                        SetSearchData(res);
                    }
                    setLoading(false);
                })
                .catch(e => console.log(e))
        }
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
            <View style={{ backgroundColor: colors.background }} >
                <FlatList
                    contentContainerStyle={styles.listContainer}
                    ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
                    numColumns={numColumns}
                    ListHeaderComponent={
                        <View style={[styles.searchBar, { backgroundColor: colors.border }]} >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', width: '90%' }} >
                                <FaIcon
                                    name="bars"
                                    size={20}
                                    color={colors.text}
                                    style={{ marginLeft: 10 }}
                                    onPress={() => navigation.openDrawer()}
                                />

                                <TextInput
                                    style={[styles.input, { color: colors.text }]}
                                    placeholder="Enter keywords"
                                    value={searchPhrase}
                                    onChangeText={(text) => { setSearchPhrase(text) }}
                                    onEndEditing={() => { }}
                                    onFocus={() => {
                                        setClicked(true);
                                    }}
                                    onSubmitEditing={handleSearch}
                                    multiline={false}
                                    placeholderTextColor={colors.text}
                                />
                            </View>
                            {clicked && (
                                <Ionicon name='close' size={22} color={colors.text} style={{ marginRight: 6 }} onPress={() => {
                                    setSearchPhrase("")
                                    SetSearchData(null)
                                }} />
                            )}
                        </View>}
                    data={searchData?.results}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1, backgroundColor: colors.card, padding: 8, borderRadius: 14 }}>
                            <Pressable onPress={() => { navigation.navigate('Details', { id: item.id }) }} >
                                <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
                                <Text style={{ color: colors.text, textAlign: 'center' }} >{item.title}</Text>
                            </Pressable>
                        </View>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        fontSize: 14,
        marginLeft: 10,
        flexDirection: 'row',
        width: '100%'
    }
});

export default Home