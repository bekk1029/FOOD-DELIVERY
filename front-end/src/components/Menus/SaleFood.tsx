import * as React from "react";
import { Typography, Stack, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomCard from "../CustomCard";
import GreenStarCom from "../GreenStarCom";
import { useRouter } from "next/navigation";
import { FoodModalCard } from "../Modals/FoodModalCard";

export default function SaleFoods() {
  const router = useRouter();
  return (
    <Stack gap={3}>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        py={2}
      >
        <GreenStarCom title=" Хямдралтай" />
        <Button
          sx={{
            width: "fit-content",
            textAlign: "center",
            display: "flex",
            gap: "10px",
          }}
          onClick={() => {
            router.push("/menu");
          }}
        >
          <Typography textAlign={"center"} fontSize={14} fontWeight={400}>
            Бүгдийг харах
          </Typography>
          <ArrowForwardIosIcon sx={{ width: "15px", height: "30px" }} />
        </Button>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between" gap={3}>
        <CustomCard
          title="JENNIE KIM"
          image="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          mediumprice="4800$"
          regularprice="9800$"
          discount="20%"
        />
        <CustomCard
          title="Өглөөний хоол"
          image="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          mediumprice="14,800₮"
          discount="20%"
        />
        <CustomCard
          title="Зайрмаг"
          image="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          mediumprice="4,800₮"
          regularprice="9,800₮"
          discount="20%"
        />
        <CustomCard
          title="Өглөөний хоол"
          image="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          mediumprice="24,800₮"
          regularprice="26,800₮"
          discount="20%"
        />
      </Stack>
    </Stack>
  );
}
