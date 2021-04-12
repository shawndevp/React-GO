import logo from './logo.svg';
import './App.css';
import {Menu, Menu1, Menu2} from "./components/menu.js"

//export default blir import 'funktion' from "./src/components/menu.js"
// inte default blir -> import {Menu, Menu2} from "./components/menu.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Menu/>
          <Menu1/>
          <Menu2/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
