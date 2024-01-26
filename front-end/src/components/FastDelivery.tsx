import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type DeliveryProps = {
  title: string;
  icon: string;
  description: string;
};

export default function FastDelivery(props: DeliveryProps) {
  const { title, icon, description } = props;
  return (
    <Card sx={{ maxWidth: 282, backgroundColor: "white" }}>
      <CardActionArea sx={{ borderRadius: "16px" }}>
        <Typography
          justifyContent={"center"}
          alignItems={"center"}
          padding={"15px"}
        >
          {icon}
        </Typography>
        <CardContent>
          <Typography
            gutterBottom
            color={"text.primary"}
            fontSize={18}
            fontWeight={700}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            color={"text.secondary"}
            fontSize={14}
            fontWeight={400}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
