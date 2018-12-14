import UUID from 'uuid/v4';
import { fromJS } from 'immutable';
import {
    POSTS_ADD_POST,
    POSTS_UPDATE_EDITABLE_POST,
    POSTS_FETCH_POST_SUCCESS,
    POSTS_RESET_EDITABLE_POST,
    POSTS_SET_VIEWABLE_POST_BY_ID,
    POSTS_SET_EDITABLE_POST_BY_ID,
} from "../actions/posts";

const initialState = fromJS({
    post: [],
    editablePost: {
        id:null,
        title: '',
        body: ''
    },
    currentViewableCommentID: null,
});

export default ( state = initialState, action) => {
  switch(action.type) {
      case POSTS_ADD_POST: {
          return state.updateIn(['post'], post => (post.push(fromJS(action.payload).set('id', UUID()))))
      }
      case POSTS_UPDATE_EDITABLE_POST: {
          return state.mergeIn(['editablePost'], fromJS(action.payload));
      }
      case POSTS_RESET_EDITABLE_POST: {
          return state.set('editablePost', initialState.get('editablePost'));
      }
      case POSTS_SET_EDITABLE_POST_BY_ID: {
          const editablePost = state
              .get('post')
              .findLast(comment => comment.get('id') === action.payload);

          return state.set('editablePost', editablePost);
      }
      case POSTS_SET_VIEWABLE_POST_BY_ID: {
          return state.set('currentViewablePostID', action.payload);
      }
      case POSTS_FETCH_POST_SUCCESS: {
          return state.set('post', fromJS(action.payload))
      }
      default: {
          return state;
      }
  }
};