import  { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos, isLoading } from './todos/reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = {
    todos,
    isLoading
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer =  combineReducers(reducers);
const persisterReducer = persistReducer(persistConfig, rootReducer);

export const configureMyStore = () => createStore(persisterReducer,
                                                  composeWithDevTools(
                                                    applyMiddleware(thunk)
                                                  )
                                                  );
                                                //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                                //   window.__REDUX_DEVTOOLS_EXTENSION__()