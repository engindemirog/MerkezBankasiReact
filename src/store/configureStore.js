import { compose, createStore,applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import LocalStorage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const persistConfig ={
    key:"root",
    storage: LocalStorage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxImmutableStateInvariantMiddleware = reduxImmutableStateInvariant();

const middlewares = [reduxImmutableStateInvariantMiddleware]
const enhancers = []

if(middlewares.length>0){
    enhancers.push(applyMiddleware(...middlewares))
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,composeEnhancers(...enhancers))

export default store;
