import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
  PUT_POST_SUCCESS,
  POST_POST_SUCCESS,
  EDIT_MODAL_ON,
  SET_CATEGORY
} from '../constants.js'


const initialState = {
  categories: [],
  posts: [],
  comments: [],
  category: "",
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
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.post.data.id ? {...post, title: action.post.data.title, body: action.post.data.body} : post
        )
      }
    case POST_POST_SUCCESS:
    console.log('NEWPOST', action.post.data)
    return {
      ...state,
      posts: [...state.posts, action.post.data]
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

function editModal(state = {open: false}, action){
  switch(action.type){
    case EDIT_MODAL_ON:
      console.log(state)
      return {
        ...state,
        open: true
      }
      default:
        return state
  }
}

function category(state = initialState, action){
  switch(action.type){
    case SET_CATEGORY:
    console.log('ACTION', action)
      return {
        ...state,
        category: action.category
      }
      default:
        return state
  }
}

export default combineReducers({
  form: formReducer,
  categories,
  posts,
  comments,
  editModal,
  category
})