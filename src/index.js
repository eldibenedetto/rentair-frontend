import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import manageUser from './reducers/manageUsers'
import carReducer from './reducers/carReducer'
import reservationReducer from './reducers/reservationReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers({manageUser, carReducer, reservationReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
