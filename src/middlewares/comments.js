import {POSTS_FETCH_COMMENT,
        fetchCommentSuccess,
        fetchCommentError}
        from "../actions/posts";

export default store => next => action => {
    next(action);

    if( action.type === POSTS_FETCH_COMMENT) {
        fetch('http://localhost:3001/comments')
            .then((result) => result.json())
            .then(commentsList => {
                    next(fetchCommentSuccess(commentsList))
            })
            .catch(error => {
                next(fetchCommentError(error))
            })
    }
}