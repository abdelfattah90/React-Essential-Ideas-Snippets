import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
      <p className='text-5xl mb-8'>404 - Page Not Found!</p>
      <Link className='btn btn-primary btn-lg' to='/'>
        Back To Home
      </Link>
    </div>
  )
}

export default NotFound
