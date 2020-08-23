import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ButtonComp = (props) => {

  return (
    <View >
      <TouchableOpacity
         style={styles.button}
         onPress={props.onPress}>
         <Text style= {styles.text}>{props.text}</Text>
       </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  button : {
    marginTop: 10,
    borderRadius:10,
    backgroundColor: "#4f85bc",
    height: 40,
    width:100,
    justifyContent: "center",
    alignItems: "center"
},
  text: {
    color:"white",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default ButtonComp;
