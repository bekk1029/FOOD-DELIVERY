import * as React from "react";
import { Stack, Container } from "@mui/material";
import MainCourse from "../Menus/MainCourse";
import SaleFoods from "../Menus/SaleFood";
import Soup from "../Menus/Soup";
import Dessert from "../Menus/Dessert";

export default function Page() {
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
