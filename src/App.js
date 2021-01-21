import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CardList from "./components/CardList";
import { Content } from "./styled_components/Content";
import Navbar from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
          <Route exact="/">
            <Content>
              <CardList/>
            </Content>
          </Route>
      </Router>
    </div>
  );
}

export default App;
