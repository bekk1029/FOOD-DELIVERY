"use client";
import GreenBook from "@/assets/GreenBook";
import GreenClock from "@/assets/GreenClock";
import GreenStar from "@/assets/GreenStar";
import GreenVegatable from "@/assets/GreenVegatable";
import CustomCard from "@/components/CustomCard";
import CustomCardNoDiscount from "@/components/CustomCardNoDiscount";
import FastDelivery from "@/components/FastDelivery";
import GreenStarCom from "@/components/GreenStarCom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Card,
  CardContent,
  CardActionArea,
  Stack,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack gap={"122px"} pb={"2000px"}>
      <Stack
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: "80vh",
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
                  Horem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Stack>
              <Stack maxWidth={618} width={"100%"} height={"50vh"}>
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
      <Stack flexDirection={"row"} flexGrow={1} height={"155px"}>
        <Container maxWidth={"lg"}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
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
            <Card sx={{ maxWidth: 282, borderRadius: "16px" }}>
              <CardActionArea>
                <Typography
                  justifyContent={"center"}
                  alignItems={"center"}
                  padding={"15px"}
                >
                  <GreenClock />
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    color={"text.primary"}
                    fontSize={18}
                    fontWeight={700}
                  >
                    Шуурхай хүргэлт
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
            <Card sx={{ maxWidth: 282, borderRadius: "16px" }}>
              <CardActionArea>
                <Typography
                  justifyContent={"center"}
                  alignItems={"center"}
                  padding={"15px"}
                >
                  <GreenVegatable />
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    color={"text.primary"}
                    fontSize={18}
                    fontWeight={700}
                  >
                    Эрүүл, баталгаат орц
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
                    Хоолны өргөн сонголт
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
          </Stack>
        </Container>
      </Stack>
      <Stack flexDirection={"row"} flexGrow={1} height={"155px"}>
        <Container maxWidth={"lg"}>
          <Stack gap={10}>
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
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={14}
                    fontWeight={400}
                  >
                    Бүгдийг харах
                  </Typography>
                  <ArrowForwardIosIcon sx={{ width: "15px", height: "30px" }} />
                </Button>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between" gap={3}>
                <CustomCard
                  title="JENNIE KIM"
                  image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
                  mediumprice="4800$"
                  regularprice="9800$"
                  discount="20%"
                />
                <CustomCard
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
                  mediumprice="14,800₮"
                  discount="20%"
                />
                <CustomCard
                  title="Зайрмаг"
                  image="https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfB44k46mJ3CPElGyljpa-pBE-EqnKUE3FN38VTak16gQ7NuJcGiF4lGPivFzqFh4OtUHmOLdfo6gR3FPgfSv-k0nnizeoBNOithor-LK3dRIthoP9Z9IjQNRtZzEwsouPWqnmWAcMEAJ-4ieZ8LuGfXZyHtTYRwYCsuQEOHcfmnMPne8WGNt93UmdNN-glGRJikm5HJ-7b4RQoj~XCcaux4i4kows3nnZlkqvpcXCPVwLHYqTWZD5161qJeb0dnb2SLxfrlm5rarWZD~38YMvot4CYwmeSYlxVDnZMumNzBbdmYaZqlxewIDIi~4FYod3O-WKUFqXrUR60a2EGDlw__"
                  mediumprice="4,800₮"
                  regularprice="9,800₮"
                  discount="20%"
                />
                <CustomCard
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PISbuhAALEU~EdLgdM50BPcGx8M4O9KmD70B2iHHKySlYJ0VpKu6HeFK2sbGSsiYxgKSVjq7vpQ07k3Dmd9K6LeXO~L4r0RGJf3R8fhWBFCwp90pUb39pC7t0zHXZGfd0tjA7tpfcpwgceUD-RWyvLcS~rCU3GwY3tWjMXWhaj7MSPqHbFTprzNRkSNS7x~M-NzbjdPbhN9Tm3i1CvRaBRRanCyPzb5vBcNXzrWtXIM0pwTiXINjoTf3atq~0l4QwuwBIzRTuNgjcsLY3dZ4sTduNPPBjuoElq0ych8KURdP3W-qDLMzuTKaZ~6dryUlbMxxTyhG9AJpUiHlAIrOqw__"
                  mediumprice="24,800₮"
                  regularprice="26,800₮"
                  discount="20%"
                />
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                py={2}
              >
                <GreenStarCom title=" Үндсэн хоол" />
                <Button
                  sx={{
                    width: "fit-content",
                    textAlign: "center",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={14}
                    fontWeight={400}
                  >
                    Бүгдийг харах
                  </Typography>
                  <ArrowForwardIosIcon sx={{ width: "15px", height: "30px" }} />
                </Button>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between" gap={3}>
                <CustomCardNoDiscount
                  title="JENNIE KIM"
                  image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
                  mediumprice="4800$"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
                  mediumprice="14,800₮"
                />
                <CustomCardNoDiscount
                  title="Зайрмаг"
                  image="https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfB44k46mJ3CPElGyljpa-pBE-EqnKUE3FN38VTak16gQ7NuJcGiF4lGPivFzqFh4OtUHmOLdfo6gR3FPgfSv-k0nnizeoBNOithor-LK3dRIthoP9Z9IjQNRtZzEwsouPWqnmWAcMEAJ-4ieZ8LuGfXZyHtTYRwYCsuQEOHcfmnMPne8WGNt93UmdNN-glGRJikm5HJ-7b4RQoj~XCcaux4i4kows3nnZlkqvpcXCPVwLHYqTWZD5161qJeb0dnb2SLxfrlm5rarWZD~38YMvot4CYwmeSYlxVDnZMumNzBbdmYaZqlxewIDIi~4FYod3O-WKUFqXrUR60a2EGDlw__"
                  mediumprice="4,800₮"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PISbuhAALEU~EdLgdM50BPcGx8M4O9KmD70B2iHHKySlYJ0VpKu6HeFK2sbGSsiYxgKSVjq7vpQ07k3Dmd9K6LeXO~L4r0RGJf3R8fhWBFCwp90pUb39pC7t0zHXZGfd0tjA7tpfcpwgceUD-RWyvLcS~rCU3GwY3tWjMXWhaj7MSPqHbFTprzNRkSNS7x~M-NzbjdPbhN9Tm3i1CvRaBRRanCyPzb5vBcNXzrWtXIM0pwTiXINjoTf3atq~0l4QwuwBIzRTuNgjcsLY3dZ4sTduNPPBjuoElq0ych8KURdP3W-qDLMzuTKaZ~6dryUlbMxxTyhG9AJpUiHlAIrOqw__"
                  mediumprice="24,800₮"
                />
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                py={2}
              >
                <GreenStarCom title=" Салад ба зууш" />
                <Button
                  sx={{
                    width: "fit-content",
                    textAlign: "center",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={14}
                    fontWeight={400}
                  >
                    Бүгдийг харах
                  </Typography>
                  <ArrowForwardIosIcon sx={{ width: "15px", height: "30px" }} />
                </Button>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between" gap={3}>
                <CustomCardNoDiscount
                  title="JENNIE KIM"
                  image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
                  mediumprice="4800$"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
                  mediumprice="14,800₮"
                />
                <CustomCardNoDiscount
                  title="Зайрмаг"
                  image="https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfB44k46mJ3CPElGyljpa-pBE-EqnKUE3FN38VTak16gQ7NuJcGiF4lGPivFzqFh4OtUHmOLdfo6gR3FPgfSv-k0nnizeoBNOithor-LK3dRIthoP9Z9IjQNRtZzEwsouPWqnmWAcMEAJ-4ieZ8LuGfXZyHtTYRwYCsuQEOHcfmnMPne8WGNt93UmdNN-glGRJikm5HJ-7b4RQoj~XCcaux4i4kows3nnZlkqvpcXCPVwLHYqTWZD5161qJeb0dnb2SLxfrlm5rarWZD~38YMvot4CYwmeSYlxVDnZMumNzBbdmYaZqlxewIDIi~4FYod3O-WKUFqXrUR60a2EGDlw__"
                  mediumprice="4,800₮"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PISbuhAALEU~EdLgdM50BPcGx8M4O9KmD70B2iHHKySlYJ0VpKu6HeFK2sbGSsiYxgKSVjq7vpQ07k3Dmd9K6LeXO~L4r0RGJf3R8fhWBFCwp90pUb39pC7t0zHXZGfd0tjA7tpfcpwgceUD-RWyvLcS~rCU3GwY3tWjMXWhaj7MSPqHbFTprzNRkSNS7x~M-NzbjdPbhN9Tm3i1CvRaBRRanCyPzb5vBcNXzrWtXIM0pwTiXINjoTf3atq~0l4QwuwBIzRTuNgjcsLY3dZ4sTduNPPBjuoElq0ych8KURdP3W-qDLMzuTKaZ~6dryUlbMxxTyhG9AJpUiHlAIrOqw__"
                  mediumprice="24,800₮"
                />
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack
                width={"100%"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                py={2}
              >
                <GreenStarCom title=" Амттан" />
                <Button
                  sx={{
                    width: "fit-content",
                    textAlign: "center",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={14}
                    fontWeight={400}
                  >
                    Бүгдийг харах
                  </Typography>
                  <ArrowForwardIosIcon sx={{ width: "15px", height: "30px" }} />
                </Button>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between" gap={3}>
                <CustomCardNoDiscount
                  title="JENNIE KIM"
                  image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
                  mediumprice="4800$"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
                  mediumprice="14,800₮"
                />
                <CustomCardNoDiscount
                  title="Зайрмаг"
                  image="https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfB44k46mJ3CPElGyljpa-pBE-EqnKUE3FN38VTak16gQ7NuJcGiF4lGPivFzqFh4OtUHmOLdfo6gR3FPgfSv-k0nnizeoBNOithor-LK3dRIthoP9Z9IjQNRtZzEwsouPWqnmWAcMEAJ-4ieZ8LuGfXZyHtTYRwYCsuQEOHcfmnMPne8WGNt93UmdNN-glGRJikm5HJ-7b4RQoj~XCcaux4i4kows3nnZlkqvpcXCPVwLHYqTWZD5161qJeb0dnb2SLxfrlm5rarWZD~38YMvot4CYwmeSYlxVDnZMumNzBbdmYaZqlxewIDIi~4FYod3O-WKUFqXrUR60a2EGDlw__"
                  mediumprice="4,800₮"
                />
                <CustomCardNoDiscount
                  title="Өглөөний хоол"
                  image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PISbuhAALEU~EdLgdM50BPcGx8M4O9KmD70B2iHHKySlYJ0VpKu6HeFK2sbGSsiYxgKSVjq7vpQ07k3Dmd9K6LeXO~L4r0RGJf3R8fhWBFCwp90pUb39pC7t0zHXZGfd0tjA7tpfcpwgceUD-RWyvLcS~rCU3GwY3tWjMXWhaj7MSPqHbFTprzNRkSNS7x~M-NzbjdPbhN9Tm3i1CvRaBRRanCyPzb5vBcNXzrWtXIM0pwTiXINjoTf3atq~0l4QwuwBIzRTuNgjcsLY3dZ4sTduNPPBjuoElq0ych8KURdP3W-qDLMzuTKaZ~6dryUlbMxxTyhG9AJpUiHlAIrOqw__"
                  mediumprice="24,800₮"
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
