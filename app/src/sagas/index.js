import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../utils/api.js'
import { 
    LOAD_CATEGORIES,
    LOAD_POSTS
} from '../constants'
import { 
    LoadCategoriesSuccessAction, 
    LoadCategoriesFailAction ,
    LoadPostsSuccessAction,
    LoadPostsFailAction
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
        console.log(action)
        const posts = yield call(API.getPosts, action.category)
        yield put(LoadPostsSuccessAction(posts))
    } catch (error) {
        yield put(LoadPostsFailAction())
    }
}

function* defaultSaga() {
    yield takeLatest(LOAD_CATEGORIES, loadCategories);
    yield takeLatest(LOAD_POSTS, loadPosts);
}
  
export default defaultSaga;