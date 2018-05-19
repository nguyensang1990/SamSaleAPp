import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { logOutUser } from '../actions';
import { mainColor } from './common/Color';

class Account extends Component {
  renderButton () {
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
      );
    } else {
      return (
        <Button
          backgroundColor={mainColor}
          onPress={() => this.props.navigation.navigate('LogIn')}
          title='Log In'
          textStyle={{fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0}}
          buttonStyle={{ marginTop: 10 }}
        />
      );
    }
  }

  render () {
    return (
      <View>
        <Button
          leftIcon={{name: 'account-box', size: 34, padding: 0, margin: 0}}
          buttonStyle={{padding: 5}}
          title='Account Information'
          backgroundColor='#91b0e2'
          textStyle={{fontSize: 22, padding: 0, margin: 0}}
          buttonStyle={{marginTop: 10}}
          onPress={() => this.props.navigation.navigate('AccountInformation')}
        />
        {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    authData: state.authData
  };
};

export default connect(mapStateToProps, {
  logOutUser
})(Account);
