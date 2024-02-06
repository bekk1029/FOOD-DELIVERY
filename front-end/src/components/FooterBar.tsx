"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { PineWhite } from "@/assets/PineWhite";
import Link from "next/link";
const pages = [
  "НҮҮР",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

function FooterBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        background: "#18BA51",
        color: "#fff",
        backgroundImage: "url(/Food.png)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: "120px" }}>
        <Stack
          flexDirection="column"
          alignItems="center"
          width="100%"
          gap="45.5px"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <PineWhite />
            <Typography fontSize={20} fontWeight={700} textAlign="center">
              Food Delivery
            </Typography>
          </Stack>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Link style={{ color: "#fff" }} href="/home">
              Нүүр
            </Link>
            <Link style={{ color: "#fff" }} href="#">
              Холбоо барих
            </Link>
            <Link style={{ color: "#fff" }} href="#">
              Хоолны цэс
            </Link>
            <Link style={{ color: "#fff" }} href="/footerInfo">
              Үйлчилгээний нөхцөл
            </Link>
            <Link style={{ color: "#fff" }} href="/footerInfo">
              Хүргэлтийн бүс
            </Link>
            <Link style={{ color: "#fff" }} href="/footerInfo">
              Нууцлалын бодлого
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
export default FooterBar;
