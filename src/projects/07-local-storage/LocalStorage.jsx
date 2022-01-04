import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}
function LocalStorageApp() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'bg-accent-focus', 'value changed')
    } else {
      showAlert(true, 'bg-accent-focus', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }

      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'bg-secondary-focus', 'empty list')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'bg-secondary-focus', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='container p-10'>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Task</h3>
        <div>
          <input
            type='text'
            className='input input-bordered'
            placeholder='Task...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='btn btn-info'>
            {isEditing ? 'edit' : 'Save'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className=''>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='btn btn-error' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default LocalStorageApp
