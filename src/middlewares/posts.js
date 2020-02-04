import {POSTS_FETCH_POST, fetchPostSuccess, fetchPostError} from "../actions/posts";


export default store => next => action => {
    next(action);

    if (action.type === POSTS_FETCH_POST) {
        fetch('https://simple-blog-api.crew.red/posts')
            .then((result) => result.json())
            .then(postsList => {
                next(fetchPostSuccess(postsList))
            })
            .catch(error => {
                next(fetchPostError(error))
            })
    }
}
