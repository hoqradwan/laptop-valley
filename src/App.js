import './App.css';
import Answer from './components/Answer/Answer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Products></Products>
     <Answer></Answer>
    </div>
  );
}

export default App;