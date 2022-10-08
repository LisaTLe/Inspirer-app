import * as React from "react";
import Main from "./components/main";
import Colors from "./components/generator";
import Navbar from './components/navbar'
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="root">
    <Navbar />
      <Main />
      <Colors />
    </div>
  );
}

export default App;
