import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold mb-8 p-10'>
        React Essential Ideas Snippets
      </h2>
      <div className='card lg:card-side card-bordered'>
        <div className='card-body'>
          <h2 className='card-title'>Employees list</h2>
          <p>componenet list and useState and mapping</p>
          <div className='card-actions'>
            <Link
              className='btn btn-primary btn-lg'
              to='/employees-list'
              target='_blank'
            >
              Live Preview
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
