import Post from './Post'
function Posts({ posts, deletePost }) {
  return (
    <>
      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          {posts.map((post) => {
            return <Post key={post.id} {...post} deletePost={deletePost} />
          })}
        </div>
      </div>
    </>
  )
}

export default Posts
