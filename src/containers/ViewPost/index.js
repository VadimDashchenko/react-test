import React, { PureComponent } from 'react';
import *as PropTypes from 'prop-types';
import AddComment from '../../components/AddComments/index';
import postShape from '../../shapes/post';
import { getPostsList, getCurrentViewablePostID } from '../../selectors/posts';
import { connect } from 'react-redux';
import *as postsActions from '../../actions/posts';
import 'semantic-ui-css/semantic.min.css';
import { List } from 'semantic-ui-react';
import CommentList from '../CommentList/index';
import classNames from 'classnames';

import './styles.css';

class ViewPost extends PureComponent {

    static propTypes = {
        setEditablePostById: PropTypes.func.isRequired,
        setViewablePostById: PropTypes.func.isRequired,
        postsList: PropTypes.arrayOf(postShape).isRequired,
        currentViewablePostID: PropTypes.string,
    };

    static defaultProps = {
        getCurrentViewablePostID: null,
    };

    handleShowClick = ({ target }) => {
        const { setViewablePostById } = this.props;

        setViewablePostById(target.dataset.postId);
    };

    render(){
        const { postsList, currentViewablePostID } = this.props;
        return(
            <div className="ViewPosts">
                <div className="ViewPost-list">
                        {  postsList.map(({id, title}) => {
                            const listItemClassName = classNames('PostsList-item', {
                                isActive: id === currentViewablePostID,
                            });
                            return(
                                    <List className="ViewPost">
                                        <List.Item className="ViewPost-content">
                                                <List.Content key={id}
                                                              className="ViewPost-content"
                                                              data-post-id={id}
                                                              onClick={this.handleShowClick}>
                                                    <strong>{title}</strong>
                                                </List.Content>
                                            <List.Content className="ViewPost-content">
                                                <CommentList />
                                            </List.Content>
                                            <List.Content className="ViewPost-content">
                                                <AddComment />
                                            </List.Content>
                                        </List.Item>
                                    </List>
                            )
                        })}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    postsList:getPostsList(state),
    currentViewablePostID: getCurrentViewablePostID(state)
});

export default connect(
    mapStateToProps,
    postsActions
)(ViewPost);