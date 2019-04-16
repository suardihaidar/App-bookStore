import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Container, Content, Footer, FooterTab, Button, Icon, Header, Item, Input, Card, Left, Right
} from 'native-base'

export default class Profile extends Component<{}> {

  render() {
    return (
      <Container>
        <Header style={{alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 20}}>My Profile</Text>
        </Header>
        <Content>
          <Card style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Left>
              <Icon style={{height: 100, padding: 20, top: 20}} name='person'/>
            </Left>
            <Right>
              <Text style={{fontSize: 20, right: 10}}>Jhon Sena</Text>
            </Right>
          </Card>
          <Card>
            <TouchableOpacity>
              <Text style={{padding: 20, fontSize: 20, fontWeight: 'bold'}}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("login")}>
              <Text style={{padding: 20, fontSize: 20, fontWeight: 'bold'}}>Log Out</Text>
            </TouchableOpacity>
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
            <Button onPress={() => this.props.navigation.navigate("cart")}>
              <Icon name="cart" />
            </Button>
            <Button active>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
