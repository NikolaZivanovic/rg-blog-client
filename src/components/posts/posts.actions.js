import actionTypes from './posts.actionTypes';
import Ajax from '../../utils/Ajax';

const GET_ALL_POSTS_URL = "blogPosts.json";


function getAllPostsInProgress() {
    return {
        type: actionTypes.GET_ALL_POSTS_IN_PROGRESS,
    };
}

function getAllPostsError() {
    return {
        type: actionTypes.GET_ALL_POSTS_ERROR,
    };
}

function getAllPostsSuccess( allPosts ) {
    return {
        type: actionTypes.GET_ALL_POSTS_SUCCESS,
        payload: {
            allPosts,
        },
    };
}

export function getAllPostsData() {
    return ( dispatch ) => {

        fetch('./Mocks/blogPosts.json')
            .then( success => success.json() )
            .then( posts => {
                dispatch( getAllPostsSuccess( posts ) );
            })
            .catch( error => {
                dispatch ( getAllPostsError(error) );
            });

        /*Ajax.get( GET_ALL_POSTS_URL ).then( success => {
            dispatch( getAllPostsSuccess( success.data ) );
        }).catch( error => {
            dispatch ( getAllPostsError(error) );
        });*/
    };
}
