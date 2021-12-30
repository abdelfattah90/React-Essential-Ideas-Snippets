import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function Review() {
  const [index, setIndex] = useState(1)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      if (people.length > 0) {
      }
      return checkNumber(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <div className='rounded-lg shadow-lg my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <img className='object-cover h-48 w-96' src={image} alt='' />
      <p>{name}</p>
      <p>{job}</p>
      <FaQuoteRight />
      <p>{text}</p>
      <button onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <div>
        <button className='btn btn-secondary' onClick={randomPerson}>
          Random
        </button>
      </div>
    </div>
  )
}

export default Review
