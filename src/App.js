import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
