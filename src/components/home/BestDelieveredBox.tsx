"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

interface BestDelieveredBoxProps {
  box: { id: string; imageurl: string; title: string };
}

const BestDelieveredBox: React.FC<BestDelieveredBoxProps> = ({ box }) => {
  return (
    <>
      <Box
        id="best-deivered-box"
        width={{ md: "200px", lg: "246px" }}
        height={{ md: "280px", lg: "317px" }}
        padding={{ sm: "30px", md: "10px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Link href={`/product/${box.id}`} passHref>
          {/* <a style={{ textDecoration: "none" }}> */}
          <Box
            component={"img"}
            src={box.imageurl}
            alt={box.title}
            width={{ sm: "246px", md: "200px", lg: "246px" }}
            height={{ sm: "246px", md: "200px", lg: "246px" }}
            borderRadius={"50%"}
            style={{
              objectFit: "cover",
            }}
          />
          {/* </a> */}
        </Link>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"20px"}
          fontWeight={600}
          lineHeight={"30px"}
          letterSpacing={0}
          textAlign={"center"}
        >
          {box.title}
        </Typography>
      </Box>
    </>
  );
};

export default BestDelieveredBox;
