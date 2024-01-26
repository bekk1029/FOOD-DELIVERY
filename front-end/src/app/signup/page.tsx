"use client";
import { CustomInput } from "@/components";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  grid2Classes,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  return (
    <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "76px" }}
    >
      <Stack padding={4} gap={6}>
        <Stack gap={4} borderRadius={4}>
          <Typography
            fontSize={28}
            fontWeight="bold"
            variant="h4"
            textAlign="center"
            pb={4}
          >
            Бүртгүүлэх
          </Typography>
          <CustomInput
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <CustomInput
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            value={adress}
            onChange={(event) => {
              setAdress(event.target.value);
            }}
          />
          <CustomInput
            label="Нууц үг"
            type="password"
            placeholder="Нууц үгээ оруулна уу"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <CustomInput
            label="Нууц үг давтах"
            type="password"
            placeholder="Нууц үгээ оруулна уу"
            value={rePassword}
            onChange={(event) => {
              setRePassword(event.target.value);
            }}
          />
        </Stack>
        <Stack gap={3}>
          <Link href={"/footerInfo"} style={{ color: "#fff" }}>
            <Stack flexDirection="row" gap="11.5px">
              <CloudQueueIcon sx={{ mx: "8px", color: "#000" }} />
              <Typography color={"#000"} sx={{ textDecorationLine: "none" }}>
                Үйлчилгээний нөхцөл зөвшөөрөх
              </Typography>
            </Stack>
          </Link>
          <Stack width={"100%"} pt={4} gap={4}>
            <Link href={""}>
              <Button
                fullWidth
                disableElevation
                sx={{
                  py: "14.5px",
                }}
                variant="contained"
                disabled={!email || !password || !text}
              >
                Бүртгүүлэх
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
