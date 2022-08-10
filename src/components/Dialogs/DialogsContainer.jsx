import React from 'react';
import { connect } from 'react-redux';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from './../hoc/withAuthRedirect'
import { compose } from 'redux';


const mapStateToProps = (state) => {     
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        },

        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }

    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) 

