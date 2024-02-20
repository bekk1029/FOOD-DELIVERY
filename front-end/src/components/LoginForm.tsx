"use client";
import CustomInput from "./CustomInput";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
const axios = require("axios");

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // const Login = async () => {
  //   let res = await axios.post(
  //     "/api/user/login",
  //     {
  //       password,
  //     },
  //     {
  //       Headers: {
  //         Authorization: `Bearer ${formik.values.email}`,
  //       },
  //     }
  //   );
  // };

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

          <Link href={"/forgetPass"}>
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
          </Link>
        </Stack>
        <Stack width={"100%"} pt={4} gap={4}>
          <Link href={"/home"}>
            <Button
              fullWidth
              disableElevation
              disabled={!formik.values.email || !formik.values.password}
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
          </Link>
          <Typography textAlign="center" color="text.secondary">
            Эсвэл
          </Typography>
          <Link href={"/signup"}>
            <Button fullWidth variant="outlined" sx={{ py: "14.5px" }}>
              Бүртгүүлэх
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
