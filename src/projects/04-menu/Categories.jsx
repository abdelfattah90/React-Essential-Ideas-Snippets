import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <p className='text-2xl text-orange-500'>Categories</p>
      {categories.map((category, index) => {
        return (
          <button
            className='btn btn-success'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </>
  )
}

export default Categories
