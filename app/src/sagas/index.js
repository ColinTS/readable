import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../utils/api.js'
import { 
    LOAD_CATEGORIES,
    LOAD_POSTS,
    LOAD_COMMENTS,
    POST_COMMENT
} from '../constants'
import { 
    LoadCategoriesSuccessAction, 
    LoadCategoriesFailAction ,
    LoadPostsSuccessAction,
    LoadPostsFailAction,
    LoadCommentsSuccessAction,
    LoadCommentsFailAction,
    PostCommentSuccessAction,
    PostCommentFailAction
} from '../actions'


export function* loadCategories(action){
    try {
        const categories = yield call(API.getCategories)
        yield put(LoadCategoriesSuccessAction(categories))
    } catch (error) {
        yield put(LoadCategoriesFailAction())
    }
}

export function* loadPosts(action){
    try {
        const posts = yield call(API.getPosts, action.category)
        console.log('posts', posts)
        yield put(LoadPostsSuccessAction(posts))
    } catch (error) {
        yield put(LoadPostsFailAction())
    }
}

export function* loadComments(action){
    try {
        console.log('COMMENTS action', action)
        const comments = yield call(API.getComments, action.postID)
        yield put(LoadCommentsSuccessAction(comments))
    } catch(error){
        yield put(LoadCommentsFailAction())
    }
}

export function* postComment(action){
    try {
        console.log('POST action', action)
        const comment = yield call(API.postComment, action.comment)
        yield put(PostCommentSuccessAction(comment))
    } catch(error){
        yield put(PostCommentFailAction())
    }
}

function* defaultSaga() {
    yield takeLatest(LOAD_CATEGORIES, loadCategories);
    yield takeLatest(LOAD_POSTS, loadPosts);
    yield takeLatest(LOAD_COMMENTS, loadComments)
    yield takeLatest(POST_COMMENT, postComment)
}
  
export default defaultSaga;