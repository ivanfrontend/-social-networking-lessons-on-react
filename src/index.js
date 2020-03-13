import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom"
//import state, {subscribe} from "./redux/state"
//import {addPost} from './redux/state'
//import {NewPost} from './redux/state'


let renderTree = (state) =>{
    ReactDOM.render(
    <BrowserRouter>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>,
     document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe(renderTree);





