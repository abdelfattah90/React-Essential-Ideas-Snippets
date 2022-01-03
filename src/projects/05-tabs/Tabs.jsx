import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <div class='w-200 bg-white p-16 text-center mx-auto border'>
      <section className='section'>
        <div className=''>
          <p>experience</p>
        </div>
        <div className=''>
          <div className=''>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`btn btn-success m-3 btn btn-sm ${
                    index === value && 'btn-lg'
                  }`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>

          <article className=''>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className=''>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className=''>
                  <FaAngleDoubleRight className=''></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </div>
  )
}

export default Tabs
