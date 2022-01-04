import { useEffect } from 'react'

function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  })
  return <p className={`${type}`}>{msg}</p>
}

export default Alert
