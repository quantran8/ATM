import React from 'react'
import { View,Text,StyleSheet ,ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        position: 'absolute',
        zIndex:100,
        width: '100%',
        height: '100%',
        opacity:0.4
    }
})
export default Loading
