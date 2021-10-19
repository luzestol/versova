
import './App.css';
import { CartWidget } from './components/cartwidget/CartWidget';
import { ItemCount } from './components/itemcount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/navbar/NavBar.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer greeting="¡Esto es un texto provisorio! 🤙🏼"/>
      <ItemCount />
      </header>
    </div>
  );
}

export default App;
