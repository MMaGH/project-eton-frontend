import logo from './logo.svg';
import './App.css';
import CardList from "./components/CardList";
import { Content } from "./styled_components/content";

function App() {
  return (
    <div className="App">
      <Content>
        <CardList/>
      </Content>
    </div>
  );
}

export default App;
