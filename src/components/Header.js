import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { mainColor } from './common/Color';

import Cart from './Cart';

class AppHeader extends Component {
  render () {
    return (
      <Header
        placement='left'
        backgroundColor={mainColor}
        centerComponent={{ text: this.props.state2.title, style: { color: '#fff', fontSize: 18, fontWeith: 'bold' } }}
        rightComponent={
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              name='shopping-cart'
              iconStyle={{ paddingRight: 10, color: 'white' }}
              onPress={() => this.props.state.navigate('Cart')}
            />
            <Badge
              value={this.props.cartCounter}
              textStyle={{ color: mainColor }}
            />
          </View>
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cartCounter: state.addToCart.cartCounter
  };
};

export default connect(mapStateToProps)(AppHeader);
