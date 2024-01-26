"use client";
import { CustomInput } from "@/components/CustomInput";
import {
  Button,
  Stack,
  Typography,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container sx={{ border: "solid 1px black" }} maxWidth={"xs"}>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <Stack>
            <Box>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Stack>
                <EditIcon />
              </Stack>
            </Box>
            <Typography>УгтахБаяр</Typography>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
