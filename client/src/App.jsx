import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Signin from './pages/Signin'
import About from './pages/About'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signin' element={<Signin/>} />
      <Route path='about' element={<About/>} />
      <Route path='signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
