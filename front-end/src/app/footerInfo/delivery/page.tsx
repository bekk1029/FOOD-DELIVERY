"use client";
import * as React from "react";
import {
  Stack,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import GreenStarCom from "@/components/GreenStarCom";
function Page() {
  return (
    <Stack py={5}>
      <Container maxWidth="lg">
        <Stack pb={5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5598617.903062559!2d98.55367466059306!3d46.75109421566715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2z0JzQvtC90LPQvtC7INCj0LvRgQ!5e0!3m2!1smn!2smn!4v1707213074605!5m2!1smn!2smn"
            width="100%"
            height="616"
            loading="lazy"
          />
        </Stack>
        <Stack py={2} gap={3}>
          <GreenStarCom title=" Хүргэлтийн бүс дэх хаягууд" />
          <Stack
            gap={5}
            width={"100%"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            {" "}
            <Card sx={{ width: "50%", backgroundColor: "white" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    fontSize={18}
                    fontWeight={700}
                    color={"#000"}
                    pb={2}
                  >
                    A бүс
                  </Typography>
                  <Box
                    width={"100%"}
                    height={"1.5px"}
                    sx={{ background: "#18BA51" }}
                  ></Box>
                </CardContent>
              </CardActionArea>
            </Card>{" "}
            <Card sx={{ width: "50%", backgroundColor: "white" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    fontSize={18}
                    fontWeight={700}
                    color={"#000"}
                    pb={2}
                  >
                    Б бүс
                  </Typography>
                  <Box
                    width={"100%"}
                    height={"1.5px"}
                    sx={{ background: "#18BA51" }}
                  ></Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
export default Page;
