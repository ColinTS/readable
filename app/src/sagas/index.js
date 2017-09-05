import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../utils/api.js'
import { 
    LOAD_CATEGORIES,
} from '../constants'
import { 
    LoadCategoriesSuccessAction, 
    LoadCategoriesFailAction 
} from '../actions'


export function* loadCategories(action){
    try {
        const categories = yield call(API.getCategories)
        yield put(LoadCategoriesSuccessAction(categories))
    } catch (error) {
        yield put(LoadCategoriesFailAction())
    }
}

function* defaultSaga() {
    yield takeLatest(LOAD_CATEGORIES, loadCategories);
}
  
export default defaultSaga;