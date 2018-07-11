import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Blog from '../blog/blog';
import { getAllPostsData } from "./Posts.actions";

class Posts extends React.Component {

    componentDidMount() {
        this.props.getAllPostsData();
    }

    render() {

        if (this.props.postsReducer.isLoading) {
            return <div>Loading...</div>
        }

        if (this.props.postsReducer.isError) {
            return <div>Error occurred!</div>
        }

        return (
            <div>
                {
                    this.props.post &&
                    <Blog
                        id={this.props.post.id}
                        author={this.props.post.author}
                        title={this.props.post.title}
                        text={this.props.post.articleText}
                    />
                    ||
                    <div>
                        Blog not found!
                    </div>
                }
            </div>
        );
    }
}

function getSinglePostByIdSelector(posts, postId) {
    let foundPost = null;
    if (posts && posts[postId]) {
        foundPost = posts[postId];
    }
    return foundPost;
}

Posts.propTypes = {
    post: PropTypes.object,
    postsReducer: PropTypes.object.isRequired,
    getAllPostsData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
    const requestedPostId = props.match.params.postId;
    return {
        post: getSinglePostByIdSelector(state.posts.data, requestedPostId),
        postsReducer: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPostsData: () => {
            dispatch(getAllPostsData());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
