"use client";
import CustomInput from "./CustomInput";
import { Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/providers/AuthProviders/AuthProvider";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type LoginFormProps = {
  setShown?: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm(props: LoginFormProps) {
  const { login } = useAuth();
  const {
    setShown = (p) => {
      return p;
    },
  } = props;
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await login({
        email: values.email,
        password: values.password,
      });
    },
  });

  const { isLoggedIn } = useAuth();

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
          <Button
            onClick={() => {
              router.push("/passrec");
              setShown(false);
            }}
          >
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
            disabled={!formik.isValid}
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

          <Button
            fullWidth
            variant="outlined"
            sx={{ py: "14.5px" }}
            onClick={() => {
              setShown(false);
              router.push("/signup");
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
