import * as React from "react";
import { Button, Container, Grid } from "@mui/material";
import GreenClock from "@/assets/GreenClock";

export default function CategoryBtn() {
  const categories = [
    { title: "Breakfast", href: "home" },
    { title: "Soup", href: "login" },
    { title: "Main Course", href: "home" },
    { title: "Dessert", href: "home" },
  ];
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
            {categories.title}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
