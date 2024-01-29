"use client";
import CustomInput from "./CustomInput";
import { Button, Stack, Typography } from "@mui/material";
import SignUp from "./SignUp";
import Link from "next/link";
import { useState } from "react";
import Page from "@/app/home/page";
import ForgetPass from "./ForgetPass";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("wqfj");
    },
  });

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
          name="email"
          placeholder="Имэйл хаягаа оруулна уу"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Stack alignItems="flex-end" gap={1}>
          <CustomInput
            label="Нууц үг"
            name="password"
            type="password"
            placeholder="Нууц үг"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            onClick={() => {
              formik.handleSubmit();
            }}
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
  // } else if (count == 1) {
  //   return (
  //     <>
  //       <Page />
  //     </>
  //   );
  // } else if (count == 2) {
  //   return (
  //     <>
  //       <SignUp />
  //     </>
  //   );
  // } else if (count == 3) {
  //   return (
  //     <>
  //       <ForgetPass />
  //     </>
  //   );
  // }
}
