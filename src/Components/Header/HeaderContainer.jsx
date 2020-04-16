import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import { setUserData } from '../../redux/auth-reducer';
import Preloader from '../common/preloader/preloader';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.auth().then( data => {
           if(data.resultCode === 0){
               let {id, email, login} = data.data
            this.props.setUserData(id, email, login)
           }
           
        })
    }

    render() {
        if(!this.props.isAuth) return <Preloader />

        return <Header {...this.props} />
    }

}


const mapStateToprops = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToprops, {setUserData})(HeaderContainer)


