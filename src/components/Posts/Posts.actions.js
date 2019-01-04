import actionTypes from './Posts.actionTypes';
//import Ajax from '../../utils/Ajax';
//const GET_ALL_POSTS_URL = "blogPosts.json";


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
            allPosts: processPostsResponse(allPosts),
        },
    };
}

function processPostsResponse( posts ) {
    const postsMap = {};
    posts.forEach( post => {
        postsMap[post.id] = post;
    });
    return postsMap;
}

export function getAllPostsData() {
    return ( dispatch ) => {
        dispatch( getAllPostsInProgress() );

        fetch('/Mocks/blogPosts.json')
            .then( success => success.json() )
            .then( posts => {
                dispatch(getAllPostsSuccess(posts));
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
