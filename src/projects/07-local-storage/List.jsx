import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='task-list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <article key={id}>
            <p className='text-3xl'>{title}</p>
            <div>
              <button
                type='button'
                className='text-gray-600'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='text-red-600'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
