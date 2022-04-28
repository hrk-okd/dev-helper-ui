import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomersPage } from './pages/CustomersPage';
import { CustomerPage } from './pages/CustomerPage';

import { red, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ServicesPage } from './pages/ServicesPage';

const theme = createTheme({
  palette: {
    primary: {
      main: "#446688",
    }
  },

  typography: {
    button: {
        textTransform: "none"
    }
  },

});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<CustomersPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/customer/:customerCode" element={<CustomerPage />} />
          {/* <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
