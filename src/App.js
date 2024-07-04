import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AuthPage from './pages/Auth/AuthPage';
import HomeWork from './pages/hw/HomeWork';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;