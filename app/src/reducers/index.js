import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS
} from '../constants.js'


const initialState = {
  categories: [],
  posts: [],
  comments: []
}

function categories(state = initialState, action){
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      }
    default: 
      return state
  }
}

function posts(state = initialState, action){
  switch(action.type) {
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
    }
    default: 
      return state
  }
}

function comments(state = initialState, action){
  switch(action.type) {
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments
    }
    case POST_COMMENT_SUCCESS:
    console.log(action.comment)
      return {
        ...state,
        comments: [...state.comments, action.comment]
      }
    default: 
      return state
  }
}



export default combineReducers({
  form: formReducer,
  categories,
  posts,
  comments
})