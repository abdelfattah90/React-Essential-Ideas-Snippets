import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmployeesList from './pages/01-employees-list/EmployeesList'
import PostApp from './pages/02-posts/PostApp'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees-list' element={<EmployeesList />} />
        <Route path='/posts' element={<PostApp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
