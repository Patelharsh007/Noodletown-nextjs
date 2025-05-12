import React from "react";
import { Box } from "@mui/material";
import DiningOutCard from "../../components/home/DiningOutCard";

const data: CardData[] = [
  {
    imgurl:
      "https://res.cloudinary.com/drqniwnnq/image/upload/v1747031420/diningOut1_mz3dfx.jpg",
    heading: "Dining Out",
    statement: "Explore curated lists of top restaurants",
  },
  {
    imgurl:
      "https://res.cloudinary.com/drqniwnnq/image/upload/v1747031428/diningOut2_o7y62n.jpg",
    heading: "Dining Out",
    statement: "Explore curated lists of top restaurants",
  },
  {
    imgurl:
      "https://res.cloudinary.com/drqniwnnq/image/upload/v1747031432/diningOut3_c80efy.jpg",
    heading: "Dining Out",
    statement: "Explore curated lists of top restaurants",
  },
];

const DiningOut: React.FC = () => {
  return (
    <Box
      maxWidth="1400px"
      margin="20px auto"
      padding="20px 27px"
      position="relative"
    >
      <Box
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          gap={{ xs: "45px", sm: "50px", md: "60px", lg: "60px" }}
          padding="30px 15px"
          sx={{
            "& > *": {
              flexShrink: 0,
            },
          }}
        >
          {data.map((item) => (
            <DiningOutCard Card={item} key={item.imgurl} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DiningOut;
