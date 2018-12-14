import React from 'react';
import { Switch, Route, BrowserRouter, Link, Redirect } from 'react-router-dom';
import ViewPost from '../../containers/ViewPost/index';
import LastPost from '../../containers/LastPost/index';
import PostDetail from '../PostDetail/index';

const AppHeader = () => {
    return(
        <BrowserRouter>
            <div className="AppHeader">
                <div className="AppHeader-content">
                    <Link to="/Latest Posts">Latest post</Link>
                    <Link to="/View Post">View Post</Link>
                    <Switch>
                        <Route path="/View Post" component={PostDetail}  />
                        <Route path="/Latest Posts" component={ViewPost} exact />
                        <Route exact path="/" render={() => (
                            ViewPost ? (
                                <Redirect to="/ViewPosts/posts"/>
                            ) : (
                                <PostDetail/>
                            )
                        )}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default AppHeader;