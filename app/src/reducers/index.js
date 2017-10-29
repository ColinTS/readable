import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
  PUT_POST_SUCCESS,
  POST_POST_SUCCESS,
  DOWN_POST_SUCCESS,
  UP_POST_SUCCESS,
  DELETE_POST_SUCCESS,
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
        posts: action.posts.sort((b,a) => {
        return a.voteScore - b.voteScore
      })
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
    case DOWN_POST_SUCCESS:
      console.log('DOWNPOST', state, action)
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.post.data.id ? {...post, voteScore: action.post.data.voteScore} : post
        ).sort((a,b) => {
          return b.voteScore - a.voteScore
        })
      }
    case UP_POST_SUCCESS:
      console.log('UPPOST', state, action)
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.post.data.id ? {...post, voteScore: action.post.data.voteScore} : post
        ).sort((b,a) => {
          return a.voteScore - b.voteScore
        })
      }
    case DELETE_POST_SUCCESS:
    console.log('DELETE POST', state, action)
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.post.data.id ? {...post, deleted: true} : post
        ).filter(post => post.deleted)
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
    console.log('NEW COMMENT',action.comment)
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