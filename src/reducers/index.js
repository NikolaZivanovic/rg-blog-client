import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import GetAllPostsReducer from '../components/posts/posts.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  posts: GetAllPostsReducer,
});

export default rootReducer;
