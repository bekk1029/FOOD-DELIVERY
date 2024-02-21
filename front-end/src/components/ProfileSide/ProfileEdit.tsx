"use client";
import { ProfileInput } from "./ProfileCustomInput";
import { useAuth } from "@/providers/AuthProviders/AuthProvider";
import { Edit, Email, PersonRounded, Phone } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";

import * as yup from "yup";

type userType = {
  name: string;
  number: number;
  email: string;
};

type ProfileEditProps = {
  email?: string;
  number?: number | string;
  name?: string;
  picture?: string;
};

export const ProfileEdit = (props: ProfileEditProps) => {
  const { isLoggedIn, setModal } = useAuth();
  const { number, name, email, picture } = props;
  const validationSchema = yup.object({
    email: yup.string().required().email(),
  });
  const formik = useFormik({
    initialValues: {
      email: email,
      number: number,
      userName: name,
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });
  return (
    <Stack
      width={"100%"}
      marginTop={"55px"}
      alignItems={"center"}
      paddingY={"40px"}
    >
      <Stack width={384} alignItems={"center"} gap={6}>
        <Typography fontSize={28} fontWeight={600}>
          Мэдээлэл өөрчлөх
        </Typography>
        <Stack width={120} height={120} position={"relative"}>
          <Stack
            width={"100%"}
            height={"100%"}
            position={"relative"}
            borderRadius={"50%"}
            overflow={"hidden"}
          >
            {!picture ? (
              <Image fill src={"/noProfile.jpeg"} alt="" />
            ) : (
              <Image fill src={picture} alt="" />
            )}
          </Stack>
          <Stack
            width={34}
            height={34}
            border={"1px solid #D6D8DB"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"primary.main"}
            position={"absolute"}
            bottom={0}
            right={0}
            borderRadius={"50%"}
            bgcolor={"white"}
            sx={{ cursor: "pointer" }}
            onClick={() => {}}
          >
            <Edit />
          </Stack>
        </Stack>
        <Stack width={"100%"} gap={3}>
          {/* one input */}
          <ProfileInput
            name="userName"
            label="User name"
            handleBlur={formik.handleBlur}
            value={formik.values.userName}
            onChange={formik.handleChange}
            icon={<PersonRounded />}
          />
          <ProfileInput
            name="email"
            label="email"
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            icon={<Email />}
          />
          <ProfileInput
            name="number"
            label="Phone number"
            handleBlur={formik.handleBlur}
            value={formik.values.number}
            onChange={formik.handleChange}
            icon={<Phone />}
          />
          <Button variant="contained" fullWidth>
            Хадгалах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
