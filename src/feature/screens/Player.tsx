import { StyleSheet, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-media-console'
import { useAnimations } from '@react-native-media-console/reanimated'

const Player = (props: any) => {
    return (
        <View style={{ flex: 1 }} >
            <VideoPlayer
                onBack={props.navigation.goBack}
                useAnimations={useAnimations}
                source={{ uri: props.route.params.url }}
                navigator={props.navigator}
                style={styles.backgroundVideo}
                onEnterFullscreen={() => { }}
            />
        </View>
    )
}

export default Player

var styles = StyleSheet.create({
    backgroundVideo: {
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});