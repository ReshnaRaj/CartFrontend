
import './App.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Container>
        <Products />
      </Container>
      
    </div>
  );
}

export default App;
