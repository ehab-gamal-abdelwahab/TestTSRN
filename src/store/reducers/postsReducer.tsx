import actionTypes from '../actions/actionTypes';

const initialstate = {
    posts:[],
    postDetails: {}
}

type Action = {
    type: string,
    payload?: any
}

export const postsReducer =  (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case actionTypes.GET_POST_DETAILS:
            return {
                ...state,
                postDetails: action.payload
            }
        default:
            return state;
    }
};