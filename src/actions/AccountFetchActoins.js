import firebase from 'firebase';
import {
  FETCH_ACCOUNT_INFO
} from './types';

export const fetchAccountInfo = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/userInfo/${currentUser.uid}/`)
    .on('value', snapshot => {
      console.log(snapshot.val());
      dispatch({
        type: FETCH_ACCOUNT_INFO,
        payload: snapshot.val()
      });
    });
}
;
