import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";


const SearchBar = ({ searchPhrase, setSearchPhrase }: any) => {
    const [clicked, setClicked] = useState(false);
    return (
        <View
            style={styles.container}
        >
            <View style={styles.searchBar} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center"
                }} >
                    <FAIcon
                        name="search"
                        size={20}
                        color="black"
                        style={{ marginLeft: 10 }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                        onFocus={() => {
                            setClicked(true);
                        }}
                    />
                </View>
                {clicked && (
                    <Ionicon name='close' size={22} color={"black"} style={{ marginRight: 10 }} />
                )}
            </View>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 8
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#d9dbda",
        borderRadius: 15
    },
    input: {
        fontSize: 14,
        marginLeft: 10,
    },
});