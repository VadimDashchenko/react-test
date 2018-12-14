import React from 'react';
import AppHeader from '../../components/AppHeader/index';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import *as postsActions from '../../actions/posts';

const enhance = compose(
    connect(
        null,
        postsActions,
    ),
    lifecycle({
        componentDidMount() {
            const { fetchPost, fetchComment } = this.props;
            fetchPost();
            fetchComment();
        },
    }),
);

const App = () => {
        return (
            <div className="App">
                <div className="App-header">
                    <AppHeader />
                </div>
            </div>
        )
};

export default enhance(App);
