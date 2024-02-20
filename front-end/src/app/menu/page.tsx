"use client";
import CustomCard from "@/components/CustomCard";
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    href: "breakfast",
    label: "Breakfast",
  },
  {
    href: "soup",
    label: "Soup",
  },
  {
    href: "main-course",
    label: "Main course",
  },
  {
    href: "dessert",
    label: "Dessert",
  },
];

export default function Menu() {
  const router = useRouter();
  const [getCards, setGetCards] = useState("");
  const [page, setPages] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Stack height={"120vh"} width={"100vw"}>
      <Container maxWidth="lg">
        <Stack width={"100%"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingTop={4}
            paddingBottom={10}
            gap={7}
          >
            {tabs.map((item) => (
              <Stack
                flex={1}
                onClick={() => {
                  setActiveTab(item), router.push(`/${item.href}`);
                }}
                sx={{
                  bgcolor:
                    item.label === activeTab.label ? "#18BA51" : "common.white",
                  color:
                    item.label === activeTab.label
                      ? "common.white"
                      : "common.black",
                }}
                border={1}
                justifyContent={"center"}
                alignItems={"center"}
                width={"15vw"}
                borderRadius={"8px"}
                paddingY={1}
                paddingX={2}
              >
                <Typography key={item.label} fontSize={18} fontWeight={600}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Grid container spacing={3}>
            {new Array(8).fill(0).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <CustomCard
                  title="JENNIE KIM"
                  image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
                  mediumprice="4800$"
                  regularprice="9800$"
                  discount="20%"
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
