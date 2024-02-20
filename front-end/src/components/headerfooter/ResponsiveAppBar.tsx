"use client";

import { useAuth } from "@/providers/AuthProviders/AuthProvider";
import { useFModal } from "@/providers/FoodModalProvider";
import SearchIcon from "@mui/icons-material/Search";
import { WhiteLogo } from "@/assets/WhiteLogo";
import { styled, alpha } from "@mui/material/styles";
import { PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderLoginCard } from "./headerLoginCard";
import { useDraw } from "@/providers/DrawBar/DrawBar";
import { ProfilePicFrame } from "../ProfileSide/ProfilePic";
import { api } from "@/common";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  border: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export const ResponsiveAppBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const { isLoggedIn, checkToken } = useAuth();
  const { myLink } = useFModal();
  const { setDrawOpen } = useDraw();

  const getUserName = async () => {
    try {
      const res = await api.get("/getUserName", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setUserName(res.data.userName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserName();
  }, []);
  return (
    <Stack
      sx={{
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "50",
        position: "sticky",
        background: "#ffff",
        color: "#000",
        width: "100%",
        mb: "24px",
      }}
    >
      <Container maxWidth={"lg"}>
        {!isLoggedIn && login && (
          <HeaderLoginCard setShown={setLogin} shown={login} />
        )}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          sx={{ padding: "8px 0px" }}
        >
          <Stack
            flexDirection={"row"}
            gap={5}
            height={"full"}
            alignItems={"center"}
          >
            <WhiteLogo />
            <Button
              onClick={() => {
                router.push("/home");
              }}
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: myLink.includes("home") ? "green" : "black",
              }}
            >
              НҮҮР
            </Button>
            <Button
              onClick={() => {
                router.push("/menu");
              }}
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: myLink.includes("menu") ? "green" : "black",
              }}
            >
              ХООЛНЫ ЦЭС
            </Button>
            <Button
              onClick={() => {
                router.push("/delivery");
              }}
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: myLink.includes("delivery") ? "green" : "black",
              }}
            >
              ХҮРГЭЛТИЙН БҮС
            </Button>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
            <Search sx={{ border: 1, borderRadius: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Хайх"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Stack
              flexDirection={"row"}
              gap={1}
              onClick={() => {
                setDrawOpen(true);
              }}
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCartOutlined />
              <Typography>Сагс</Typography>
            </Stack>
            <Stack
              sx={{ cursor: "pointer" }}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
              onClick={() => {
                getUserName();
                isLoggedIn
                  ? router.push("/userProfile")
                  : router.push("/login");
              }}
            >
              <Stack
                width={32}
                height={32}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"50%"}
                overflow={"hidden"}
              >
                {isLoggedIn ? (
                  <ProfilePicFrame src="/profile.jpeg" />
                ) : (
                  <PersonOutlined />
                )}
              </Stack>

              <Typography color={"black"}>
                {isLoggedIn ? userName : "Нэвтрэх"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
