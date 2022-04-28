import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';

interface ResponsiveAppBarProps {
  customerCode?: string;
  customerName?: string;
}

export const ResponsiveAppBar = (props: ResponsiveAppBarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const fixPageItems = [
    { name: '顧客選択', link: '/' },
    { name: 'サービス', link: '/services' },
  ];

  const dynamicPageItems = props.customerCode ?
    [
      { name: '顧客情報', link: '/customer/' + props.customerCode },
      { name: '顧客設定', link: '/customer/' + props.customerCode + '/settings' },
      { name: '組織情報', link: '/customer/' + props.customerCode + '/organizations' },
    ] : [];

  const MdToolBarElements = () => {
    return (
      <>
        <Box sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}>
          {fixPageItems.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href={page.link}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {dynamicPageItems.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href={page.link}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <Typography
          variant="subtitle1"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          {props.customerName}
        </Typography>
        <Typography
          variant="subtitle2"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          {props.customerCode}
        </Typography>
      </>
    );
  };

  const XsToolBarElements = () => {
    return (
      <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {fixPageItems.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} component="a" href={page.link}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}

            <Divider />

            {dynamicPageItems.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} component="a" href={page.link}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
            
          </Menu>
        </Box>
        <Typography
          variant="subtitle1"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
        >
          {props.customerName}
        </Typography>
        <Typography
          variant="subtitle2"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
        >
          {props.customerCode}
        </Typography>
        
      </>
    );
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MdToolBarElements />
          <XsToolBarElements />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

