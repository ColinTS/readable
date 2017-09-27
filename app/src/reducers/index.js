import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as modal } from 'redux-modal'

import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
  PUT_POST_SUCCESS
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
    case PUT_POST_SUCCESS:
    console.log('POSTY',action.post.data)
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.post.data.id ? {...post, title: action.post.data.title, body: action.post.data.body} : post
        )
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
    console.log('COMMENTY',action.comment)
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
  modal,
  categories,
  posts,
  comments
})