import * as React from "react";
import { Stack, Container } from "@mui/material";
import MainCourse from "../MainCourse/MainCourse";
import SaleFoods from "../SaledFoods/SaleFood";
import Soup from "../Soup/Soup";
import Dessert from "../Dessert/Dessert";

export default function AllFoods() {
  return (
    <Stack flexDirection={"row"} flexGrow={1} height={"155px"}>
      <Container maxWidth={"lg"}>
        <Stack gap={10}>
          <SaleFoods />
          <MainCourse />
          <Soup />
          <Dessert />
        </Stack>
      </Container>
    </Stack>
  );
}
