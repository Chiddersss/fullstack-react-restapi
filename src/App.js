import './App.css';
import Login from './components/Login';

import { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState()

  return (
    <div>
      <Login username = {setUser}/>
      {user 
        ? 
        <h2>Hello Welcome {user} you have looged in</h2>
        :
        <h2>Please Log in</h2>
      }
    </div>
  );
};

export default App;
