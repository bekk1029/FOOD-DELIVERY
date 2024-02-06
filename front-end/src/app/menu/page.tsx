"use client";
import { Stack, Typography, Container, Box, Button } from "@mui/material";
export default function Page() {
  return (
    <Container maxWidth="xs">
      <Stack gap={3} flexDirection={"row"}>
        <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
          Бүртгүүлэх
        </Button>
        <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
          Бүртгүүлэх
        </Button>
        <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
          Бүртгүүлэх
        </Button>
        <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Container>
  );
}
