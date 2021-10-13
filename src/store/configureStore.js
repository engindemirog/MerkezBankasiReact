import { compose, createStore,applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import LocalStorage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/rootSaga";

const persistConfig ={
    key:"root",
    storage: LocalStorage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxImmutableStateInvariantMiddleware = reduxImmutableStateInvariant();

const sagaMiddleware = createSagaMiddleware();


const middlewares = [reduxImmutableStateInvariantMiddleware,sagaMiddleware]
const enhancers = []

if(middlewares.length>0){
    enhancers.push(applyMiddleware(...middlewares))
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,composeEnhancers(...enhancers))

sagaMiddleware.run(rootSaga)

export default store;



//Proje oluştur - todoApp
//List Todos
//Favorilere ekle
//Favorilerim listelensin
//Favoriden çıkarılabilsin

//redux,middleware conf., persistor, semantic(optional)