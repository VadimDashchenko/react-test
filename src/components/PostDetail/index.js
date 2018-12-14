import React from 'react';
import { branch, renderNothing, compose } from 'recompose';
import { connect } from 'react-redux';
import { Card, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import postShape from '../../shapes/post';
import { getCurrentViewablePost } from '../../selectors/posts';

const enhance = compose(
    connect(store => ({
        post: getCurrentViewablePost(store),
    })),
    branch(({ post }) => typeof post === 'undefined', renderNothing),
);

const PostsDetail = ({ post: { id, title,body } }) => (
    <List>
        <List.Content className="PostDetail">
            <Card.Header><h1><strong>{title}</strong></h1></Card.Header>
            <Card.Description><h3>{body}</h3></Card.Description>
        </List.Content>
    </List>
);

PostsDetail.propTypes = {
    post: postShape.isRequired,
};

export default enhance(PostsDetail);