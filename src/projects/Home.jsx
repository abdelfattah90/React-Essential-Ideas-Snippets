import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container p-5'>
      <h2 className='text-center text-4xl font-bold mb-8 p-5'>
        React Essential Ideas Snippets
      </h2>
      <Link to='/employees-list' target='_blank'>
        <h3 className='text-2xl text-blue-500'>Employees list</h3>
        <p className='text-lg italic text-gray-500 pb-5'>
          Componenet, list, useState, map, Tailwindcss
        </p>
      </Link>
      <Link to='/posts' target='_blank'>
        <h3 className='text-2xl text-blue-500'>Posts</h3>
        <p className='text-lg italic text-gray-500 pb-5'>
          Fetch json placeholder Posts API, Tailwindcss
        </p>
      </Link>
      <Link to='/reviews' target='_blank'>
        <h3 className='text-2xl text-blue-500'>Reviews</h3>
        <p className='text-lg italic text-gray-500  pb-5'>
          Random Reviews, next-prev Reviews, React-icons, Tailwindcss
        </p>
      </Link>
      <Link to='/menu' target='_blank'>
        <h3 className='text-2xl text-blue-500'>Menu</h3>
        <p className='text-lg italic text-gray-500 pb-5'>
          List menu , Categories toggle, Tailwindcss
        </p>
      </Link>
    </div>
  )
}

export default Home
