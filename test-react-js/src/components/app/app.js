import React from 'react';
import './app.css';
import Main from '../main/main';
import Edit from '../edit/edit';
import CreateItem from '../createitem/createitem';
import Cart from '../cart/cart';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/createitem' element={<CreateItem />} />
          <Route path='/edit/:itemid' element={<Edit />} />
          <Route path='/cartview' element={<Cart />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
