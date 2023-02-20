// import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Profile from './Profile'

function App() {
  const navigate = useNavigate();

  return (

    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>

  )
}

export default App
