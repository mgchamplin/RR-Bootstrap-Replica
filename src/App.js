import './App.css';
import Background from './components/Background';
import TopNavBar from './components/TopNavBar';
import Stores from './components/Stores';

function App() {
  return (
    <div className="App">
      <TopNavBar></TopNavBar>
      <Background></Background>
      <Stores></Stores>
    </div>
  );
}

export default App;