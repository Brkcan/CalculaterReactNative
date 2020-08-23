import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ButtonComp from './src/component/ButtonComp';
import Calculater from './src/add/Calculater';

class App extends React.Component{

 createPress = () =>
Alert.alert(
     "Alert Title",
     "My Alert Msg",
     [
       {
         text: "Cancel",
         onPress: () => console.log("Cancel Pressed"),
         style: "cancel"
       },
       { text: "OK", onPress: () => console.log("OK Pressed") }
     ],
     { cancelable: false }
   );

  render () {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Calculater />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
