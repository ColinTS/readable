import { combineReducers } from 'redux'

import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS
} from '../constants.js'


const initialState = {
  categories: [],
  posts: [],
  commenets: []

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
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.comments
    }
    default: 
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments
})