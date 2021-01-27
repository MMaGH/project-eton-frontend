import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import CardList from "./components/CardList";
import { Content } from "./styled_components/Content";
import Navbar from "./components/NavbarComponent";
import TasksComponent from "./components/TasksComponent";

function App() {

  return (
    <div className="App">
      <Content className="content">
        <Router>
          <Route exact path="/">
            <Redirect to="notes"/>
          </Route>
          <Route exact path="/notes">
              <CardList
                addCard = {true}
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
