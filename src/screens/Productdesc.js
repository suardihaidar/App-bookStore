import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Container, Content, Footer, Button, Card, Col, Left, Right, CardItem, Body} from 'native-base'

export default class Productdesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <Content>
                <Card>
                    <Col style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
                        <Image source={require('../assets/images/01.jpg')} style={{height: 150, width: 100}}/>
                    </Col>
                    <Col style={{padding: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Binorrow : Tongkat Musa Dan Tujuh Roh Borne</Text>
                        <Text>78.000 IDR</Text>
                    </Col>
                </Card>
                <Card>
                    <CardItem bordered>
                        <Left>
                            <Text>Writer</Text>
                        </Left>
                        <Right>
                            <Text>Sudarman BK</Text>
                        </Right>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Text>Publisher</Text>
                        </Left>
                        <Right>
                            <Text>Mojok</Text>
                        </Right>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Text>Language</Text>
                        </Left>
                        <Right>
                            <Text>Bahasa Indonesia</Text>
                        </Right>
                    </CardItem>
                    <CardItem header>
                        <Text>Description</Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitat...
                        </Text>
                    </CardItem>
                    <CardItem button>
                        <Text>Read More</Text>
                    </CardItem>
                </Card>
            </Content>
            <Footer style={{backgroundColor: '#fff'}}>
                <Button onPress={() => this.props.navigation.navigate('cart')}>
                    <Text style={{padding: 40, fontSize: 15, color: '#fff', fontWeight: 'bold'}}>Add to Cart</Text>
                </Button>
            </Footer>
        </Container>
    );
  }
}
