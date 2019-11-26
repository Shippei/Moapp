import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'

class Page4 extends React.Component {

  state = {
    email: '',
    password:'',
  };

  onPressOK = () => {
    account={
      email:this.state.email,
      password:this.state.password,
    }
    database.login(account,this.login_success,this.login__fail)
  };

  login_success=async()=>{
    Alert.alert("Login Success");
    this.props.navigation.navigate("Page6Screen",{userID: account.email})
  }

  login__fail=async(error)=>{
    Alert.alert(error);
  }
  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <View style={{flex:1,justifyContent: 'center'}}>
      <Text style={{textAlign:'left',marginTop:20,color:'black',fontSize:20}}>Email</Text>
      <TextInput
        style={styles.nameInput}
        placeholder=""
        onChangeText={this.onChangeTextEmail}
      />
      <Text style={{textAlign:'left',marginTop:20,color:'black',fontSize:20}}>Password</Text>
      <TextInput
        style={styles.nameInput}
        placeholder=""
        secureTextEntry ={true}
        onChangeText={this.onChangeTextPassword}
      />

      <TouchableOpacity
        style={styles.touchableUser}
        onPress={this.onPressOK}>
        <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Sign In</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <Text style={{fontSize:15}}>You don't have an account yet? </Text>
      <Text style={{textDecorationLine: 'underline',color:'black'}}
            onPress={() => this.props.navigation.navigate("Page5Screen")}>Sign up Now</Text>
      </View>
      <Text style={{textDecorationLine: 'underline',color:'blue',textAlign:'center'}}
            onPress={() => this.props.navigation.navigate("Page1Screen")}>Forgot password?</Text>
      </View>
      </LinearGradient>
    );
  }
}
const offset = 16;
const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  },
  text: {
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
  textInput: {
      alignItems: 'center',
      height:50,
      width:310,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
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
});
export default Page4;
