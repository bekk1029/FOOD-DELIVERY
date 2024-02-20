"use client";
import { Collapse, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import LoginForm from "../LoginForm";
type HeaderLoginCardProps = {
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
};
export const HeaderLoginCard = (props: HeaderLoginCardProps) => {
  const { shown, setShown } = props;
  return (
    <Collapse in={shown}>
      <Stack
        zIndex={50}
        position={"fixed"}
        display={shown ? "flex" : "none"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          onClick={() => {
            setShown(false);
          }}
          width={"100%"}
          height={"100%"}
          bgcolor={"#00000080"}
          position={"absolute"}
        ></Stack>
        <LoginForm setShown={setShown} />
      </Stack>
    </Collapse>
  );
};
