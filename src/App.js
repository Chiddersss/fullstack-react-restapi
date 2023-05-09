import './App.css';
import Login from './components/Login';
import { getCookie } from './common';

import { useEffect, useState } from 'react'
import {authCheck} from './utils'

const App = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    let jwt = getCookie("jwt_token")
    console.log("!!!!!!!!")
    console.log(jwt)
    if (cookie != false) {
      logininWithToken(jwt)
    }

  }, [])

  const logininWithToken = async (jwt) => {
    const user = await authCheck(jwt)
    setUser(user)
  }

  return (
    <div>
      <Register />
      <br></br>
      <br></br>
      <Login newUser = {setUser}/>
      {user 
        ? 
        <h2>Hello Welcome {user} you have logged in</h2>
        :
        <h2>Please Log in</h2>
      }
    </div>
  );
};

export default App;