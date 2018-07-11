import actionTypes from './Posts.actionTypes';

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    data: null,
};


export default function GetAllPostsReducer(state = INITIAL_STATE, action ) {
    switch (action.type) {

        case actionTypes.GET_ALL_POSTS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            };

        case actionTypes.GET_ALL_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case actionTypes.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.allPosts,
            };

        default:
            return state;
    }
}

