import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store, { persistor } from './Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import ReactModal from 'react-modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
ReactModal.setAppElement('#root');
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
       <App />
    </PersistGate >
  </Provider>
);



