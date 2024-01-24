"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { PineWhite } from "@/assets/PineWhite";
import Link from "@mui/material/Link";
import { url } from "inspector";
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
            <Link color="#fff" href="#">
              Нүүр
            </Link>
            <Link color="#fff" href="#">
              Холбоо барих
            </Link>
            <Link color="#fff" href="#">
              Хоолны цэс
            </Link>
            <Link color="#fff" href="#">
              Үйлчилгээний нөхцөл
            </Link>
            <Link color="#fff" href="#">
              Хүргэлтийн бүс
            </Link>
            <Link color="#fff" href="#">
              Нууцлалын бодлого
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
export default FooterBar;
