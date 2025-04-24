import { MouseEvent, useContext, useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import pizzeriaLogo from "../images/pizzeriaLogo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { userContext } from "../context/userProvider";

const pages = [
  { page: "Home", endPoint: "/" },
  { page: "Menu", endPoint: "/pizzas" },
];
const settings = [
  { page: "My Profile", endPoint: "/user/profile" },
  { page: "My Orders", endPoint: "/user/my_orders" },
  { page: "Sair", endPoint: "/pizzas" },
];

function Header() {
  const { cartQuantity } = useContext(userContext);
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (endPoint: string) => {
    router.push(endPoint)
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Image
            src={pizzeriaLogo}
            alt="Pizzeria logo"
            style={{ width: "80px", height: "80px" }}
          />


          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map(({ page, endPoint }) => (
              <Button
                // box home e menu tela large
                key={page}
                onClick={() => router.push(endPoint)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Badge badgeContent={cartQuantity} sx={{ marginRight: "10px" }}>
            <Tooltip title="Abrir cart">
              <IconButton
                aria-label="Cart"
                onClick={() => router.push("/user/cart")}
              >
                <ShoppingCartRoundedIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
          </Badge>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ page, endPoint }) => (
                <MenuItem key={page} onClick={() => handleUserMenuClick(endPoint)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
