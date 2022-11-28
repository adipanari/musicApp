import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Search from './Pages/Search'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
