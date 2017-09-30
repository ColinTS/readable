import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  PUT_POST,
  PUT_POST_SUCCESS,
  PUT_POST_FAIL,
  EDIT_MODAL_ON,
  SET_CATEGORY
} from '../constants.js'


export function LoadCategoriesAction () {
  return {
    type: LOAD_CATEGORIES
  }
}

export function LoadCategoriesSuccessAction (categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories
  }
}

export function LoadCategoriesFailAction () {
  return {
    type: LOAD_CATEGORIES_FAIL
  }
}

export function LoadPostsAction (category) {
  return {
    type: LOAD_POSTS,
    category
  }
}

export function LoadPostsSuccessAction (posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
}

export function LoadPostsFailAction () {
  return {
    type: LOAD_POSTS_FAIL
  }
}

export function LoadCommentsAction (postID) {
  return {
    type: LOAD_COMMENTS,
    postID
  }
}

export function LoadCommentsSuccessAction (comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments
  }
}

export function LoadCommentsFailAction () {
  return {
    type: LOAD_COMMENTS_FAIL
  }
}

export function PostCommentAction(comment){
  return {
    type: POST_COMMENT,
    comment
  }
}

export function PostCommentSuccessAction(comment){
  return {
    type: POST_COMMENT_SUCCESS,
    comment
  }
}


export function PostCommentFailAction(){
  return {
    type: POST_COMMENT_FAIL
  }
}

//editing a post
export function PutPostAction(post){
  return {
    type: PUT_POST,
    post
  }
}

export function PutPostSuccessAction(post){
  return {
    type: PUT_POST_SUCCESS,
    post
  }
}

export function PutPostFailAction(){
  return {
    type: PUT_POST_FAIL
  }
}

//Turn ON/OFF Edit Post Modal
export function EditModalOnAction(){
  return {
    type: EDIT_MODAL_ON
  }
}

//set the current category name
export function SetCategoryAction(category){
  console.log('action',category)
  return {
    type: SET_CATEGORY,
    category
  }
}