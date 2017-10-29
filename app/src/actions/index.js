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
  POST_POST,
  POST_POST_SUCCESS,
  POST_POST_FAIL,
  DOWN_POST,
  DOWN_POST_SUCCESS,
  UP_POST,
  UP_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
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

//Add a post
export function PostPostAction(post){
  return {
    type: POST_POST,
    post
  }
}

export function PostPostSuccessAction(post){
  return {
    type: POST_POST_SUCCESS,
    post
  }
}

export function PostPostFailAction(){
  return {
    type: POST_POST_FAIL
  }
}

//downvote a post
export function DownPostAction(postID){
  return {
    type: DOWN_POST,
    postID,
    option: 'downVote'
  }
}

export function DownPostSuccessAction(post){
  return {
    type: DOWN_POST_SUCCESS,
    post
  }
}

//upvote a post
export function UpPostAction(postID){
  return {
    type: UP_POST,
    postID,
    option: 'upVote'
  }
}

export function UpPostSuccessAction(post){
  return {
    type: UP_POST_SUCCESS,
    post
  }
}

//delete a post
export function DeletePostAction(postID){
  return {
    type: DELETE_POST,
    postID
  }
}

export function DeletePostSuccessAction(post){
  return {
    type: DELETE_POST_SUCCESS,
    post
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