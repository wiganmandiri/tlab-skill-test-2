import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './store/rootReducer';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { encryptTransform } from 'redux-persist-transform-encrypt';
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const encryptor = encryptTransform({
  secretKey: `${import.meta.env.REACT_APP_SECRET_KEY}`,
  onError: function (error) {
    //handle error
  }
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
  transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store;

store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.REACT_APP_MODE === 'DEVELOPMENT',
  middleware: [thunk]
});
let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
)
