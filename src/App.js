import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  let test = "App";
  return (
      <div className={`${test}`}>
        <Header/>
        <Sidebar dataFriends={props.state.sidebar} />
        <div className="app_content">
          <Route path='/profile' render={() => <Profile store={props.store}/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} /> } />
          <Route path='/news' render={() => <News />} />
        </div>
      </div>
  );
}

export default App;
