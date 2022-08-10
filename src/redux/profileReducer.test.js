import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 5 },
        { id: 2, message: "I'm fine", likeCount: 17 },
        { id: 2, message: "What's happening?", likeCount: 6 },
        { id: 2, message: "Hello", likeCount: 17 }
    ]
}

test('lenght of posts should be incremented', () => {

    // 1. test data
    let action = addPostActionCreator('yeeee')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
   // expect(newState.posts[4].message).toBe('yeeee')
});

test('likeCount should be zero', () => {

    // 1. test data
    let action = addPostActionCreator('yeeee')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].likeCount).toBe(0)
});

test('after deleting length of messages should be decrement', () => {

    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

