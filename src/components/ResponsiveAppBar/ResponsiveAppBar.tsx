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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pages = ['Контакты', 'Цены', 'Позвонить нам +79771076625'];

function ResponsiveAppBar() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar id="top" position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/">
                <img
                  style={{ width: '70%', marginTop: '10%' }}
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </Typography>

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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {/* <Typography textAlign="center">{page}</Typography> */} 
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      href={
                        page === 'Контакты'
                          ? '#contacts'
                          : page === 'Цены'
                          ? '#price'
                          : page === 'Позвонить нам +79771076625'
                          ? 'tel:+79771076625'
                          : undefined
                      }
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/">
                <img
                  style={{ width: '90%', marginLeft: '15%', height: '90%', marginTop: '5%' }}
                  src="/logo.png"
                  alt=""
                />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={
                    page === 'Контакты'
                      ? '#contacts'
                      : page === 'Цены'
                      ? '#price'
                      : page === 'Позвонить нам +79771076625'
                      ? 'tel:+79771076625'
                      : undefined
                  }
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Accordion style={{ marginRight: '10%', backgroundColor: 'grey' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Следим за модой
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: isMobile ? 'static' : 'absolute',
                }}
              >
                <Button component={Link} to="/men">
                  мужские стрижки
                </Button>
                <Button component={Link} to="/women">
                  женские стрижки
                </Button>
                {/* <Button component={Link} to="/coloring">
                  окрашивания
                </Button> */}
              </AccordionDetails>
            </Accordion>

            <iframe
              style={{ display: isMobile ? 'none' : 'block' }}
              src="https://yandex.ru/sprav/widget/rating-badge/27933329123?type=rating&theme=dark"
              width="150"
              height="50"
              frameBorder="0"
            ></iframe>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
