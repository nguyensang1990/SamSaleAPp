import firebase from 'firebase';

import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  PASS_CHANGE,
  EMAIL_CHANGE,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  INFO_FAIL,
  FILL_SIGNUP_INFO,
  LOGIN_OR_SIGN_UP
} from './types';

export const signUpUser = ({ email, password }) => dispatch => {
  spinnerRun(dispatch);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => console.log(data))
    .catch(e => signUpFail(dispatch, e));
};

export const loginUser = ({ email, pass }, { nav }) => dispatch => {
  spinnerRun(dispatch);
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(user => loginSuccess(dispatch, user, nav))
    .catch(e => loginFail(dispatch, e));
};

export const signUpStatusCheck = (dispatch, data) => {
  if (!data.Status) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: 'Sign Up failed, please try again'
    });
  } else if (data.Status) {
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: 'Sign Up sucessful'
    });
  }
};

const signUpFail = (dispatch, e) => {
  dispatch({
    type: SIGN_UP_FAIL,
    payload: e.message
  });
};

export const changeLogInOrSignUp = (status) => {
  return {
    type: LOGIN_OR_SIGN_UP,
    payload: status
  };
};

export const fillSignupInfo = ({ prop, value }) => {
  return {
    type: FILL_SIGNUP_INFO,
    payload: { prop, value }
  };
};

export const spinnerRun = (dispatch) => {
  dispatch({
    type: LOGIN_USER
  });
};

export const loginSuccess = (dispatch, data, nav) => {
  if (data.Status === false) {
    dispatch({
      type: INFO_FAIL
    });
  } else {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.User
    });
    console.log(data);
    nav.navigate('Menu');
  }
};

export const loginFail = (dispatch, e) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: e.message
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

export const userEmailChange = (text) => ({
  type: EMAIL_CHANGE,
  payload: text
});
