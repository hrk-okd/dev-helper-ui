import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomersPage } from './pages/CustomersPage';
import { CustomerPage } from './pages/CustomerPage';

const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomersPage />} />
        <Route path="/customer/:customerCode" element={<CustomerPage />} />
        {/* <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
