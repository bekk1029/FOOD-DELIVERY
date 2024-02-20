"use client";
import { Stack } from "@mui/material";
import { useState } from "react";
import Header from "../header/page";
import AllFoods from "../../components/AllFoods/page";
import AllCards from "../../components/Cards/page";
export default function Page() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack gap={"122px"} pb={"2000px"}>
      <Header />
      <AllCards />
      <AllFoods />
    </Stack>
  );
}
