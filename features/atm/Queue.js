import React from 'react'
import { View,FlatList,Text,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import globalStyle from '../../style';
const Queue = () => {
    const atm = useSelector(state => state.atm);
    return (
        <View style={[styles.queue,globalStyle.boxShadow]}>
            <Text style={styles.h1}>Queue</Text>
            <FlatList
            style = {styles.list}
             nestedScrollEnabled={true}
             keyExtractor={(item) => item.name}
             data={atm.queue}
             renderItem={({item}) => 
                <View >
                    <Text>{item.name}</Text>
                    <Text>{item.transaction}</Text>
                </View>
            }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    queue: {
        width:'90%',
        padding: 10,
      
    },
    h1:{
        fontSize:30
    },list:{
        maxHeight:150,
    }
})
export default Queue
