import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureMyStore } from "./store.js";


const store = configureMyStore();
const persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}> 
        <PersistGate 
            loading={<div>Loading...</div>}
            persistor={persistor}>
            
            <App />
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);


