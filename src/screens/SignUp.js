import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, TextInput, View, Dimensions, 
  TouchableOpacity, Image, Alert
} from 'react-native';
import {Icon} from 'native-base'

const {width: WIDTH} = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      showPass: true,
      press: false
    }
  }

  validation = () => {
    const {email, username, password} = this.state
    if(true)
      Alert.alert('Welcome! ' + username)
      this.props.navigation.navigate('home')
  }

  showPass = () => {
    this.setState(prevState => ({showPass : !prevState.showPass, press: !prevState.press}))
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/icons/raidrop.png')} style={styles.logo} />
          <Text style={styles.logoText}>RainDrop Book Store</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'md-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'E-mail'}
            onChangeText={email => this.setState({email})}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'md-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            onChangeText={username => this.setState({username})}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'md-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
            style={styles.inputIcon}/>
          <TextInput
            style={styles.input} 
            placeholder={'Password'}
            onChangeText={password => this.setState({password})}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'md-eye-off' : 'md-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.btnCreate} onPress={this.validation}> 
          <Text style={styles.text}>Create your account</Text>
        </TouchableOpacity>

        <View style={{marginTop: 80}}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("login")}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29b6f6',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 50,
    height: 100,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 1,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 1.0)',
    marginHorizontal: 40
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 52
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 52
  },
  btnCreate: {
    width: WIDTH - 180,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#003c8f',
    justifyContent: 'center',
    marginTop: 80,
  },
  text: {
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 18,
    textAlign: 'center'
  },
});
