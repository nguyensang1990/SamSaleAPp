import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Card, Button, Text, FormInput, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { mainColor } from './common/Color';

import { fillSignupInfo,
  loginUser,
  passChange,
  userphoneChange,
  signUpUser,
  changeLogInOrSignUp
 } from '../actions';

class LogIn extends Component {
  state = { login: true, signUp: 'Sign up?', check: true, match: false, passwordMatching: '' }

  componentWillMount() {
    this.props.changeLogInOrSignUp(true);
  }

  checkMatchPass(pass1) {
    const { FullName, PhoneNumber, Password, Gender } = this.props.authData.account;
    if (Password === pass1) {
      this.setState({ passwordMatching: 'Password matched', match: true })
    }
    if (Password !== pass1) {
      this.setState({ passwordMatching: 'Password is not matched', match: false })
    }
    {/*
    if (this.state.match === true) return this.props.signUpUser({ FullName, PhoneNumber, Password, Gender });
    */}
  }

  onPhoneInput(text) {
    this.props.userphoneChange(text)
  }


  renderForm() {
    const { FullName, PhoneNumber, Password, Gender } = this.props.authData.account;
    if (this.props.authData.logInOrSignUp) {
      return (
        <View>
          <FormInput
            autoCorrect={false}
            shake
            placeholder='Phone number'
            value={PhoneNumber}
            onChangeText={this.onPhoneInput.bind(this)}
            autoCapitalize="none"
          />
          <FormInput
            shake
            placeholder='Password'
            secureTextEntry={true}
            autoCorrect={false}
            value={Password}
            onChangeText={(text) => this.props.passChange(text)}
          />
          <View>
            <ActivityIndicator
              animating={this.props.authData.loading}
              size='large'
            />
            <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>{this.props.authData.error}</Text>
            <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>{this.props.authData.signUpStatus}</Text>
          </View>
          <Button
            backgroundColor={mainColor}
            fontFamily='Arial'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, padding: 10 }}
            title='LOG IN'
            textStyle={{ fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0 }}
            onPress={() => this.props.loginUser({ phone: PhoneNumber, pass: Password }, { nav: this.props.navigation })}
          />
        </View>
      )
    } else {
      return (
        <View>
          <FormInput
            shake
            placeholder='Your name'
            autoCorrect={false}
            value={FullName}
            onChangeText={text => this.props.fillSignupInfo({ prop: 'FullName', value: text })}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <CheckBox
              center
              title='Male'
              uncheckedIcon='circle-o'
              checkedIcon='dot-circle-o'
              checked={(Gender)}
              onPress={() => this.props.fillSignupInfo({ prop: 'Gender', value: true })}
              containerStyle={{ backgroundColor: 'transparent', flexGrow: 1 }}
            />

            <CheckBox
              center
              title='Female'
              uncheckedIcon='circle-o'
              checkedIcon='dot-circle-o'
              checked={(!Gender)}
              onPress={() => this.props.fillSignupInfo({ prop: 'Gender', value: false })}
              containerStyle={{ backgroundColor: 'transparent', flexGrow: 1 }}
            />
          </View>
          <FormInput
            shake
            placeholder='Phone number'
            autoCorrect={false}
            value={PhoneNumber}
            onChangeText={phone => this.props.fillSignupInfo({ prop: 'PhoneNumber', value: phone })}
          />
          <Text style={{ color: 'red', alignSelf: 'center' }} h4>{this.state.passwordMatching}</Text>
          <FormInput
            shake
            placeholder='Password'
            secureTextEntry={true}
            autoCorrect={false}
            value={Password}
            onChangeText={pass => {
              this.setState({ match: false, rePass: '', passwordMatching: '' });
              this.props.fillSignupInfo({ prop: 'Password', value: pass });
            }}

          />
          <FormInput
            shake
            placeholder='Confirm your password'
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={pass1 => {
              this.checkMatchPass(pass1)
              }}
          />
          
          <View>
            <ActivityIndicator
              animating={this.props.authData.loading}
              size='large'
            />
            <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>{this.props.authData.signUpStatus}</Text>
          </View>

          <Button
            backgroundColor={mainColor}
            fontFamily='Arial'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, padding: 10 }}
            title='SIGN UP'
            textStyle={{ fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0 }}
            onPress={() => {
              if (FullName === '' || PhoneNumber === '' ||
                Password === '' || !this.state.match){
                this.setState({ passwordMatching: 'Not enough information' });
              }
              if (FullName !== '' && PhoneNumber !== '' &&
                Password !== '' && this.state.match) {
                    this.props.signUpUser({ FullName, PhoneNumber, Password, Gender });
                  }
            }}
          />
        </View>
      )
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
  userphoneChange,
  signUpUser,
  changeLogInOrSignUp
})(LogIn);
