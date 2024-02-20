"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack, Button } from "@mui/material";
import { PineWhite } from "@/assets/PineWhite";
import { useRouter } from "next/navigation";

const pages = [
  { title: "НҮҮР", href: "home" },
  { title: "Холбоо барих", href: "login" },
  { title: "Хоолны цэс", href: "menu" },
  { title: "Үйлчилгээний нөхцөл", href: "termsService" },
  { title: "ХҮРГЭЛТИЙН БҮС", href: "delivery" },
  { title: "Нууцлалын бодлого", href: "privacy" },
];

function FooterBar() {
  const router = useRouter();

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
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  setAnchorElUser(null), router.push(`/${page.href}`);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
export default FooterBar;
