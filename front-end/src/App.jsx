// import './App.css'
import react, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

import Layout from './Layout';
import Home from './Home';
import Profile from './Profile'

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const [m_strUser, setm_strUser] = useState("");

  const navigate = useNavigate();

  function Render() {

    const { accounts } = useMsal();

    try {
      const username = accounts[0].username;
      setm_strUser(username)
    } catch (error) {

    }
  }

  if (m_strUser != "") {
    // console.log(m_strUser)
    return (
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    )
  } else {
    return <>{Render()}<div>Please wait...</div></>
  }


}

export default App
