import axios from 'axios';
import { PostFormModel } from '../models/Post';

const URL = 'http://reduxblog.herokuapp.com/api';
const KEY = 'key=chong901';

export enum EPostAction{
    FETCH_POSTS = 'FETCH_POSTS',
    ADD_POST = 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    FETCH_POST = 'FETCH_POST'
}

export interface PostAction{
    type: EPostAction,
    payload: any
}

export function fetchPosts(): PostAction{
    return {
        type: EPostAction.FETCH_POSTS,
        payload: axios.get(`${URL}/posts?${KEY}`)
    }
}

export function fetchPost(id: number): PostAction{
    return {
        type: EPostAction.FETCH_POST,
        payload: axios.get(`${URL}/posts/${id}?${KEY}`)
    }
}

export function addPost(post: PostFormModel, cb: () => void): PostAction{
    return {
        type: EPostAction.ADD_POST,
        payload: axios.post(`${URL}/posts?${KEY}`, post).then(() => cb())
    }
}

export function deletePost(id: number, cb: () => void): PostAction{
    return {
        type: EPostAction.DELETE_POST,
        payload: axios.delete(`${URL}/posts/${id}?${KEY}`).then((res) => {cb(); return res;})
    }
}