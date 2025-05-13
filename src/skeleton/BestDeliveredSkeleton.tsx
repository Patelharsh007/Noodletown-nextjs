import { Box, Skeleton } from "@mui/material";

const BestDeliveredSkeleton = () => {
  return (
    <>
      <Box
        id="best-delievered-container"
        maxWidth={"1400px"}
        margin={"0 auto"}
        padding={"0 20px"}
        display={"flex"}
        flexDirection={{ sm: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            id="best-delivered-box"
            width={{ sm: "246px", md: "200px", lg: "246px" }}
            height={{ sm: "317px", md: "280px", lg: "317px" }}
            padding={{ sm: "30px", md: "10px" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Skeleton
              variant="circular"
              animation="wave"
              sx={{
                width: { sm: "246px", md: "200px", lg: "246px" },
                height: { sm: "246px", md: "200px", lg: "246px" },
              }}
            />

            <Skeleton
              variant="text"
              width="60%"
              height={50}
              sx={{ marginTop: 5, margin: "0 auto" }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default BestDeliveredSkeleton;
