import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input, Textarea } from '../components/bootstrap';
import { connect } from 'react-redux';
import { addPost, PostAction } from '../actions';
import { PostFormModel } from '../models/Post';
export interface PostFormProps extends RouteComponentProps<any>, InjectedFormProps<PostFormModel, {}>{
    addPost(post: PostFormModel, cb: () => void):PostAction
}

class PostFormContainer extends React.Component<PostFormProps>{
    public render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                    name="title" 
                    label="Title"
                    component={Input}
                    />
                <Field
                    name="categories"
                    label="Categories"
                    component={Input}
                    />
                <Field
                    name="content"
                    label="Content"
                    component={Textarea}
                    />
                <div>
                    <button className="btn btn-primary" disabled={this.props.invalid}>Submit</button>
                </div>
            </form>
        )
    }


    private onSubmit(value: PostFormModel, _: any, props: PostFormProps){
        props.addPost(value, () => {
            props.history.push('/');
        });
    }
}

function validate(post: PostFormModel){
    const error:PostFormModel = {};
    if(!post.title){
        error.title = 'Title is required.';
    }
    if(!post.categories){
        error.categories = 'Categories is required.';
    }
    if(!post.content){
        error.content = 'Content is required'
    }
    return error;
}
export const PostForm = connect(null, {addPost})(reduxForm<PostFormModel, {}>({
    validate,
    form: 'postForm'
})(PostFormContainer));