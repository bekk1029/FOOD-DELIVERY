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
  regularprice?: string;
  discount?: string;
};

export default function CustomCard(props: CustomCardProps) {
  const { title, image, mediumprice, regularprice, discount } = props;
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
        <Button
          sx={{
            py: "0.5",
            px: "2",
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: "16px",
            borderWidth: "1px",
            border: "solid",
            borderColor: "primary.contrastText",
          }}
        >
          <Typography>{discount}</Typography>
        </Button>
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
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={18}
              fontWeight={400}
              sx={{ textDecorationLine: "line-through" }}
            >
              {regularprice}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
