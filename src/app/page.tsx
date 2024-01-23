"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button, Stack, Typography, Container } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      flex={1}
      border={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack width={400} gap={4}>
        <Typography
          fontSize={28}
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          pb={4}
        >
          Нэвтрэх
        </Typography>
        <CustomInput
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Stack alignItems="flex-end" gap={1}>
          <CustomInput
            label="Нууц үг"
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button>
            <Typography
              color="text.secondary"
              fontSize={"14px"}
              fontWeight="300"
              textTransform="none"
            >
              Нууц үг сэргээх?
            </Typography>
          </Button>
        </Stack>
        <Stack width={400} pt={4} gap={4}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{ py: "14.5px" }}
            disabled={!email || !password}
          >
            Нэвтрэх
          </Button>
          <Typography textAlign="center" color="text.secondary">
            Эсвэл
          </Typography>
          <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
