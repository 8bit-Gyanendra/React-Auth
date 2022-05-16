import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import SignupPage from './Screens/SignupPage';
import MultiLangPage from './Screens/MultiLangPage';
import TodoPage from './Screens/TodoPage';
import NewAPI from './Screens/NewAPI';

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={< HomePage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/multilang' element={<MultiLangPage />} />
            <Route path='/todo' element={<TodoPage/>} />
            <Route path='/news' element={<NewAPI/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>  
  );
}

export default App;
