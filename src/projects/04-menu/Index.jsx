import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Index() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <section className='container my-12 mx-auto px-4 md:px-12'>
      <p className='text-center pb-10 text-6xl'>Our menu</p>

      <Categories categories={categories} filterItems={filterItems} />
      <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          <Menu items={menuItems} />
        </div>
      </div>
    </section>
  )
}

export default Index
