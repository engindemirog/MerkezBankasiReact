import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css"
import store from './store/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistor from "./store/persistStore"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor = {persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
