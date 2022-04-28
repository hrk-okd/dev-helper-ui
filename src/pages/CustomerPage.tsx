import React from 'react';
import { useParams } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@mui/lab';

import { ResponsiveAppBar } from '../components/ResponsiveAppBar';
import { Customer } from '../model/Customer';
import { CustomerApi } from '../api/CustomerApi';
import '../App.css';


const BasicTab = () => {
  return (
    <TabPanel value="basic">
      <h5>基本情報</h5>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </TabPanel>
  );
};

const SettingsTab = () => {
  return (
    <TabPanel value="settings">
      <h4>設定</h4>
    </TabPanel>
  );
};


export const CustomerPage = () => {

  let { customerCode } = useParams();
  const customer = customerCode ? CustomerApi(customerCode) : { customerCode: '', customerName: '' };

  const [value, setValue] = React.useState('basic');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <ResponsiveAppBar
        customerCode={customer.customerCode} customerName={customer.customerName} />
      <CssBaseline />
      <Container maxWidth="lg">

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="基本情報" value="basic" />
                <Tab label="設定" value="settings" />
              </TabList>
            </Box>
            <BasicTab />
            <SettingsTab />
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

