import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { StoreState } from '../types';
import { fetchPost, PostAction, deletePost } from '../actions';
import { Post } from '../models/Post';
import { Link } from 'react-router-dom';

interface PostDetailProps extends RouteComponentProps<{id: number}>{
    fetchPost(id: number): PostAction;
    deletePost(id: number, cb: () => void): PostAction;
    post: Post;
}

class PostDetailContainer extends React.Component<PostDetailProps>{
    public componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    public render(){
        const {post} = this.props;
        if(!post){
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back to List</Link>
                <div className="float-right">
                    <button 
                        className="btn btn-danger"
                        onClick={this.onDelete.bind(this)}
                        >Delete</button>
                </div>
                <h3>{post.title}</h3>
                <p>{post.categories}</p>
                <p>{post.content}</p>
            </div>
        )
    }

    private onDelete(){
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        })
    }
}

const mapPostToProps = (state: StoreState, props: PostDetailProps) => ({post: state.posts[props.match.params.id]})
export const PostDetail = connect(mapPostToProps, {fetchPost, deletePost})(PostDetailContainer)