import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './routes/Users';
import UserDetails from './routes/UserDetails';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Users />} />
      <Route path=":userId" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
