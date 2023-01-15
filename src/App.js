import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1> Welcome to Urban Pet Sitter</h1>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
