import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar,Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, CardItem, Card} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import database from '../../database/Firebase.js';
export default class SignUp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        timeout: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
  }

  onPressAddAccount = () => {
    account={
      email:this.state.email,
      password:this.state.password,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
    }
    database.createAccount(account,this.add_Account_success,this.add_Account_fail)
    database.createAut(account,this.add_Aut_success,this.add_Aut_fail)
    this.props.navigation.navigate("SignIn")
  };

  add_Account_success=async(id)=>{

  }

  add_Account_fail=async()=>{
    Alert.alert('Create Account fail');
  }
  add_Aut_success=async()=>{

  }

  add_Aut_fail=async(error)=>{
    Alert.alert('AUT FAIL');
  }
  onChangeTextFirstName = firstName => this.setState({ firstName });
  onChangeTextLastName = lastName => this.setState({ lastName });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render(){
      return (
        <Container>
            <Content>
            <Grid>
                <Row size={2}>
                    <Image source={require('../../img/Logo-new.png')} style={{height: 300, width: null, flex: 1}}/>
                </Row>
                <Row size={1}>
                    <Col></Col>
                    <Col style={{ width: 350 }}>
                        <Form>
                            <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={this.onChangeTextEmail}/>
                            </Item>
                            <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={this.onChangeTextPassword}/>
                            </Item>
                            <Item floatingLabel>
                            <Label>Firstname</Label>
                            <Input onChangeText={this.onChangeTextFirstName}/>
                            </Item>
                            <Item floatingLabel last>
                            <Label>Lastname</Label>
                            <Input onChangeText={this.onChangeTextLastName}/>
                            </Item>
                        </Form>

                        <Button block style={{ backgroundColor: '#2E59F1', marginVertical: 50 }} onPress={this.onPressAddAccount}>
                            <Text style={{ color: 'white' }}>Sign Up</Text>
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
                <Row size={1}></Row>
            </Grid>
            </Content>
        </Container>
      );
  }
}
