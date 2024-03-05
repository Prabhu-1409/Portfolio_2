import './App.css';
import Content from './Content';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' index element={<Content/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
