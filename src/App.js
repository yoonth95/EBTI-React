import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import Test from 'components/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/test' element={<Test />}/>
        {/* <Route path='/result/:idx' element={<Result />}/> */}
        {/* <Route path='/view' element={<View />}/> */}
      </Routes>
    </Router>
  )
}

export default App;