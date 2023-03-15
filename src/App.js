import './App.css';
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={
            <NewsArea key="top" title='Top' />  // Please note that key is introduced so that whenever the categories are changed using navbar, it should re-render the News Component.
          }>
          </Route>
          <Route exact path="/business" element={
            <NewsArea key="business" title='Business' />
          }>
          </Route>
          <Route exact path="/entertainment" element={
            <NewsArea key="entertainment" title='Entertainment' />
          }>
          </Route>
          <Route exact path="/environment" element={
            <NewsArea key="environment" title='Environment' />
          }>
          </Route>
          <Route exact path="/food" element={
            <NewsArea key="food" title='Food' />
          }>
          </Route>
          <Route exact path="/health" element={
            <NewsArea key="health" title='Health' />
          }>
          </Route>
          <Route exact path="/politics" element={
            <NewsArea key="politics" title='Politics' />
          }>
          </Route>
          <Route exact path="/science" element={
            <NewsArea key="science" title='Science' />
          }>
          </Route>
          <Route exact path="/sports" element={
            <NewsArea key="sports" title='Sports' />
          }>
          </Route>
          <Route exact path="/technology" element={
            <NewsArea key="technology" title='Technology' />
          }>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

//   Issues & Modifications : 
// 1. Env variable not working
// 2. Spinner 
// 3. Duplicate news items coming

export default App;
