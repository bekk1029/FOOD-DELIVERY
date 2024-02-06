"use client";
import { Stack, Typography, Container } from "@mui/material";
import Image from "next/image";
export default function Header() {
  return (
    <Stack
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: "91vh",
        backgroundImage: "url(/Food.png)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          width={"100%"}
          height={"100vh"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Stack
            width={"100%"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack gap={3} maxWidth={384} width={"fit-content"}>
              <Typography
                color="primary.contrastText"
                variant="h2"
                fontSize={55}
                fontWeight={600}
                lineHeight={"90%"}
              >
                Pinecone Food delivery
              </Typography>
              <hr style={{ width: "100%" }} />
              <Typography
                variant="h4"
                color="primary.contrastText"
                fontSize={22}
                fontWeight={400}
                lineHeight={"120%"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Stack maxWidth={618} width={"100%"} height={"60vh"}>
              <Stack position={"relative"}>
                <Image
                  style={{ position: "absolute", top: "0px", left: "0px" }}
                  width={443}
                  height={438}
                  src={"/image 13.png"}
                  alt="some food"
                />
                <Image
                  style={{
                    position: "absolute",
                    right: "30px",
                    bottom: "-420px",
                  }}
                  width={313}
                  height={313}
                  src={"/image 14.png"}
                  alt="some food"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
