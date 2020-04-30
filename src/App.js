import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from './Components/News/News';
import { Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './Components/common/preloader/preloader';
// import StoreContext from './StoreContext';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
}
  render(){
    if(!this.props.initialized) { 
      return <Preloader />
    }
    return (
      
      <div className={`App`}>
        <HeaderContainer />
        <Sidebar />
        <div className="app_content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer /> } />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
  );
  }

}


const mapStateToprops = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter, // 2
  connect(mapStateToprops, {initializeApp }), // 3
)(App)
