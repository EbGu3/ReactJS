import logo from './logo.svg';
import './App.css';
import Saludo from './components/pure/Saludo';
import SaludoF from './components/pure/SaludoF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {/* Este es un comentario en js, con mi primer comentario, con su prop nombre*/}
        {/* <Saludo nombre='Martin'></Saludo> */}
        {/* <SaludoF nombre="Martin"></SaludoF> */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
