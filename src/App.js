import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import Test from 'components/Test';
import Result from 'components/Result';
import View from 'components/View';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/result' element={<Result />}/>
          <Route path='/view' element={<View />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;