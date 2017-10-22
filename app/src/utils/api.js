
import axios from 'axios';

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

export const getPosts = (categoryID) => {
  return fetch(`http://localhost:5001/${categoryID}/posts`, {
    headers: { Authorization: token }
  })
    .then((res) => res.json())
    .then(data => data)
}


export const getComments = (postID) => {
  return fetch(`http://localhost:5001/posts/${postID}/comments`, {
    headers: { Authorization: token }
  })
    .then((res) => res.json())
    .then(data => data)
}

export const postComment = (comment) => 
  axios.post('http://localhost:5001/comments', 
    {
      ...comment
    },
    {
      headers: { 
        Authorization: token 
      }
    }
  )
  .then(res => res.data)

export const editPost = (postID, title, body) =>
  axios.put(`http://localhost:5001/posts/${postID}`,
  {
    title,
    body
  },
  {
    headers: { 
      Authorization: token 
    }
  }
)
.then(res => res)

export const postPost = (post) =>
axios.post(`http://localhost:5001/posts`,
{
  ...post
},
{
  headers: { 
    Authorization: token 
  }
}
)
.then(res => res)
