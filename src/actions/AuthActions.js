import { 
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  PASS_CHANGE,
  PHONE_CHANGE,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  INFO_FAIL,
  FILL_SIGNUP_INFO,
  LOGIN_OR_SIGN_UP
 } from './types';
 
import { LoginAPI, SignUpAPI } from '../config/Api';

export const signUpUser = ({ FullName, PhoneNumber, Password, Gender }) => {
  return (dispatch) => {
    spinnerRun(dispatch);
    fetch(SignUpAPI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PhoneNumber,
        FullName,
        Gender,
        Password
      }),
    })
    .then(data => data.json())
    .then(data => signUpStatusCheck(dispatch, data))
    .catch(e => loginFail(dispatch, e));
  };
};

export const signUpStatusCheck = (dispatch, data) => {
  if(!data.Status) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: "Sign Up failed, please try again"
    })
  }else if (data.Status) {
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: 'Sign Up sucessful'
    });
  }
}

export const changeLogInOrSignUp = (status) => {
  return {
    type: LOGIN_OR_SIGN_UP,
    payload: status
  }
}

export const fillSignupInfo = ({ prop, value }) => {
  return {
    type: FILL_SIGNUP_INFO,
    payload: { prop, value }
  };
};

export const loginUser = ({ phone, pass }, { nav }) => dispatch => {
  spinnerRun(dispatch);
  fetch(LoginAPI, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phoneNumber: phone,
      password: pass
    })
  })
    .then(response => response.json())
    .then(data => loginSuccess(dispatch, data, nav))
    .catch(e => loginFail(dispatch, e));
};

export const spinnerRun = (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
};

export const loginSuccess = (dispatch, data, nav) => {
  if (data.Status === false) {
    dispatch({
      type: INFO_FAIL,
    });
  }  else {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.User
    });
    console.log(data)
    nav.navigate('Menu');
  }
};

export const loginFail = (dispatch, e) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: 'Internet is not stable'
  });
  console.log(e);
};

export const logOutUser = () => ({
    type: LOG_OUT
  });

export const passChange = (text) => ({
    type: PASS_CHANGE,
    payload: text
  });

export const userphoneChange = (text) => ({
    type: PHONE_CHANGE,
    payload: text
  });
