import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingTopBrands = () => (
  <Box maxWidth={"1600px"} width={"90%"} margin={"auto"} marginTop={"30px"}>
    <Typography
      fontFamily={"Poppins"}
      fontWeight={500}
      fontSize={{ xs: "28px", sm: "32px" }}
      lineHeight={{ xs: "40px", sm: "48px" }}
      letterSpacing={"0%"}
    >
      Top brands for you
    </Typography>

    <Box
      width="100%"
      height="100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  </Box>
);

export default LoadingTopBrands;
