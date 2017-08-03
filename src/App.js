import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as form } from 'redux-form';
import Parent1 from './example1/Parent';
import Parent2 from './example2/Parent';

const store = createStore(combineReducers({ form }))
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <Parent1 /> */}
          <Parent2 /> 
        </div>
      </Provider>
    );
  }
}

export default App;
