import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Stack from './Routers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA5Q6SZa6MnnVDiFeAslNvtDqRVeGGjZOA",
      authDomain: "samsaleapp.firebaseapp.com",
      databaseURL: "https://samsaleapp.firebaseio.com",
      projectId: "samsaleapp",
      storageBucket: "samsaleapp.appspot.com",
      messagingSenderId: "717473770102"
    };
    firebase.initializeApp(config);
  }
  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Stack />
      </Provider>
    )
  }
};

export default App;
