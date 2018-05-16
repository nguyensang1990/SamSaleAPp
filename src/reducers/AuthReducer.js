import update from 'immutability-helper';

import { 
SIGN_UP_SUCCESS,
SIGN_UP_FAIL,
PHONE_CHANGE,
PASS_CHANGE,
LOGIN_USER,
LOGIN_SUCCESS,
LOGIN_FAIL,
INFO_FAIL,
LOG_OUT,
FILL_SIGNUP_INFO,
LOGIN_OR_SIGN_UP
 } from '../actions/types';

const INITIAL_STATE = {
  account: {
    FullName: '',
    Gender: true,
    PhoneNumber: '',
    Password: '',
  },
  currentUser: {},
  currentLogin: false,
  loading: false,
  error: '',
  signUpStatus: '',
  logInOrSignUp: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILL_SIGNUP_INFO:
      return { ...state,
          account: { ...state.account,
            [action.payload.prop]: action.payload.value } };
    case PHONE_CHANGE:
      return update(state,
        { account: { PhoneNumber: { $set: action.payload } }
      });
    case PASS_CHANGE:
      return { ...state,
        account: { ...state.account, Password: action.payload },
        error: ''
      };
    case SIGN_UP_SUCCESS:
      return { ...state, signUpStatus: action.payload, loading: false, logInOrSignUp: true };
    case SIGN_UP_FAIL:
      return { ...state, signUpStatus: action.payload, loading: false };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, currentLogin: true, currentUser: action.payload, error: '', signUpStatus: '' };
    case INFO_FAIL:
      return { ...state, loading: false, error: 'Thông tin đăng nhập không đúng' };
    case LOGIN_FAIL:
      return { ...state, 
        loading: false, 
        error: action.payload,
      account: { ...state.account, name: '', pass: '' }
    };
    case LOG_OUT:
      return INITIAL_STATE;
    case LOGIN_OR_SIGN_UP:
      return { ...state, logInOrSignUp: action.payload };

    default: return state;
  }
};
