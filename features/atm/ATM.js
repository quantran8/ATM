import React,{ useState} from 'react'
import {View, 
    Button, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { atmApi } from '../../api/atm';
import globalStyle from '../../style';
import Loading from '../../components/Loading';
const ATM = ({navigation}) => {
    const atm = useSelector(state => state.atm);
    const [open,setOpen] = useState(false);
    const [loading,setLoading] = useState(false);
    const [atmName,setAtmName] = useState('');

    /**--add atm-- */
    const handleAddAtm = () => {
      if(atmName) {
        try{
        atmApi.addAtm(atmName);
        }catch(err){
          alert(err.message)
        }
        setOpen(false);
        setAtmName('');
      }
      else
        alert('please enter atm name')
    }
    /**--remove atm-- */
    const handleRemove = async(id) => {
       setLoading(true);
       const res = atmApi.remove(id);
       setLoading(false);

    }
    return (
        <View style={[style.atm,globalStyle.boxShadow]}>
            <Button title="Add ATM" onPress={()=>setOpen(true)}/>
           {atm.atms.map(item => 
                <View style={style.atm_item} key={item.id}>
                    <TouchableOpacity style={style.imgButton} onPress={() =>handleRemove(item.id)}>
                        <Image source={require('../../assets/button.png')} style={style.imgButton} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/atm.png')} style={style.imgAtm} />
                    <Text> {item.name}</Text>
                    <Text>{item.status}</Text>
                    <Text>{item.client}</Text>
                    <Text>{item.transaction}</Text>
                </View>   
           )}
           <Modal
             animationType="fade"
             transparent={false}
             visible={open}
             onRequestClose={() => {
               setOpen(!open);
             }}
           >
              <View  style={style.modal}> 
                  <Text>ATM Name</Text>
                  <TextInput 
                  style={globalStyle.input}
                  value={atmName} 
                  onChangeText={(value) => setAtmName(value)} 
                  />
                  <View style={{display: 'flex',flexDirection: 'row'}}>
                  <Button title="Cancel" onPress={() =>setOpen(!open)} />
                  <Button title="Add" onPress={handleAddAtm} />
                  </View>
              </View>
            
           </Modal>
           {loading&&<Loading/>}
        </View>
    )
}
const style =StyleSheet.create({
    atm:{
      maxWidth:'90%',
      padding:10,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    atm_item:{
       textAlign: 'center',
       flexBasis:'40%',
       height:180
    },
    imgAtm:{
        width:100,
        height:100
    },
    imgButton: {
        width:30,
        height:30,
        position: 'absolute',
        zIndex:2
    },
    modal:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    }, input: {
        width:250,
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius:5
      },

})
export default ATM
