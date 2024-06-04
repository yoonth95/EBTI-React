import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Test from 'pages/Test';
import Result from 'pages/Result';
import View from 'pages/View';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/result' element={<Result />}/>
          <Route path='/view' element={<View />}/>

          <Route path="/*" element={<NotFound />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;