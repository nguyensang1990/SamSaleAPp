import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { mainColor } from '../common/Color';

import {fetchAccountInfo} from '../../actions';

class AccountInformation extends Component {
  render () {
    const { name, gender, email } = this.props.authData.currentUser;
    return (
      <View
        style={{backgroundColor: '#e2edff', flex: 1}}
      >
        <Card
          title={name}
        >
          <Text>Gender: {gender ? 'Male' : 'Female'}</Text>
          <Text>Email: {email}</Text>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    authData: state.authData
  });
};

export default connect(mapStateToProps, {
  fetchAccountInfo
})(AccountInformation);
