import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
import ButtonComp from '../component/ButtonComp';
import TextInputComp from '../component/TextInputComp';

class Calculater extends React.Component{
constructor (props){
    super(props);
    this.state  = {
      num1 : 0,
      num2 : 0,
      isaret: null,
      total: 0
    }
}

add = () => {
  let total = parseInt(this.state.num1) + parseInt(this.state.num2);

  this.setState({
    total,
    isaret: "+",
  })
}
sub = () => {
  let total = parseInt(this.state.num1) - parseInt(this.state.num2);

  this.setState({
    total,
    isaret: "-",
  })
}

sayı_1 = () => {
      if(this.state.num1 == 0 || this.state.isaret == null){
          this.setState({
            num1: numbers[index],
          })
      }else {
        this.setState({
          num2: numbers,
        })
      }
}

sayı_2 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 2,
    })
  }else {
    this.setState({
      num2: 2,
    })
  }
}
sayı_3 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 3
    })
  }else {
    this.setState({
      num2: 3,
    })
  }
}
sayı_4 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 4
    })
  }else {
    this.setState({
      num2: 4,
    })
  }
}
sayı_5 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 5
    })
  }else {
    this.setState({
      num2: 5,
    })
  }
}
sayı_6 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 6
    })
  }else {
    this.setState({
      num2: 6,
    })
  }
}
sayı_7 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 7
    })
  }else {
    this.setState({
      num2: 7,
    })
  }
}
sayı_8 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 8
    })
  }else {
    this.setState({
      num2: 8,
    })
  }
}
sayı_9 = () => {
  if(this.state.num1 == 0 || this.state.isaret == null){
    this.setState({
      num1: 9
    })
  }else {
    this.setState({
      num2: 9,
    })
  }
}
clear = () => {
  this.setState({
    num1: 0,
    num2: 0,
    isaret: null,
  })
}
/*<TextInputComp
  placeholder="Sayı 1"
  keyboardType={'numeric'}
  onChangeText= {num1=>this.setState({num1})}/>
<TextInputComp
  placeholder="Sayı 2"
  keyboardType={'numeric'}
  onChangeText = {num2=>this.setState({num2})}
/>*/

  render () {
    return (

      <View style={styles.container}>
          <View style={styles.textınput}>
            <Text style={styles.textNum1}>{this.state.num1}</Text>
            <Text style={styles.textNum1}>{this.state.isaret}</Text>
            <Text style={styles.textNum1}>{this.state.num2}</Text>
          </View>
          <View style={styles.sayilarText}>
            <ButtonComp
             title="1"
             onPress={this.sayı_1}
             text="1">
             </ButtonComp>
             <ButtonComp
              title="2"
              onPress={this.sayı_2}
              text="2">
              </ButtonComp>
              <ButtonComp
               title="3"
               onPress={this.sayı_3}
               text="3">
               </ButtonComp>
             </View>
             <View style={styles.sayilarText}>
               <ButtonComp
                title="4"
                onPress={this.sayı_4}
                text="4">
                </ButtonComp>
                <ButtonComp
                 title="5"
                 onPress={this.sayı_5}
                 text="5">
                 </ButtonComp>
                 <ButtonComp
                  title="6"
                  onPress={this.sayı_6}
                  text="6">
                  </ButtonComp>
                </View>
                <View style={styles.sayilarText}>
                  <ButtonComp
                   title="7"
                   onPress={this.sayı_7}
                   text="7">
                   </ButtonComp>
                   <ButtonComp
                    title="8"
                    onPress={this.sayı_8}
                    text="8">
                    </ButtonComp>
                    <ButtonComp
                     title="9"
                     onPress={this.sayı_9}
                     text="9">
                     </ButtonComp>
                   </View>
                <ButtonComp
                 title="Clear"
                 onPress={this.clear}
                 text="Clear">
                </ButtonComp>
            <View style={styles.buttonstyle}>
              <ButtonComp
               title="Tıkla"
               onPress={this.add}
               text="+">
               </ButtonComp>
               <ButtonComp
                title="Tıkla"
                onPress={this.sub}
                text="-">
                </ButtonComp>
              <Text>{this.state.total}</Text>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonstyle: {
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  sayilarText: {
    flexDirection: 'row',
    padding: 5,

  },
  textınput: {
    flex:2,
    marginTop:20,
    padding:5,
    width: 400,
    backgroundColor:"#1E1240",
    color:'white',
    flexDirection:'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
  textNum1: {
    color:'white',
    fontSize: 40,
    textAlign: 'center',
    padding:10,
  }
})

export default Calculater;
