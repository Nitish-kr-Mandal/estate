import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Signin from './pages/Signin'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signin' element={<Signin/>} />
      <Route path='about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
