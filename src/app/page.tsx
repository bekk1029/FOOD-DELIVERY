import Image from "next/image";
import styles from "./page.module.css";
import { CustomInput } from "@/components/CustomInput";
import { Stack } from "@mui/material";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export default function Home() {
  return (
   <Stack gap={3}>
     <CustomInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу"/>
     <CustomInput label="Нууц үг" type="password" placeholder="Нууц үг"/>
   </Stack>
  )
}
