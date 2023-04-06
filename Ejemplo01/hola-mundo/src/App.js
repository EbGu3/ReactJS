import logo from './logo.svg';
import './App.css';
import Saludo from './components/pure/Saludo';
import SaludoF from './components/pure/SaludoF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {/* Este es un comentario en js, con mi primer comentario, con su prop nombre*/}
        {/* <Saludo nombre='Martin'></Saludo> */}
        <SaludoF nombre="Martin"></SaludoF>
      </header>
    </div>
  );
}

export default App;
