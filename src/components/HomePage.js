import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Posts from "./posts/Posts";

const HomePage = () => {
  return (
    <div>
        <Card>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <Link to="/">Read more</Link>
            <Posts/>
        </Card>
    </div>
  );
};

export default HomePage;

