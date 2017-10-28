import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../utils/api.js'
import { 
    LOAD_CATEGORIES,
    LOAD_POSTS,
    LOAD_COMMENTS,
    POST_COMMENT,
    PUT_POST,
    POST_POST,
    DOWN_POST,
    UP_POST
} from '../constants'
import { 
    LoadCategoriesSuccessAction, 
    LoadCategoriesFailAction ,
    LoadPostsSuccessAction,
    LoadPostsFailAction,
    LoadCommentsSuccessAction,
    LoadCommentsFailAction,
    PostCommentSuccessAction,
    PostCommentFailAction,
    PutPostSuccessAction,
    PostPostSuccessAction,
    DownPostSuccessAction,
    UpPostSuccessAction
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
        Promise.reject(error)
    }
}

export function* putPost(action){
    try {
        console.log('PUT POST', action.post)
        const post = yield call(API.editPost, action.post.postID, action.post.title, action.post.body)
        yield put(PutPostSuccessAction(post))
        console.log('POST',post)
    } catch(error){
        Promise.reject(error)
    }
}

export function* postPost(action){
    try {
        const post = yield call(API.postPost, action.post)
        yield put(PostPostSuccessAction(post))
    } catch(error){
        Promise.reject(error)
    }
}

export function* downPost(action){
    try {
        console.log('DOWN', action)
        const post = yield call(API.downPost, action.postID, action.option)
        yield put(DownPostSuccessAction(post))
    } catch(error){
        Promise.reject(error)
    }
}

export function* upPost(action){
    try {
        console.log('UP', action)
        const post = yield call(API.upPost, action.postID, action.option)
        yield put(UpPostSuccessAction(post))
    } catch(error){
        Promise.reject(error)
    }
}

function* defaultSaga() {
    yield takeLatest(LOAD_CATEGORIES, loadCategories);
    yield takeLatest(LOAD_POSTS, loadPosts);
    yield takeLatest(LOAD_COMMENTS, loadComments)
    yield takeLatest(POST_COMMENT, postComment)
    yield takeLatest(PUT_POST, putPost)
    yield takeLatest(POST_POST, postPost)
    yield takeLatest(DOWN_POST, downPost)
    yield takeLatest(UP_POST, upPost)
}
  
export default defaultSaga;