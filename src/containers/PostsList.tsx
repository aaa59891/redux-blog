import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { fetchPosts, PostAction } from '../actions';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import { Posts } from '../models/Post';

export interface PostsListProps extends RouteComponentProps<any>{
    posts: Posts,
    fetchPosts():PostAction 
}

class PostsListContainer extends React.Component<PostsListProps>{
    public componentDidMount(){
        this.props.fetchPosts();
    }
    public render(){
        return (
            <div>
                <div className="float-right">
                    <Link to="/posts/new" className="btn btn-primary">Add new post</Link>
                </div>
                Posts:
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }

    private renderList(){
        return _.map(this.props.posts, (post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
                <li className="list-group-item">{post.title}</li>
            </Link>
        ));
    }
}

function mapStateToProps({posts}: StoreState){
    return {posts}
}

export const PostsList = connect(mapStateToProps, {fetchPosts})(PostsListContainer)