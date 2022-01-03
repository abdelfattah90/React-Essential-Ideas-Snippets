import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './projects/Home'
import EmployeesList from './projects/01-employees-list/EmployeesList'
import PostApp from './projects/02-posts/PostApp'
import Reviews from './projects/03-reviews/Reviews'
import Menu from './projects/04-menu/Index'

import NotFound from './projects/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees-list' element={<EmployeesList />} />
        <Route path='/posts' element={<PostApp />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/menu' element={<Menu />} />
   
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
