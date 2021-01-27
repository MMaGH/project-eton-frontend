import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import CardList from "./components/CardList";
import { Content } from "./styled_components/Content";
import Navbar from "./components/NavbarComponent";
import AddCard from "./components/AddCard";
import TasksComponent from "./components/TasksComponent";
import HomePage from "./components/HomePageComponent";

function App() {
  const [refresh, setRefresh] = useState("")


  return (
    <div className="App">
      <Content className="content">
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/notes">
              <CardList
                refresh = {refresh}
                setRefresh = {setRefresh}
                />
              <AddCard 
                setRefresh = {setRefresh}
                />
          </Route>
          <Route exact path="/task">
              <TasksComponent/>
          </Route>
          <Route path="/">
            <Redirect to="/"/>
          </Route>
          <Navbar></Navbar>
        </Router>
      </Content>
    </div>
  );
}

export default App;
