import './App.css';
import Login from '../Login';
import SearchField from '../Playlist';

const App: React.FC = () => {

  return (
    <div className="App">
      <Login />
      <SearchField />
    </div>
  );
}

export default App;
