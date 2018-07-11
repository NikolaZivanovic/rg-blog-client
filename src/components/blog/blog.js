import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import PropTypes from "prop-types";

const Blog = (props) => {
    return (
        <Card>
            <CardTitle title= {props.title} subtitle={props.author} />
            <CardText>
                {props.text}
            </CardText>
            {
                props.isReadMoreVisible &&
                <CardText><Link to={`/posts/${props.id}`}>Read more</Link></CardText>
            }
        </Card>
    );
};

Blog.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isReadMoreVisible: PropTypes.bool,
};
export default Blog;

