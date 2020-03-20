import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom"
import StoreContext, { Provider } from './StoreContext';
//import state, {subscribe} from "./redux/state"
//import {addPost} from './redux/state'
//import {NewPost} from './redux/state'


let renderTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>,
     document.getElementById('root')
    );
}

renderTree();

store.subscribe( () => {
    renderTree();
} );





