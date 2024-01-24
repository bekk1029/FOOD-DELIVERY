"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button, Stack, Typography, Link } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      width={"448px"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={1}
      sx={{ backgroundColor: "blue", borderRadius: "76px" }}
    >
      <Stack gap={4} borderRadius={4} width={"100%"}>
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
        <Stack width={"100%"} pt={4} gap={4}>
          <Button
            fullWidth
            disableElevation
            sx={{
              py: "14.5px",
            }}
            variant="contained"
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
