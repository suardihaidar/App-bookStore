import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Shipping from './Shipping'
import Payment from './Payment'
import { Container, Tabs, Tab } from 'native-base';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <Tabs>
            <Tab heading="Shipping">
              <Shipping />
            </Tab>
            <Tab heading="Payment">
              <Payment />
            </Tab>
          </Tabs>
      </Container>
    );
  }
}
