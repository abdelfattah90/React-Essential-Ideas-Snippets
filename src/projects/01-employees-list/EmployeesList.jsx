import { useState } from 'react'
import data from './data'
import List from './List'
function EmployeesList() {
  const [employees, setEmployees] = useState(data)
  return (
    <div className='container mx-auto p-8'>
      <h3 className='text-5xl p-3'>Employees number: {employees.length}</h3>
      <List employees={employees} />
      <button className='btn btn-error' onClick={() => setEmployees([])}>
        clear all
      </button>
    </div>
  )
}

export default EmployeesList
