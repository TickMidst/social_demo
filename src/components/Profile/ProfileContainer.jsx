import Profile from './Profile'
import React from 'react';
import { setUser, updateStatus, getStatus} from './../../redux/profileReducer'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {withAuthRedirect} from './../hoc/withAuthRedirect'
import { compose } from 'redux';



class ProfileContainer extends React.Component {
  componentDidMount() {
            let userId = this.props.match.params.userId;
            this.props.setUser(userId);
            this.props.getStatus(userId)
            
  }

  render() {
    return        <div>
      <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  </div>}
}




let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})




export default compose (
  connect (mapStateToProps, {setUser, updateStatus, getStatus}),
  withRouter) (ProfileContainer)