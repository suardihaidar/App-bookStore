import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Footer, Button, Content, Tab } from 'native-base';

export default class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Content>

        </Content>
        <Footer style={{backgroundColor: '#fff'}}>
          <Button>
            <Text style={{padding: 40, fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
              Next
            </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
