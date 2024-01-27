"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button, Stack, Typography } from "@mui/material";
import SignUp from "./SignUp";
import Link from "next/link";
import { useState } from "react";
import Page from "@/app/home/page";
import ForgetPass from "./ForgetPass";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [click, setClick] =useState(true);


  if (count == 0){
    return (
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack width={"448px"} gap={4} borderRadius={2} padding={4}>
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
  
            <Button onClick={()=> {
              setCount(3)
            }}>
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
              onClick={()=> {
                setCount(1)
              }}
            >
              Нэвтрэх
            </Button>
            <Typography textAlign="center" color="text.secondary">
              Эсвэл
            </Typography>
            <Button fullWidth variant="outlined" sx={{ py: "14.5px" }} onClick={()=> {{
              setCount(2)
            }}}>
             Бүртгүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }else if (count == 1){
    return(
      <><Page/></>
    )
  }
  else if (count == 2 ) {
    return (
      <><SignUp/></>
    )
  } else if (count == 3) {
    return(
      <><ForgetPass/></>
    )
  }
}


