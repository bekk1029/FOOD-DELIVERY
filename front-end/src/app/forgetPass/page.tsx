"use client";
import { CustomInput } from "@/components";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  grid2Classes,
} from "@mui/material";
import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0)

  if (count == 0) {
    return(
      <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
    >
      <Stack width={"448px"}>
        <Stack padding={4} gap={4} borderRadius={4}>
          <Typography
            fontSize={28}
            fontWeight="bold"
            variant="h4"
            textAlign="center"
            pb={4}
          >
            Нууц үг сэргээх
          </Typography>
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Stack width={"100%"} pt={4} gap={4}>
              <Button
                fullWidth
                disableElevation
                sx={{
                  py: "14.5px",
                }}
                variant="contained"
                disabled={!email}
                onClick={() => {
                  setCount(1)
                }}
              >
                Үргэлжлүүлэх
              </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    ) 
  } else if(count == 1) {
    return (
      <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
    >
      <Stack width={"448px"}>
        <Stack padding={4} gap={4} borderRadius={4}>
          <Typography
            fontSize={28}
            fontWeight="bold"
            variant="h4"
            textAlign="center"
            pb={4}
          >
            Нууц үг сэргээх
          </Typography>
          <Typography
            width={"100%"}
            display={"flex"}
            lineHeight="140%"
            fontSize={16}
            fontWeight={400}
            flexWrap={"wrap"}
          >
            Таны{" "}
            <Typography px={"2px"} color={"primary.main"}>
              {email}
            </Typography>
            хаяг руу сэргээх код илгээгдлээ.
          </Typography>
          <CustomInput
            label="Нууц үг сэргээх код"
            type="password"
            placeholder="*********"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Stack width={"384px"} pt={4} gap={4}>
            <Button
              fullWidth
              disableElevation
              sx={{
                py: "14.5px",
              }}
              variant="contained"
              disabled={!password}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    )
    
  }
  // return (


    
      
    
  //   <Stack
  //     flex={1}
  //     gap={3}
  //     alignItems={"center"}
  //     justifyContent={"center"}
  //     padding={4}
  //     sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
  //   >
  //     <Stack width={"448px"}>
  //       <Stack padding={4} gap={4} borderRadius={4}>
  //         <Typography
  //           fontSize={28}
  //           fontWeight="bold"
  //           variant="h4"
  //           textAlign="center"
  //           pb={4}
  //         >
  //           Нууц үг сэргээх
  //         </Typography>
  //         <CustomInput
  //           label="Имэйл"
  //           placeholder="Имэйл хаягаа оруулна уу"
  //           value={email}
  //           onChange={(event) => {
  //             setEmail(event.target.value);
  //           }}
  //         />
  //         <Stack width={"100%"} pt={4} gap={4}>
  //           <Link href={"/resent"}>
  //             <Button
  //               fullWidth
  //               disableElevation
  //               sx={{
  //                 py: "14.5px",
  //               }}
  //               variant="contained"
  //               disabled={!email}
  //             >
  //               Үргэлжлүүлэх
  //             </Button>
  //           </Link>
  //         </Stack>
  //       </Stack>
  //     </Stack>
  //   </Stack>
  // );
}
export const  emailcode =() => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Stack
      flex={1}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
      padding={4}
      sx={{ backgroundColor: "#fff", borderRadius: "16px" }}
    >
      <Stack width={"448px"}>
        <Stack padding={4} gap={4} borderRadius={4}>
          <Typography
            fontSize={28}
            fontWeight="bold"
            variant="h4"
            textAlign="center"
            pb={4}
          >
            Нууц үг сэргээх
          </Typography>
          <Typography
            width={"100%"}
            display={"flex"}
            lineHeight="140%"
            fontSize={16}
            fontWeight={400}
            flexWrap={"wrap"}
          >
            Таны{" "}
            <Typography px={"2px"} color={"primary.main"}>
              {email}
            </Typography>
            хаяг руу сэргээх код илгээгдлээ.
          </Typography>
          <CustomInput
            label="Нууц үг сэргээх код"
            type="password"
            placeholder="*********"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Stack width={"384px"} pt={4} gap={4}>
            <Button
              fullWidth
              disableElevation
              sx={{
                py: "14.5px",
              }}
              variant="contained"
              disabled={!password}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}


