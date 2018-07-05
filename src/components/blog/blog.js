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
            <CardText><Link to="/">Read more</Link></CardText>
        </Card>
    );
};

Blog.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
export default Blog;

