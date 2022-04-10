import React from 'react';
import {
  Box,
  CssBaseline,
  Container,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

import { Business } from '@mui/icons-material';

import { ResponsiveAppBar } from '../components/ResponsiveAppBar';
import { CustomersItem } from '../model/Customer';
import { CustomersApi } from '../api/CustomersApi'

import '../App.css';

export const CustomersPage = () => {
  const [customerList, changeCustomerList] = React.useState<CustomersItem[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dataList: CustomersItem[] = CustomersApi(event.target.value);
    changeCustomerList(dataList);
  };

  return (
    <div className='App'>
      <ResponsiveAppBar />

      <CssBaseline />
      <Container maxWidth="lg">

        {/* 検索フォーム */}
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField label="顧客コード" type="search" onChange={handleChange} />
            <TextField label="顧客名" type="search" />
          </div>
        </Box>

        <List>
          {customerList.map((customer: CustomersItem) => (
            <ListItem key={customer.customerCode}>
              <ListItemButton component="a" href={"/customer/" + customer.customerCode}>
                <ListItemAvatar>
                  <Avatar>
                    <Business />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={customer.customerName} secondary={customer.customerCode} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

