import { useRouter } from "next/router";
import Image from "next/image";
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
import { userContext } from "../context/userProvider";

const pages = [
  { page: "Home", endPoint: "/" },
  { page: "Menu", endPoint: "/pizzas" },
];

function Header() {
  const { cartQuantity, menuOptions, handleLogout, user } =
    useContext(userContext);
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (option: string, endPoint: string) => {
    if (option === "Sair") {
      handleLogout();
    }

    router.push(endPoint);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0000005c" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            sx={{ width: "80px", height: "80px" }}
            onClick={() => router.push("/pizzas")}
          >
            <Image
              src={pizzeriaLogo}
              alt="Pizzeria logo"
              style={{ width: "80px", height: "80px" }}
            />
          </Button>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map(({ page, endPoint }) => (
              <Button
                key={page}
                onClick={() => router.push(endPoint)}
                sx={{ my: 2, color: "#FFCC33", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Badge
            badgeContent={cartQuantity}
            sx={{ marginRight: "10px", color: "white" }}
          >
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: user?.name ? "1px solid white" : "none",
              borderRadius: "9999px",
              maxWidth: "150px",
              width: { xs: "40px", sm: user?.name ? "auto" : "40px" },
              overflow: "hidden",
              transition: ".5s",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
                px: user?.name ? "5px" : "0px",
                transition: ".5s",
                fontSize: "20px",
                color: "white",
                maxWidth: "110px",
                textOverflow: "ellipsis",
                width: user?.name ? "auto" : "0px",
                transform: user?.name ? "translateX(0em)" : "translateX(150px)",
                overflow: "hidden",
              }}
            >
              {user?.name.split(" ")[0] ?? ""}
            </Typography>
            <Tooltip title="Open Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ backgroundColor: "white" }}
                  alt="Remy Sharp"
                  src={user?.img ?? ""}
                />
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
              {menuOptions.map(({ option, endPoint }) => (
                <MenuItem
                  key={option}
                  onClick={() => handleUserMenuClick(option, endPoint)}
                >
                  <Typography textAlign="center">{option}</Typography>
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
