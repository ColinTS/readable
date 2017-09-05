import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL
} from '../constants.js'

export const LOAD_POSTS = 'LOAD_POSTS'
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

export function LoadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function LoadComments (comments) {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}