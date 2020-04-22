import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getUserData } from '../../redux/auth-reducer';
import Preloader from '../common/preloader/preloader';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        // if(!this.props.isAuth) return <Preloader />

        return <Header {...this.props} />
    }

}


const mapStateToprops = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToprops, {getUserData})(HeaderContainer)


