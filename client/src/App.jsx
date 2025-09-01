import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'




const App = () => {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>

    </BrowserRouter>
  )
}

export default App