import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import USerSignup from './pages/USerSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
const App = () => {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<USerSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App
