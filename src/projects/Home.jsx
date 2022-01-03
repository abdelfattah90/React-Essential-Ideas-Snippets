import { Link } from 'react-router-dom'
const Home = () => {
  const links = [
    {
      id: 1,
      url: 'employees-list',
      title: 'Employees list',
      desc: ' Componenet, list, useState, map, Tailwindcss',
    },
    {
      id: 1,
      url: 'posts',
      title: 'Posts',
      desc: 'Fetch json placeholder Posts API, Tailwindcss',
    },
    {
      id: 1,
      url: 'reviews',
      title: 'Reviews',
      desc: 'Random Reviews, next-prev Reviews, React-icons, Tailwindcss',
    },
    {
      id: 1,
      url: 'menu',
      title: 'Menu',
      desc: 'List menu , Categories toggle, Tailwindcss',
    },
    {
      id: 1,
      url: 'tabs',
      title: 'Tabs',
      desc: 'Tabs, Tailwindcss',
    },
    {
      id: 1,
      url: 'lorem',
      title: 'Lorem',
      desc: 'Lorem ipsum Generate, Tailwindcss',
    },
    {
      id: 1,
      url: 'color',
      title: 'Color',
      desc: 'Color Generate',
    },
  ]
  return (
    <div className='container p-5'>
      <h2 className='text-center text-4xl font-bold mb-8 p-5'>
        React Essential Ideas Snippets
      </h2>

      {links.map((link) => {
        const { id, url, title, desc } = link
        return (
          <Link to={url} target='_blank' key={id}>
            <h3 className='text-2xl text-blue-500'>{title}</h3>
            <p className='text-lg italic text-gray-500 pb-5'>{desc}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
