import React from 'react'
import { View ,Text ,StyleSheet,ScrollView} from 'react-native'
import ATM from './ATM'
import Queue from './Queue'
import ProcessedClient from './ProcessedClient';
import Style from '../../style'
const ATMScreen = () => {
    return (
        <View style={styles.container}>
           
              
                <ScrollView >
                <View style={styles.container}>

                <ATM/>
                <Queue/>
                <ProcessedClient />
                </View>
                </ScrollView>

                
        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'   ,
        justifyContent:'space-between'    
    },
    scroll:{
        flex: 1,
       
    }
})
export default ATMScreen
