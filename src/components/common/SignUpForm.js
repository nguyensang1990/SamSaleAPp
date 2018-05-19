import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Text, FormInput, CheckBox } from 'react-native-elements';
import { mainColor } from './Color';

const SignUpForm = ({
  checkMatchPass, userEmailChange,
  passChange, authData, loginUser,
  navigation, fillSignupInfo, match,
  notEnoughInfo, signUpUser, retypePassword,
  passwordMatching
}) => {
  const { name, email, password, gender } = authData.account;
  return (
    <View>
      <FormInput
        shake
        placeholder='Your name'
        autoCorrect={false}
        value={name}
        onChangeText={text => fillSignupInfo({ prop: 'name', value: text })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <CheckBox
          center
          title='Male'
          uncheckedIcon='circle-o'
          checkedIcon='dot-circle-o'
          checked={(gender)}
          onPress={() => fillSignupInfo({ prop: 'gender', value: true })}
          containerStyle={{ backgroundColor: 'transparent', flexGrow: 1 }}
        />

        <CheckBox
          center
          title='Female'
          uncheckedIcon='circle-o'
          checkedIcon='dot-circle-o'
          checked={(!gender)}
          onPress={() => fillSignupInfo({ prop: 'gender', value: false })}
          containerStyle={{ backgroundColor: 'transparent', flexGrow: 1 }}
        />
      </View>
      <FormInput
        shake
        placeholder='Email'
        autoCorrect={false}
        value={email}
        onChangeText={email => fillSignupInfo({ prop: 'email', value: email })}
      />
      <Text style={{ color: 'red', alignSelf: 'center' }} h4>{passwordMatching}</Text>
      <FormInput
        shake
        placeholder='Password'
        secureTextEntry
        autoCorrect={false}
        value={password}
        onChangeText={pass => {
          retypePassword();
          fillSignupInfo({ prop: 'password', value: pass });
        }}

      />
      <FormInput
        shake
        placeholder='Confirm your password'
        secureTextEntry
        autoCorrect={false}
        onChangeText={pass1 => checkMatchPass(pass1)}
      />

      <View>
        <ActivityIndicator
          animating={authData.loading}
          size='large'
        />
        <Text
          style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>
          {authData.signUpStatus}
        </Text>
      </View>

      <Button
        backgroundColor={mainColor}
        fontFamily='Arial'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, padding: 10 }}
        title='SIGN UP'
        textStyle={{ fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0 }}
        onPress={() => {
          if (name === '' || email === '' ||
                password === '' || !match) {
            notEnoughInfo();
          }
          if (name !== '' && email !== '' &&
                password !== '' && match) {
            signUpUser({ email, password, gender, name }, {nav: navigation});
          }
        }}
      />
    </View>
  );
};

export default SignUpForm;
