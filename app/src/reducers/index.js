import { combineReducers } from 'redux'

import {
  LOAD_CATEGORIES,
  LOAD_POSTS,
  LOAD_COMMENTS
} from '../actions'


//Calender reducer
const initialCategoriesState = {
  categories: []
}

function categories(state = initialCategoriesState, action){
  switch(action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default: 
      return state
  }
}

//Posts reducer
const initialPostsState = {
  posts: []
}

function posts(state = initialPostsState, action){
  switch(action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.posts
    }
    default: 
      return state
  }
}

//Comments reducer
const initialCommentsState = {
  commenets: []
}

function comments(state = initialPostsState, action){
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