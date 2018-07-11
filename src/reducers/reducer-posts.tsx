import { PostAction, EPostAction } from "../actions";
import * as _ from 'lodash';
import { Posts } from "../models/Post";

export default function reducerPosts(state: Posts = {}, action: PostAction){
    switch (action.type) {
        case EPostAction.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case EPostAction.DELETE_POST:
            return _.omit(state, action.payload.data.id);
        case EPostAction.FETCH_POST:
            const data = action.payload.data;
            return {...state, [data.id]: data};
        default:
            return state;
    }
}