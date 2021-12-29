import Post from './Post'
function Posts({ posts, deletePost }) {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} {...post} deletePost={deletePost} />
      })}
    </>
  )
}

export default Posts
