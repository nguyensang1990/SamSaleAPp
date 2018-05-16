import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, ListItem, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { logOutUser } from '../actions';
import { mainColor } from './common/Color';

class Account extends Component {

  renderButton() {
    const { currentLogin } = this.props.authData;
    if (currentLogin) {
      return (
        <Button
          backgroundColor={mainColor}
          onPress={() => this.props.logOutUser()}
          title='Log Out'
          textStyle={{fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0}}
          buttonStyle={{ marginTop: 10 }}
        />
      )
    } else {
      return (
        <Button
          backgroundColor={mainColor}
          onPress={() => this.props.navigation.navigate('LogIn')}
          title='Log In'
          textStyle={{fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0}}
          buttonStyle={{ marginTop: 10 }}
        />
      )
    }

  }

  render() {
    return (
      <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              avatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
          {this.renderButton()}
      </View>
    )
  }
}

const list = [
  {
    name: 'Account Information',
    subtitle: ''
  },
  {
    name: 'Purchase history',

  },
];

  const mapStateToProps = state => {
    return {
      authData: state.authData
    }
  }

export default connect(mapStateToProps, {
  logOutUser
})(Account);
