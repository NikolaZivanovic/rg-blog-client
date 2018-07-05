import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getAllPostsData} from "./Posts.actions";
import Blog from '../blog/blog';


class Posts extends Component {

    componentDidMount(){
        this.props.getAllPostsData();
    }

    render() {

        if (this.props.postsReducer.isLoading || !this.props.posts) {
            return <div>Loading...</div>
        }

        if (this.props.postsReducer.isError) {
            return <div>Error occurred!</div>
        }

        const posts = this.props.posts.map( post => {
            if( post.status === "published" ) {
                return <article key={post.id}>
                            <Blog
                                title = {post.title}
                                text = {post.articleText}
                                author = {post.author}
                            />
                        </article>;
            }
        } );

        return (
            <div style={{color: '#ffdddf'}}>
                { posts }
            </div>
        );
    }
}

Posts.propTypes = {
    getAllPostsData: PropTypes.func.isRequired,
    postsReducer: PropTypes.object.isRequired,
    posts: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        postsReducer: state.posts,
        posts: state.posts.data,
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
