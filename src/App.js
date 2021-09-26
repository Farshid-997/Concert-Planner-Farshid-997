
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayContainer from './components/displayContainer/DisplayContainer';
// import img from'../public/superhero-director.jpg';
function App() {
  return (
    <div style={{ backgroundColor: '#d4c6ed' }}>
      <Header></Header>
      <DisplayContainer></DisplayContainer>
    </div>
  );
}

export default App;
