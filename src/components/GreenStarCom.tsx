"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import GreenStar from "@/assets/GreenStar";
type GreenProps = {
  title: string;
};
function GreenStarCom(props: GreenProps) {
  const { title } = props;
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
      <GreenStar />
      <Typography fontSize={22} fontWeight={700} color={"#000"}>
        {title}
      </Typography>
    </Stack>
  );
}
export default GreenStarCom;
