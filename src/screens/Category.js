import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
  Container, Footer, FooterTab, Icon, Button, Content,
  List, ListItem, Left, Right
} from 'native-base';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>Fiksi Populer</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Teknologi</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Sastra</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate("home")}>
              <Icon name='home' />
            </Button>
            <Button active>
              <Icon name="list" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate("cart")}>
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

