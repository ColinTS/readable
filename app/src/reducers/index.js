
import {
  LOAD_CATEGORIES,
} from '../actions'

const initialState = {
  categories: []
}

export default function ReadableApp(state = initialState, action){
  switch(action.type) {
    case LOAD_CATEGORIES:
      return action.categories
    default: 
      return state
  }
}