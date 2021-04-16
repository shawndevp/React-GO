import logo from './logo.svg';
import './App.css';
import Menu from "./components/menu.js"
import Header from "./components/header.js"
import Card from "./components/card.js"
import ReactDOM from 'react-dom';
import Form from "./components/form";

//export default blir import 'funktion' from "./src/components/menu.js"
// inte default blir -> import {Menu, Menu2} from "./components/menu.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
          <Menu />
          <Card name="Nike" price="2000 :-" Price="10 :-"/>
          <Form />
          {/* <Menu1/>
          <Menu2/> */}


      </header>
    </div>
  );
}


// const users = {
  
//   firstName: "Shawn",
//   lastName: "Örnerstedt",
  
// };

// function formatName(users) {
//   return users.firstName + " " + users.lastName;
// }

// const element = <h1> Hello, {formatName(users)}!</h1>;

// ReactDOM.render(element, document.getElementById('root'));

export default App;
