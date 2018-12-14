import React from 'react';
import { connect } from 'react-redux';
import {Input, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

import * as commentsActions from '../../actions/posts';

const AddComment = ({handleSubmit}) => {
    return(
                <div className="">
                    <Input placeholder="Add comment" transparent name="comment" id="body" onChange={handleSubmit} />
                    <Button onClick={handleSubmit}>Add</Button>
                </div>
    )
};

// addPost = () => {
//     axios.post('http://localhost:3001/comments', {
//         id: 5,
//         body: this.state.body
//     })
//         .then(function( response) {
//             console.log(response);
//         })
//         .catch(function(error) {
//             console.log(error)
//         });
// };

const mapDispatchToProps = dispatch => ({
    handleSubmit: event => {
        event.preventDefault();

        const name = event.target.name.value;

        dispatch(commentsActions.addComment(
            name,
        ))
    }
});

export default connect(
    null,
    mapDispatchToProps,
)(AddComment);