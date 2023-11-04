import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Search = () => {
    const colors = useTheme().colors;
    const [text, setText] = useState("")
    return (
        <View style={{}} >
            <TextInput value={text} onChangeText={(text) => setText(text)} ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default Search