import React from 'react'

const List = ({ employees }) => {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table w-full table-compact'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              const { id, name, titleJob } = employee
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td>{titleJob}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default List
