import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, CardItem, Card} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import database from '../../database/Firebase.js';
export default class fgp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        timeout: false,
        email: '',
    };
  }

  onPressfgp = () => {
    account={
      email:this.state.email,
    }
    database.fgp(account);
    this.props.navigation.navigate("SignIn")
  };

  onChangeTextEmail = email => this.setState({ email });

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
                            <Input />
                            </Item>
                        </Form>

                        <Button block style={{ backgroundColor: '#2E59F1', marginVertical: 50 }} onPress={this.onPressfgp}>
                            <Text style={{ color: 'white' }}>OK</Text>
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
