import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar,Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import database from '../../database/Firebase.js';
export default class SignIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      timeout: false,
      email: '',
      password:'',
    };
  }
  onPressOK = () => {
    account={
      email:this.state.email,
      password:this.state.password,
    }
    database.login(account,this.login_success,this.login__fail)
  };

  login_success=async()=>{
    Alert.alert("Login Success");
    this.props.navigation.navigate("Firsttime",{userID: account.email})
  }

  login__fail=async(error)=>{
    Alert.alert(error);
  }
  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});

  render(){
    return (
        <View style={{flex:1, marginTop:StatusBar.currentHeight}}>
            <StatusBar backgroundColor='#396fb1' barStyle="light-content" />
            <Grid>
                <Row size={2}>
                    <Image source={require('../../img/Logo-new.png')} style={{height: null, width: null, flex: 1}}/>
                </Row>
                <Row size={1}>
                    <Col></Col>
                    <Col style={{ width: 350 }}>
                        <Container>
                            <Form>
                                <Item floatingLabel>
                                <Label>Email</Label>
                                <Input onChangeText={this.onChangeTextEmail}/>
                                </Item>
                                <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry ={true} onChangeText={this.onChangeTextPassword}/>
                                </Item>
                            </Form>
                        </Container>
                    </Col>
                    <Col></Col>
                </Row>
                <Row size={1}>
                    <Col></Col>
                    <Col style={{ width: 250 }}>
                        <Row>
                            <Container style={{ marginTop: 20 }}>
                                <Button block style={{ backgroundColor: '#2E59F1' }} onPress={this.onPressOK}>
                                    <Text style={{ color: 'white' }}>Sign In</Text>
                                </Button>
                            </Container>
                        </Row>
                        <Row>
                            <Text>You don't have an account yet?</Text>
                            <Text style={{fontWeight: 'bold'}} onPress={() => this.props.navigation.navigate('AuthStack')}> Sign Up</Text>
                            <Text style={{fontWeight: 'bold'}} onPress={() => this.props.navigation.navigate('fgp')}>Forgot Password?</Text>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Grid>
        </View>
    );
  }
}
