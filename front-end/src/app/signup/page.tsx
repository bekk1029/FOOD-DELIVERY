"use client";
import CustomInput from "@/components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().required(),
  address: yup.string().required(),
});
export default function Page() {
  const formik = useFormik({
    initialValues: { email: "", password: "", address: "", name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
          <CustomInput
            label="Хаяг"
            name="address"
            placeholder="Та хаягаа оруулна уу"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <CustomInput
            label="Нууц үг"
            type="password"
            name="password"
            placeholder="Нууц үгээ оруулна уу"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <CustomInput
            label="Нууц үг давтах"
            type="password"
            name="password"
            placeholder="Нууц үгээ оруулна уу"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            <Link href={"/login"}>
              <Button
                fullWidth
                disableElevation
                disabled={
                  !formik.values.name ||
                  !formik.values.email ||
                  !formik.values.address ||
                  !formik.values.password
                }
                sx={{
                  py: "14.5px",
                }}
                variant="contained"
                onClick={() => {
                  formik.handleSubmit();
                }}
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
