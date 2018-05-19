import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
import { mainColor } from './Color';

const LogInForm = ({
  userEmailChange,
  passChange, authData, loginUser,
  navigation
}) => {
  const { email, password } = authData.account;
  return (
    <View>
      <FormInput
        autoCorrect={false}
        shake
        placeholder='Email'
        value={email}
        onChangeText={(text) => userEmailChange(text)}
        autoCapitalize='none'
      />
      <FormInput
        shake
        placeholder='Password'
        secureTextEntry
        autoCorrect={false}
        value={password}
        onChangeText={(text) => passChange(text)}
      />
      <View>
        <ActivityIndicator
          animating={authData.loading}
          size='large'
        />
        <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>{authData.error}</Text>
        <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'red', justifyContent: 'center' }} h4>{authData.signUpStatus}</Text>
      </View>
      <Button
        backgroundColor={mainColor}
        fontFamily='Arial'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, padding: 10 }}
        title='LOG IN'
        textStyle={{ fontWeight: 'bold', fontSize: 25, padding: 0, margin: 0 }}
        onPress={() => loginUser({ email, pass: password }, { nav: navigation })}
      />
    </View>
  );
};

export default LogInForm;
