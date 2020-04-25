import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = 2
        this.props.getUserProfile(userId)
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
    
}






let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default compose(
    connect(mapStateToProps, {getUserProfile}), // 3
    withRouter, // 2
   // withAuthRedirect // 1
)(ProfileContainer)