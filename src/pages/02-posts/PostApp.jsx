import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Posts from './Posts'

function PostApp() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const deletePost = (id) => {
    const newPosts = posts.filter((tour) => tour.id !== id)
    setPosts(newPosts)
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(url)
      const posts = await response.json()
      setLoading(false)
      setPosts(posts)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return <div>{<Loading />}</div>
  }

  if (posts.length === 0) {
    return (
      <>
        <p>n</p>
        <button onClick={() => fetchPosts()}>DD</button>
      </>
    )
  }

  return <div>{<Posts posts={posts} deletePost={deletePost} />}</div>
}

export default PostApp
