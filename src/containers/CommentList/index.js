import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import * as postsActions from '../../actions/posts';
import { getCommentList } from '../../selectors/comments';
import commentShape from '../../shapes/comment';
import postShape from '../../shapes/post';

import './styles.css';
import {getPostsList} from "../../selectors/posts";


class CommentList extends Component {
    static propTypes = {
        setEditableCommentById: PropTypes.func.isRequired,
        setViewableCommentById: PropTypes.func.isRequired,
        commentsList: PropTypes.arrayOf(commentShape).isRequired,
        postsList: PropTypes.arrayOf(postShape).isRequired,
        currentViewableCommentID: PropTypes.string,
    };

    static defaultProps = {
        currentViewableCommentID: null,
    };

    handleShowClick = ({ target }) => {
        const { setViewableCommentById } = this.props;

        setViewableCommentById(target.dataset.commentId);
    };

    render() {
        const { commentsList, postsList } = this.props;

        return (
            <ul className="CommentsList">
                {commentsList.map(({  id, postId, body }) => {
                        if(postsList.id === commentsList.postId) {
                            return (
                                <li >
                                    <List celled >
                                        <List.Item key={postId}
                                                   //data-comment-id={id}
                                                   onClick={this.handleShowClick}>
                                            <List.Content>
                                                {body}
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </li>
                            )
                        }
                        }
                    )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    commentsList: getCommentList(state),
    postsList: getPostsList(state)
    //currentViewableClientID: getCurrentViewableClientID(state),
});

export default connect(
    mapStateToProps,
    postsActions,
)(CommentList);