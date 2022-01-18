import React,{useEffect} from 'react'
import { 
  View,
  Text ,
  StyleSheet,
  ScrollView,
  LogBox
} from 'react-native';
import globalStyle from '../../style';
import { useSelector } from 'react-redux'
const ProcessedClient = () => {
    const atm = useSelector(state => state.atm)
    useEffect(()=>{
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])
    return (
        <View style={styles.processedClient}>       
            <Text style={styles.h1}>ProcessedClient</Text>
            {atm.atms.map(item => 
                <View key={item.id}>
                    <Text style={styles.atmName} >{item.name}</Text>
                    <ScrollView 
                    nestedScrollEnabled={true}
                    style={[styles.process,globalStyle.boxShadow]}>
                      <View  style={styles.flex}>
                      {atm.processedClient.map(process=>
                          <Text key={process.clientName}>
                            {process.atmId==item.id && process.clientName+', '}
                          </Text>
                        )}
                      </View>
                    </ScrollView>
                </View>
              )}
           
         </View>
    )
}
const styles = StyleSheet.create({
   processedClient: {
     width:'90%',
   },
   atmName:{
     fontSize:20,
     fontWeight:"500"
   },
   h1:{
     fontSize:30
   },
   process:{
     padding: 10,
     maxHeight:150,
   },
   flex:{
     display: 'flex',
     flexDirection: 'row',
     flexWrap:'wrap',
   }, 
})
export default ProcessedClient
