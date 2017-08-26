
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const getCategories = () => {
  return fetch('http://localhost:5001/categories', {
    headers: { Authorization: token }
      })
        .then((res) => res.json())
        .then(data => data.categories)
}

export const getPosts = (category) => {
  return fetch(`http://localhost:5001/${category}/posts`, {
    headers: { Authorization: token }
  })
    .then((res) => res.json())
    .then(data => data)
}