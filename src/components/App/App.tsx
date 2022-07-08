import './App.css';
import { useState } from 'react';
import Login from '../Login';
import SearchField from '../SearchField';

const App: React.FC = () => {

  const [token, setToken] = useState('');


  return (
    <div className="App">
      <Login token={token} setToken={setToken}/>
      <SearchField token={token} />
    </div>
  );
}

export default App;
