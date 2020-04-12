import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import { setUserData } from '../../redux/auth-reducer';
import Preloader from '../common/preloader/preloader';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then( response => {
           if(response.data.resultCode === 0){
               let {id, email, login} = response.data.data
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


