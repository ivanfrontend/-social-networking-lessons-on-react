import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getUserData, logout } from '../../redux/auth-reducer';
import Preloader from '../common/preloader/preloader';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}


const mapStateToprops = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToprops, {logout})(HeaderContainer)


