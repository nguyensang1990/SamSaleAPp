import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Home from './components/Home';
import Menu from './components/Menu';
import Info from './components/Info';
import Cart from './components/Cart';
import Account from './components/Account';
import AppHeader from './components/Header';
import LogIn from './components/LogIn';
import DeliveryForm from './components/DeliveryForm';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'YOUR SHOP NAME',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name='home' size={20} color={tintColor} />
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: 'PICK YOUR ITEMS',
      tabBarLabel: 'Menu',
      tabBarIcon: ({ tintColor }) => <Icon name='list' size={20} color={tintColor} />
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      title: 'CONTACT INFORMATION',
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => <Icon name='contacts' size={20} color={tintColor} />
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'CHECK OUT',
      tabBarLabel: 'Your Cart',
      tabBarIcon: ({ tintColor }) => <Icon name='shopping-cart' size={20} color={tintColor} />
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'ACCOUNT INFO',
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={20} color={tintColor} />
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: true,
    style: { height: 50 },
    showLabel: false
  },
  animationEnabled: false
}
);

const Stack = StackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: ({ navigation, navigationOptions }) => ({
        header: <AppHeader state={navigation} state2={navigationOptions} />
      })
    },
    LogIn: {
      screen: LogIn,
      mode: 'modal',
      headerMode: 'none',
      navigationOptions: {
        title: 'Log in'
      }
    },
    DeliveryForm: {
      screen: DeliveryForm,
      mode: 'modal',
      headerMode: 'none',
      navigationOptions: {
        title: 'Order information'
      }
    }
  }
);

const mapStateToProps = state => ({
  cartCounter: state.addToCart.cartCounter
});

export default connect(mapStateToProps)(Stack);
