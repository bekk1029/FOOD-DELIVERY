import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Button } from "@mui/material";

type CustomCardProps = {
  title: string;
  image: string;
  mediumprice: string;
};

export default function CustomCardNoDiscount(props: CustomCardProps) {
  const { title, image, mediumprice } = props;
  return (
    <Card sx={{ maxWidth: 282, backgroundColor: "white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="186"
          image={image}
          alt="shaahgu bnshde"
          width="282"
          sx={{ borderRadius: "10", position: "relative", minWidth: "282px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontSize={20} fontWeight={590}>
            {title}
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <Typography
              variant="body2"
              color="primary.main"
              fontSize={18}
              fontWeight={600}
            >
              {mediumprice}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
