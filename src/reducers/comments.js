import UUID from 'uuid/v4';
import { fromJS } from 'immutable';

import {
    POSTS_ADD_COMMENT,
    POSTS_UPDATE_EDITABLE_COMMENT,
    POSTS_RESET_EDITABLE_COMMENT,
    POSTS_SET_EDITABLE_COMMENT_BY_ID,
    POSTS_SET_VIEWABLE_COMMENT_BY_ID,
    POSTS_FETCH_COMMENT_SUCCESS
} from "../actions/posts";

const initialState = fromJS({
   comment:[],
   editableComment: {
       id: null,
       postId: '',
       body: ''
   },
    currentViewableCommentID: null,
});

export default ( state = initialState, action) => {
    switch (action.type) {
        case POSTS_ADD_COMMENT: {
            return state.updateIn(['comment'], comment => (comment.push(fromJS(action.payload).set('id', UUID()))))
        }
        case POSTS_UPDATE_EDITABLE_COMMENT: {
            return state.mergeIn(['editableComment'], fromJS(action.payload));
        }
        case POSTS_RESET_EDITABLE_COMMENT: {
            return state.set('editableComment', initialState.get('editableComment'));
        }
        case POSTS_SET_EDITABLE_COMMENT_BY_ID: {
            const editableComment = state
                .get('comment')
                .findLast(comment => comment.get('id') === action.payload);

            return state.set('editableComment', editableComment);
        }
        case POSTS_SET_VIEWABLE_COMMENT_BY_ID: {
            return state.set('currentViewableCommentID', action.payload);
        }
        case POSTS_FETCH_COMMENT_SUCCESS: {
            return state.set('comment', fromJS(action.payload))
        }
        default: {
            return state
        }
    }
}