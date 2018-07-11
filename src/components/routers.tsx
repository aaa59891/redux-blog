import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {PostsList} from '../containers/PostsList';
import { PostForm } from '../containers/PostForm';
import { PostDetail } from '../containers/PostDetail';
export default class Routers extends React.Component{
    public render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/posts/new" component={PostForm}/>
                    <Route path="/posts/:id" component={PostDetail}/>
                    <Route path="/" component={PostsList}/>
                </Switch>
            </BrowserRouter>
        );
    }
}