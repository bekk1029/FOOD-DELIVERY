import * as React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import GreenBook from "@/assets/GreenBook";

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 282, borderRadius: "16px" }}>
      <CardActionArea>
        <Typography
          justifyContent={"center"}
          alignItems={"center"}
          padding={"15px"}
        >
          <GreenBook />
        </Typography>
        <CardContent>
          <Typography
            gutterBottom
            color={"text.primary"}
            fontSize={18}
            fontWeight={700}
          >
            Хүргэлтийн төлөв хянах
          </Typography>
          <Typography
            gutterBottom
            color={"text.secondary"}
            fontSize={14}
            fontWeight={400}
          >
            Захиалга бэлтгэлийн явцыг хянах
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
