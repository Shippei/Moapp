import React from 'react';
import { Constants, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'

class Fgp extends React.Component {

  constructor (props){
     super (props);
     this.state ={
       email: '',
     };

  }

  onPressAddAccount = () => {
    account={
      email:this.state.email,
    }
    database.fgp(account,this.add_Account_success,this.add_Account_fail);
    this.props.navigation.navigate("Page4Screen")
  };

  add_Account_success=async(id)=>{

  }

  add_Account_fail=async()=>{
      console.log('Account fail');
  }

  onChangeTextEmail = email => this.setState({ email });

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>

      <View style={{flex:1,justifyContent: 'center'}}>

        <View style={{justifyContent:'center', width:150}}>
             <TouchableOpacity onPress={this.pickImage}>
             <Image
                 style={styles.imgStyles}
                 source={{uri:this.state.imageuri}}/>
             </TouchableOpacity>
        </View>
        <Text style={{textAlign:'center',marginTop:20,color:'black',fontSize:20}}>Reset Password</Text>
        <Text style={{textAlign:'left',marginTop:20,color:'black',fontSize:20}}>Email</Text>
        <TextInput
          style={styles.nameInput}
          placeholder=""
          onChangeText={this.onChangeTextEmail}/>

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAddAccount}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>OK</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  },
  touchablePassword:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },

  buttonText: {
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:30,
      color:'#ffffff'
  },
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  }
});

export default Fgp;
