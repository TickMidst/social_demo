import {profileAPI, usersAPI} from './../api/api'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_STATUS = 'GET_STATUS'
const DELETE_POST = 'DELETE_POST'

export const addPostActionCreator = (formikPost) => {
    return {
        type: ADD_POST,
        formikPostText: formikPost
    }
};
export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setStatusActionCreator = (status) => {
    return {
        type: GET_STATUS,
        status     /* хз почему тут ничего нет */
    }
}

export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: "I'm fine", likeCount: 17},
        {id: 2, message: "What's happening?", likeCount: 6},
        {id: 2, message: "Hello", likeCount: 17}
    ],

    newPostText: '',
    profile: null,
    status: ''

};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.formikPostText,
                likeCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case GET_STATUS: {
            return {...state, status: action.status}
        }

        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }

        default:
            return state;
    }
}

export const setUser = (userId) => {
    return async (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusActionCreator(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status))
    }
}


export default profileReducer;
