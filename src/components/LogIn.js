import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Card, Button, Text, FormInput, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { mainColor } from './common/Color';
import LogInForm from './common/LogInForm';
import SignUpForm from './common/SignUpForm';

import {
  fillSignupInfo,
  loginUser,
  passChange,
  userEmailChange,
  signUpUser,
  changeLogInOrSignUp
} from '../actions';

class LogIn extends Component {
  state = { login: true, signUp: 'Sign up?', check: true, match: false, passwordMatching: '' };

  componentWillMount() {
    this.props.changeLogInOrSignUp(true);
  }

  checkMatchPass(pass1) {
    const { name, email, password, gender } = this.props.authData.account;
    if (password === pass1) {
      this.setState({ passwordMatching: 'Password matched', match: true })
    }
    if (password !== pass1) {
      this.setState({ passwordMatching: 'Password is not matched', match: false })
    }
  }

  notEnoughInfo() {
    this.setState({ passwordMatching: 'Not enough information' });
    console.log(this.props.authData)
  }

  retypePassword() {
    this.setState({ match: false, rePass: '', passwordMatching: '' });
  }

  renderForm() {
    const { name, email, password, gender } = this.props.authData.account;
    if (this.props.authData.logInOrSignUp) {
      return <LogInForm {...this.props} />
    } else {
      return <SignUpForm {...this.props}
        match={this.state.match}
        notEnoughInfo={this.notEnoughInfo.bind(this)}
        checkMatchPass={this.checkMatchPass.bind(this)}
        retypePassword={this.retypePassword.bind(this)}
        passwordMatching={this.state.passwordMatching}
      />
    }
  }

  render() {
    return (
      <View>
        <Card
          title='Your Information'
        >
          {this.renderForm()}
          <Button
            onPress={() => {
              this.props.changeLogInOrSignUp(false);
              this.setState({ signUp: '' });
            }}
            title={this.state.signUp}
            backgroundColor='transparent'
            textStyle={{ color: '#4286f4' }}
            buttonStyle={{ padding: 0, margin: 0, marginTop: 10 }}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.authData
  };
};

export default connect(mapStateToProps, {
  fillSignupInfo,
  loginUser,
  passChange,
  userEmailChange,
  signUpUser,
  changeLogInOrSignUp
})(LogIn);
