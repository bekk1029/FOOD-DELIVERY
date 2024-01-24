"use client";
import { CustomInput } from "@/components";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  grid2Classes,
} from "@mui/material";
import { useState } from "react";
export default function Page() {
  const [email, setEmail] = useState("");
  return (
    <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "76px" }}
    >
      <Stack padding={4} gap={4} borderRadius={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Нууц үг сэргээх
        </Typography>
        <CustomInput
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Stack width={"100%"} pt={4} gap={4}>
          <Button
            fullWidth
            disableElevation
            sx={{
              py: "14.5px",
            }}
            variant="contained"
            disabled={!email}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
