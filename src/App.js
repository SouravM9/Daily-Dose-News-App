import './App.css';
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsArea title='Entertainment'/>
    </div>
  );
}

export default App;
