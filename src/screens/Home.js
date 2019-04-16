import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { 
  Header, Left, Body, Right, Title, Item, Input,
  Footer, FooterTab, Button, Icon, Col, Badge,
  Content, Card, CardItem, Thumbnail, Container,
} from 'native-base' 

export default class Example extends Component {
  render() {
    const items = [
      { name: 'Avatar', price: '3000 IDR' }, { name: 'Captain Marvel', price: '3500 IDR' },
      { name: 'Elementalist', price: '4000 IDR' }, { name: 'Theory of Multi-verse', price: '4000 IDR' },
    ];

    return (
      <Container style={{flex: 1}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="md-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <Card style={{flex: 1, flexDirection: 'row'}}>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("desc")}>
                <Image source={require('../assets/images/01.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/01.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/01.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card style={{flex: 1, flexDirection: 'row'}}>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card style={{flex: 1, flexDirection: 'row'}}>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/03.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/03.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/03.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card style={{flex: 1, flexDirection: 'row'}}>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../assets/images/02.jpg')} style={{height: 150, width: 100}}/>
                <Text>78.000 IDR</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </Content>

        <Footer>
          <FooterTab>
            <Button active>
              <Icon name='home' />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("category")}>
              <Icon name="list" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("cart")}>
              <Icon active name="cart" />
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