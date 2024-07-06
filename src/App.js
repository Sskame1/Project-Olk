import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AuthPage from './pages/Auth/AuthPage';
import TestPage from './pages/Test/TestPage';
import TestPagetwo from './pages/Test/TestPagetwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/test2' element={<TestPagetwo />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;