export const POSTS_ADD_POST = 'POSTS_ADD_POST';

export const POSTS_UPDATE_EDITABLE_POST = 'POSTS_UPDATE_EDITABLE_POST';

export const POSTS_RESET_EDITABLE_POST = 'POSTS_RESET_EDITABLE_POST';

export const POSTS_SET_EDITABLE_POST_BY_ID = 'POSTS_SET_EDITABLE_POST_BY_ID';

export const POSTS_SET_VIEWABLE_POST_BY_ID = 'POSTS_SET_VIEWABLE_POST_BY_ID';

export const POSTS_FETCH_POST = 'POSTS_FETCH_POST';

export const POSTS_FETCH_POST_SUCCESS = 'POSTS_FETCH_POST_SUCCESS';

export const POSTS_FETCH_POST_ERROR = 'POSTS_FETCH_POST_ERROR';


export const POSTS_ADD_COMMENT = 'POSTS_ADD_COMMENT';

export const POSTS_FETCH_COMMENT = 'POSTS_FETCH_COMMENT';

export const POSTS_FETCH_COMMENT_SUCCESS = 'POSTS_FETCH_COMMENT_SUCCESS';

export const POSTS_FETCH_COMMENT_ERROR = 'POSTS_FETCH_COMMENT_ERROR';

export const POSTS_UPDATE_EDITABLE_COMMENT = 'POSTS_UPDATE_EDITABLE_COMMENT';

export const POSTS_RESET_EDITABLE_COMMENT = 'POSTS_RESET_EDITABLE_COMMENT';

export const POSTS_SET_EDITABLE_COMMENT_BY_ID = 'POSTS_SET_EDITABLE_COMMENT_BY_ID';

export const POSTS_SET_VIEWABLE_COMMENT_BY_ID = 'POSTS_SET_VIEWABLE_COMMENT_BY_ID';



export const addPost = payload => ({
    type: POSTS_ADD_POST,
    payload
});

export const updateEditablePost = payload => ({
    type: POSTS_UPDATE_EDITABLE_POST,
    payload,
});

export const resetEditablePost = payload => ({
    type: POSTS_RESET_EDITABLE_POST,
    payload,
});

export const setEditablePostById = payload => ({
    type: POSTS_SET_EDITABLE_POST_BY_ID,
    payload,
});

export const setViewablePostById = payload => ({
    type: POSTS_SET_VIEWABLE_POST_BY_ID,
    payload,
});

export const fetchPost = payload => ({
    type: POSTS_FETCH_POST,
    payload
});

export const fetchPostSuccess = payload => ({
    type: POSTS_FETCH_POST_SUCCESS,
    payload
});

export const fetchPostError = payload => ({
    type: POSTS_FETCH_POST_ERROR,
    payload
});

export const addComment = payload => ({
    type: POSTS_ADD_COMMENT,
    payload
});

export const fetchComment = payload => ({
    type: POSTS_FETCH_COMMENT,
    payload
});

export const fetchCommentSuccess = payload => ({
    type:POSTS_FETCH_COMMENT_SUCCESS,
    payload
});

export const fetchCommentError = payload => ({
    type: POSTS_FETCH_COMMENT_ERROR,
    payload
});

export const updateEditableComment = payload => ({
    type: POSTS_UPDATE_EDITABLE_COMMENT,
    payload,
});

export const resetEditableComment = payload => ({
    type: POSTS_RESET_EDITABLE_COMMENT,
    payload,
});

export const setEditableCommentById = payload => ({
    type: POSTS_SET_EDITABLE_COMMENT_BY_ID,
    payload,
});

export const setViewableCommentById = payload => ({
    type: POSTS_SET_VIEWABLE_COMMENT_BY_ID,
    payload,
});