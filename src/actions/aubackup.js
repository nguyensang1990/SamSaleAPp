import { SIGN_UP,
    PASS_CHANGE,
    PHONE_CHANGE,
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    INFO_FAIL,
    FILL_SIGNUP_INFO
   } from './types';
   
  const LoginAPI = 'http://192.168.1.116:3000/AthApi/CheckLogin';
  const SignUpAPI = 'http://192.168.1.116:3000/AthApi/SignUpNew';
  
  export const signUpUser = (Fullname, PhoneNumber, Password, Gender) => {
    return fetch(SignUpAPI, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PhoneNumber,
          Fullname,
          Gender,
          Password
        }),
      })
      ..then(data => console.log(data))
      
    
  };
  
  export const fillSignupInfo = ({ prop, value }) => {
    return {
      type: FILL_SIGNUP_INFO,
      payload: { prop, value }
    }
  }
  
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
      payload: 'Kết nối không ổn định'
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
  