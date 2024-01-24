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
  const [password, setPassword] = useState("");

  return (
    <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "76px",
      }}
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
        <Typography>
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
        </Typography>
        <CustomInput
          label="Нууц үг сэргээх код"
          type="password"
          placeholder="*********"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Stack width={"384px"} pt={4} gap={4}>
          <Button
            fullWidth
            disableElevation
            sx={{
              py: "14.5px",
            }}
            variant="contained"
            disabled={!password}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
