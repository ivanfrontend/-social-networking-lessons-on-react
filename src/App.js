import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
// import StoreContext from './StoreContext';

function App(props) {
  let test = "App";
  return (
      <div className={`${test}`}>
        <HeaderContainer />
        <Sidebar />
        {/* <StoreContext.Consumer>
          {
            (store) => {
              let state = store.getState();
             return <Sidebar dataFriends={state.sidebar} />
            }
           
          }
        </StoreContext.Consumer> */}
        
        <div className="app_content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer /> } />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
        </div>
      </div>
  );
}

export default App;
