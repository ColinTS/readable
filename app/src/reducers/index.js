import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS
} from '../constants'

//Calender reducer
const initialState = {
  categories: [],
  posts: [],
  comments: []
}

function reducer(state = initialState, action){
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      }
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      }
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments
    }
    default: 
      return state
  }
}

export default reducer;