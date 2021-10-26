
import './App.css';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
