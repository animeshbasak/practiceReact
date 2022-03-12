
import './App.css';
import Welcome from './Component/Welcome/welcome.component';
import Greet from './Component/Greet/Greet.component';

function App() {
  return (
    <div className="App">
      <Greet name={"animesh"} >
        <p>The name is animesh</p>
      </Greet>
      <Welcome name={"batman"} >
        <p>Thy name Batman</p>
      </Welcome>
    </div>
  );
}

export default App;
