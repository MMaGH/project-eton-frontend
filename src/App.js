import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CardList from "./components/CardList";
import { Content } from "./styled_components/Content";
import Navbar from "./components/NavbarComponent";
import AddCard from "./components/AddCard";

function App() {
  const [refresh, setRefresh] = useState("")


  return (
    <div className="App">
      <Content className="content">
        <Router>
          <Route exact path="/">
              <CardList
                refresh = {refresh}
                setRefresh = {setRefresh}
                />
              <AddCard 
                setRefresh = {setRefresh}
                />
          </Route>
          <Route exact path="/task">
              Tasks Goes Here
          </Route>
          <Navbar></Navbar>
        </Router>
      </Content>
    </div>
  );
}

export default App;
