import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId = this.props.userId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
    
}






let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), // 3
    withRouter, // 2
    // withAuthRedirect // 1
)(ProfileContainer)