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
      <Router>
        <Navbar></Navbar>
          <Route exact="/">
            <Content className="content">
              <AddCard 
                setRefresh = {setRefresh}
              />
              <CardList
                refresh = {refresh}
                setRefresh = {setRefresh}
              />
            </Content>
          </Route>
      </Router>
    </div>
  );
}

export default App;
