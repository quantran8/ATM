import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width:250,
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius:5
      },
      boxShadow:{
        borderStyle:'solid',
        shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
      }
})
export default styles