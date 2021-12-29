import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container p-10'>
      <h2 className='text-center text-4xl font-bold mb-8 p-10'>
        React Essential Ideas Snippets
      </h2>
      <Link to='/employees-list' target='_blank'>
        <h3 className='text-4xl text-blue-500'>Employees list</h3>
        <p className='text-lg italic text-gray-500'>
          Componenet, list, useState, map
        </p>
      </Link>
      <Link to='/posts' target='_blank'>
        <h3 className='text-4xl text-blue-500'>Posts</h3>
        <p className='text-lg italic text-gray-500'>
          Fetch json placeholder Posts API
        </p>
      </Link>
    </div>
  )
}

export default Home
