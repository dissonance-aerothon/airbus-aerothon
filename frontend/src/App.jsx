import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Index from './pages/Index'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App