
import HelloWorld from './components/HelloWorld'
import AnotherComponent from './components/AnotherComponent'
import CompWithVars from './components/componentVariables/CompWithVars'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <AnotherComponent/>
      <CompWithVars/>
    </div>
  );
}

export default App;
