import * as React from "react";
import AllChooseCard from "@/components/AllChooseCard";
import BookCard from "@/components/BookCard";
import DHLCard from "@/components/DHLCard";
import VegatableCard from "@/components/VegatableCard";
import { Stack, Container, Grid } from "@mui/material";

export default function AllCards() {
  return (
    <Stack flexDirection={"row"} flexGrow={1} height={"155px"}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <BookCard />
          </Grid>
          <Grid item xs={3}>
            <DHLCard />
          </Grid>
          <Grid item xs={3}>
            <VegatableCard />
          </Grid>
          <Grid item xs={3}>
            <AllChooseCard />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
