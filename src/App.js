import './App.css';
import Navbar from './Component/Navabar';
import Middleware from './Component/Middle';
import Center from './Component/center';

function App() {
  return (
    <div className="App">
      <div className='backgroud'>
      <Navbar />
      </div>
      <Middleware />
      <Center />
    </div>
  );
}

export default App;
