import React from 'react';
import {
  Box,
  CssBaseline,
  Container,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import { ResponsiveAppBar } from '../components/ResponsiveAppBar';
import { ServiceItem } from '../model/Service';
import { ServicesApi } from '../api/ServicesApi';

import '../App.css';


// const MOBILE_OS = {
//   IOS: 'iOS',
//   Android: 'Android'
// } as const;

const SERARCH_STATE = {
  IOS: 'iOS',
  WAIT: 'Android'
} as const;


export const ServicesPage = () => {
  const [serviceList, changeServiceList] = React.useState<ServiceItem[]>(() => {
    return ServicesApi('');
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dataList: ServiceItem[] = ServicesApi(event.target.value);
    changeServiceList(dataList);
    console.log("handlechange");
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
            <TextField label="サービスコード or 名称" type="search" onChange={handleChange} style={{ width: "70%" }} />
          </div>
        </Box>

        <List>
          {serviceList.map((service: ServiceItem) => (
            <>
              <ListItem key={service.serviceCode}>
                <ListItemButton component="a" href={"/service/" + service.serviceCode}>
                  <ListItemAvatar>
                    <Avatar>
                      <WebIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={service.serviceName} secondary={service.serviceCode} />
                  <ListItemText secondary="item1" />
                  <ListItemText secondary="item1" />
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Container>
    </div>
  );
};

