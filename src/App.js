import logo from './logo.svg';
import './App.css';
import {Card, CardContainer, CardHeader} from './styled_components/card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardContainer>
        <Card>
          1 Card test
        </Card>
        <Card>
          <CardHeader>
          2 Card test
          </CardHeader>
          Card test
          Card test
          Card test
          Card test
          Card test
          Card test
          Card test
          Card test
          Card test
        </Card>
        <Card>
          3 Card test
        </Card>
        <Card>
          4 Card test
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
          asdfasdfasdf
        </Card>
        <Card>
          5 Card test
        </Card>
        <Card>
          6 Card test
        </Card>
        <Card>
          7  Card test
        </Card>
        </CardContainer>
      </header>
    </div>
  );
}

export default App;
