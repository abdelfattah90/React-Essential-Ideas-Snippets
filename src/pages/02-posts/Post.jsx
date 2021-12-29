import { useState } from 'react'
function Post({ id, title, body, deletePost }) {
  const [readMore, setReadMore] = useState(false)
  return (
    <div>
      <p>{title}</p>
      <p>
        {readMore ? body : `${body.substring(0, 10)} ...`}
        <span onClick={() => setReadMore(!readMore)}>
          {readMore ? '.. Show less' : 'Read more'}
        </span>
      </p>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  )
}

export default Post
