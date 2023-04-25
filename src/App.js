import './App.css';
import Login from './components/Login';

import { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState()

  return (
    <div>
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