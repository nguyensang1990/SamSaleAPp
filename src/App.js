import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import firebaseConfig from '../firebaseConfig';
import Stack from './Routers';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp(firebaseConfig);
  }
  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Stack />
      </Provider>
    );
  }
}

export default App;
