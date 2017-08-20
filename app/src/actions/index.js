export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export default function LoadCategories (categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
}