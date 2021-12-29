import { useState } from 'react'
function Post({ id, title, body, deletePost }) {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
        <article className='overflow-hidden rounded-lg shadow-lg'>
          <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
            <h1 className='text-lg'>{title}</h1>
          </header>
          <p className='ml-2 text-sm'>
            {readMore ? body : `${body.substring(0, 10)} ...`}
            <span className='underline' onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </span>
          </p>
          <div className='p-3'>
            <button
              className='float-right btn btn-sm btn-error'
              onClick={() => deletePost(id)}
            >
              Delete
            </button>
          </div>
        </article>
      </div>
    </>
  )
}

export default Post
