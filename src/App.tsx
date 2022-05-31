import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';
import Error from './components/main/error';

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
        <div className='container'>
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/card/:username/:reponame" element={<Card/>}/>
          <Route path="*" element={<Navigate to ="/" />}/>
          <Route path="error" element={<Error/>}/>
          </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
