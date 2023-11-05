import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = (props: any) => {
    return (
        <View>
            <Text>{props.route.params.id}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})