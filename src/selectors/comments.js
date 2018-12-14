import { createSelector } from 'reselect';

export const getComments = createSelector(
    state => state.comments.get('comment'),
    commentsList => commentsList.toJS(),
);

export const getEditableComment = createSelector(
    state => state.comments.get('editableComment'),
    editableComment => editableComment.toJS(),
);

export const getCurrentViewableCommentID = createSelector(
    state => state.comments.get('currentViewableCommentID'),
    commentId => commentId,
);

export const getCurrentViewableComment = createSelector(
    getCurrentViewableCommentID,
    state => state.comments.get('comment'),
    (commentId, commentsList) => {
        const foundComment = commentsList.findLast(comment => comment.get('id') === commentId);
        return foundComment && foundComment.toJS();
    },
);

export const getCommentList = createSelector(
    state => state.comments.get('comment'),
    (commentsList) =>
        commentsList
            .filter(comment =>
                comment
                    .valueSeq()
                    .join('')
            )
            .toJS(),
);