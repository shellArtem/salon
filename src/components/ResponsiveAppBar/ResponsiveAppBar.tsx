import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ResponsiveAppBar.css';

const pages = [
  { label: 'Контакты', href: '/#contacts' },
  { label: 'Цены', href: '/#price' },
  { label: 'Записаться', href: 'tel:+79771076625' },
];

const fashionPages = [
  { label: 'Мужские стрижки', to: '/men' },
  { label: 'Женские стрижки', to: '/women' },
  { label: 'Окрашивания', to: '/coloring' },
];

function ResponsiveAppBar() {
  const isMobile = useMediaQuery('(max-width:899px)');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#1976d2' },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar id="top" position="sticky" className="app-bar" sx={{ width: '100%' }}>
        <Toolbar disableGutters sx={{ px: { xs: 1.5, sm: 2, md: 3 }, width: '100%' }}>
          {isMobile ? (
            <>
              <IconButton
                className="app-bar-menu-btn"
                size="large"
                aria-label="открыть меню"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Box className="app-bar-logo">
                <Link to="/">
                  <img src="/logo.png" alt="Логотип салона Мне нравится" />
                </Link>
              </Box>

              <Button
                href="tel:+79771076625"
                variant="contained"
                color="inherit"
                size="small"
                sx={{
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: 12,
                  px: 1.5,
                  py: 0.75,
                  textTransform: 'none',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
                }}
              >
                Записаться
              </Button>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                disablePortal
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{ sx: { minWidth: 220 } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu} component="a" href={page.href}>
                    {page.label}
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem
                  disabled
                  disableRipple
                  sx={{
                    opacity: '1 !important',
                    fontWeight: 700,
                    fontSize: 13,
                    color: 'text.secondary',
                    py: 0.5,
                  }}
                >
                  Следим за модой
                </MenuItem>
                {fashionPages.map((page) => (
                  <MenuItem
                    key={page.to}
                    component={Link}
                    to={page.to}
                    onClick={handleCloseNavMenu}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Box className="app-bar-logo" sx={{ mr: 2, display: 'flex' }}>
                <Link to="/">
                  <img src="/logo.png" alt="Логотип салона Мне нравится" />
                </Link>
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5 }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    sx={{
                      color: 'white',
                      fontWeight: page.label === 'Записаться' ? 700 : 500,
                      textTransform: 'none',
                    }}
                    href={page.href}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>

              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                sx={{
                  bgcolor: 'grey.700',
                  color: 'white',
                  mr: 2,
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'grey.600' },
                }}
              >
                Следим за модой
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disablePortal
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              >
                {fashionPages.map((page) => (
                  <MenuItem key={page.to} component={Link} to={page.to} onClick={handleClose}>
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>

              <iframe
                title="Рейтинг Яндекс"
                src="https://yandex.ru/sprav/widget/rating-badge/27933329123?type=rating&theme=dark"
                width="150"
                height="50"
                style={{ border: 0, flexShrink: 0 }}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
