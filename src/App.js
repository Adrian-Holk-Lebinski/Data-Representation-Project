import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Display } from './components/display';
import Add from './components/add';
import { Edit } from './components/edit';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Movies</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add">Add Movie</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route path='/' element={<Display></Display>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
