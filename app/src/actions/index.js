export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export function LoadCategories (categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
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