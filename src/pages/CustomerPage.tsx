import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Business from '@mui/icons-material/Business';

import { useParams } from "react-router-dom";
import { Customer } from '../model/Customer';
import { CustomerApi } from '../api/CustomerApi';

import '../App.css';

export const CustomerPage = () => {
  let { customerCode } = useParams();

  let customer;
  if (customerCode == null) {
    customer = {};
  } else {
    customer = CustomerApi(customerCode);
  }

  console.log('cp');

  return (
    <div className='App'>
      <ResponsiveAppBar />

      <h2>{customer.customerName}</h2>

    </div>
  );
};

