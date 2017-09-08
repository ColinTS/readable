import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL
} from '../constants.js'


export const LOAD_COMMENTS = 'LOAD_COMMENTS'

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

export function LoadComments (comments) {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}