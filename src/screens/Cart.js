import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { 
  Container, Footer, FooterTab, Button, Icon, Content, Card,
  Left, Right, Body, Col
 } from 'native-base';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ''
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 1, flexDirection: 'row'}}>
            <Left style={{padding: 10}}>
              <Image source={require('../assets/images/01.jpg')} style={{height: 150, width: 100}}/>
            </Left>
            <Body style={{flex: 2}}>
              <Text style={{bottom: 20, fontWeight: 'bold', fontSize: 15, left: 40}}>Binorrow : Tongkat Musa Dan Tujuh Roh Borne</Text>
              <TextInput style={{borderWidth: 1, paddingLeft: 20, paddingRight: 15}} onChangeText={count => this.setState({count})}
              maxLength={2}>1</TextInput>
              <Text style={{left: 5, top: 20}}>Total : 78.000 IDR</Text>
            </Body>
            <Right style={{padding: 10, alignItems: 'flex-end', top: 50, right: 10}}>
              <TouchableOpacity>
                <Icon name="trash"/>
              </TouchableOpacity>
            </Right>
          </Card>
        </Content>
        <Content>
          <Card style={{flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end',}}>
            <Left style={{padding: 10}}>
              <Text>ORDER TOTAL</Text>
              <Text style={{fontWeight: 'bold'}}>78.000 IDR</Text>
              <Text>Not including shipping fee</Text>
            </Left>
            <Right style={{padding: 10, right: 10}}>
              <Button style={{height: 60, width: 100}} onPress={() => this.props.navigation.navigate('checkout')}>
                <Text style={{padding: 10, fontSize: 15, color: '#fff', fontWeight: 'bold'}}>CHECKOUT</Text>
              </Button>
            </Right>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("home")}>
              <Icon name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("category")}>
              <Icon name="list" />
            </Button>
            <Button active>
              <Icon name="cart" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("profile")}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
