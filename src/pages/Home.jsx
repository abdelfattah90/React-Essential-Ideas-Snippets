import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold mb-8 p-10'>
        React Essential Ideas Snippets
      </h2>
      <div className='card lg:card-side card-bordered'>
        <div className='card-body'>
          <h2 className='card-title'>Snippet</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className='card-actions'>
            <Link className='btn btn-primary btn-lg' to='/'>
              Live Preview
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
