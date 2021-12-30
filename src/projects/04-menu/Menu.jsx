function Menu({ items }) {
  return (
    <>
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem
        return (
          <div
            key={id}
            className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
          >
            <div className='overflow-hidden rounded-lg shadow-lg'>
              <p className='text-center p-5'>{title}</p>
              <p className='text-center'>{desc}</p>
              <p className='p-3'>{price}</p>
              <article className='flex items-center justify-between leading-tight p-2 md:p-4'>
                <img src={img} alt={title} className='' />
              </article>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Menu
