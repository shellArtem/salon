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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ResponsiveAppBar.css';

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

  const [anchorEl, setAnchorEl]: any = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                  style={{
                    width: '90%',
                    marginLeft: '15%',
                    height: '90%',
                    marginTop: '5%',
                  }}
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

            <>
              {/* Кнопка, которая выглядит как заголовок аккордеона */}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />} // Стрелочка справа
                style={{
                  backgroundColor: 'grey',
                  color: 'white', // Обычно на сером нужен белый текст
                  marginRight: isMobile ? '0' : '10%', // На мобилке убираем отступ
                  width: isMobile ? '100%' : 'auto', // На мобилке кнопка во всю ширину
                  height: isMobile ? '3rem' : 'auto',
                  justifyContent: 'space-between', // Чтобы текст был слева, а стрелка справа
                  textTransform: 'none', // Чтобы текст не был капсом
                  padding: '8px 16px',
                }}
              >
                Следим за модой
              </Button>

              {/* Сам выпадающий список */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                // PaperProps позволяет стилизовать выпадающее окно
                PaperProps={{
                  style: {
                    width: anchorEl ? anchorEl.clientWidth : undefined, // Ширина меню равна ширине кнопки
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/men"
                  onClick={handleClose}
                  style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}
                >
                  мужские стрижки
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/women"
                  onClick={handleClose}
                  style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}
                >
                  женские стрижки
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/coloring"
                  onClick={handleClose}
                  style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}
                >
                  окрашивания
                </MenuItem>
              </Menu>
            </>

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
