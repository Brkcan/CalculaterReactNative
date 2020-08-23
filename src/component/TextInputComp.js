import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';


const TextInputComp = (props) => {

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText ={props.onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput : {
    marginTop: 10,
    borderRadius:10,
    height: 40,
    width:100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor:'red',
    color: 'white'
},
});


export default TextInputComp;
