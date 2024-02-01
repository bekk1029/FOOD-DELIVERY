"use client";
import CustomInput from "@/components/CustomInput";
import LoginForm from "@/components/LoginForm";
import { Code } from "@mui/icons-material";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  grid2Classes,
} from "@mui/material";
import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);

  if (count == 0) {
    return (
      <Stack
        flex={1}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        padding={4}
        sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
      >
        <Stack width={"448px"}>
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
                onClick={() => {
                  setCount(1);
                }}
              >
                Үргэлжлүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  } else if (count == 1) {
    return (
      <Stack
        flex={1}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        padding={4}
        sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
      >
        <Stack width={"448px"}>
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
            <Typography
              width={"100%"}
              display={"flex"}
              lineHeight="140%"
              fontSize={16}
              fontWeight={400}
              flexWrap={"wrap"}
            >
              Таны
              <Typography px={"2px"} color={"primary.main"}>
                {email}
              </Typography>
              хаяг руу сэргээх код илгээгдлээ.
            </Typography>
            <CustomInput
              label="Нууц үг сэргээх код"
              type="password"
              placeholder="*********"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
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
                disabled={!code}
                onClick={() => {
                  setCount(2);
                }}
              >
                Үргэлжлүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  } else if (count == 2) {
    return (
      <Stack
        flex={1}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        padding={4}
        sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
      >
        <Stack width={"448px"}>
          <Stack padding={4} gap={4} borderRadius={4}>
            <Typography
              fontSize={28}
              fontWeight="bold"
              variant="h4"
              textAlign="center"
              pb={4}
            >
              Шинэ нууц үг зохиох
            </Typography>

            <CustomInput
              label="Нууц үг "
              type="password"
              placeholder="*********"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <CustomInput
              label="Нууц үг давтах"
              type="password"
              placeholder="*********"
              value={rePassword}
              onChange={(event) => {
                setRePassword(event.target.value);
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
                disabled={!password || !rePassword}
                onClick={() => {
                  setCount(3);
                }}
              >
                Үргэлжлүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  } else if (count == 3) {
    return (
      <>
        <LoginForm />
      </>
    );
  }
}
export const emailcode = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
    >
      <Stack width={"448px"}>
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
          <Typography
            width={"100%"}
            display={"flex"}
            lineHeight="140%"
            fontSize={16}
            fontWeight={400}
            flexWrap={"wrap"}
          >
            Таны{" "}
            <Typography px={"2px"} color={"primary.main"}>
              {email}
            </Typography>
            хаяг руу сэргээх код илгээгдлээ.
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
    </Stack>
  );
};
