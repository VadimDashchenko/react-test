import { createSelector } from 'reselect';

export const getPosts = createSelector(
    state => state.posts.get('post'),
    postsList => postsList.toJS(),
);

export const getEditablePost = createSelector(
    state => state.posts.get('editablePost'),
    editablePost => editablePost.toJS(),
);

export const getCurrentViewablePostID = createSelector(
    state => state.comments.get('currentViewablePostID'),
    postId => postId,
);

export const getCurrentViewablePost = createSelector(
    getCurrentViewablePostID,
    state => state.posts.get('post'),
    (postId, postsList) => {
        const foundPost = postsList.findLast(post => post.get('id') === postId);
        return foundPost && foundPost.toJS();
    },
);

export const getPostsList = createSelector(
    state => state.posts.get('post'),
    (postsList) =>
        postsList
            .filter(post =>
                post
                    .valueSeq()
                    .join('')
            )
            .toJS(),
);