"use client";
import CustomCard from "@/components/CustomCard";
import FooterBar from "@/components/FooterBar";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  grid2Classes,
} from "@mui/material";
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
    <Stack>
      {/* <ResponsiveAppBar /> */}
      <Container maxWidth="lg">
        <Stack alignItems="flex-start" gap={3}>
          <Stack
            gap={0.5}
            flexDirection="row"
            alignItems="center"
            sx={{
              background: "primary.main",
              color: "#000",
            }}
          >
            <Button>
              <Typography fontSize={14} fontWeight={400} color="#000">
                Салад
              </Typography>
            </Button>
            <Typography>/</Typography>
            <Button>
              <Typography fontSize={14} fontWeight={400} color="primary.main">
                Хайлт
              </Typography>
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
              regularprice="16,800₮"
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
      </Container>
      {/* <FooterBar /> */}
    </Stack>
  );
}
