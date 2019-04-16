import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import Login from '../src/screens/Login'
import SignUp from '../src/screens/SignUp'
import Home from '../src/screens/Home' 
import Category from '../src/screens/Category'
import Cart from '../src/screens/Cart'
import Profile from '../src/screens/Profile'
import Checkout from '../src/screens/Checkout'
import Productdesc from '../src/screens/Productdesc'
import Payment from '../src/screens/Payment'

const appNavigator = createStackNavigator({
    login : { screen : Login, navigationOptions:{header:null}},
    signup : { screen : SignUp, navigationOptions:{header:null}},
    home : { screen : Home, navigationOptions:{header:null}},
    desc : { screen : Productdesc, navigationOptions:{
            title: 'Binorrow', 
            headerStyle: {
                backgroundColor: '#025DE4',
            }
        }},
    category : { screen : Category, navigationOptions:{header:null}},
    cart : { screen : Cart, navigationOptions:{header:null}},
    profile : { screen : Profile, navigationOptions:{header:null}},
    checkout : { screen : Checkout, navigationOptions:{
                title: 'Checkout',
                headerStyle: {
                    backgroundColor: '#025DE4',
                }
            }},
},{
    initialRouteName:'home'
})

export default createAppContainer(appNavigator)