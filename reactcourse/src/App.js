import logo from './logo.svg';
import './App.css';
import {Menu, Menu1, Menu2} from "./components/menu.js"
import ReactDOM from 'react-dom';

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


const users = {
  
  firstName: "Shawn",
  lastName: "Örnerstedt",
  
};

function formatName(users) {
  return users.firstName + " " + users.lastName;
}

const element = <h1> Hello, {formatName(users)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));

export default App;
