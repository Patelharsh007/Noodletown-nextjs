import { Box, Grid, Skeleton, Typography } from "@mui/material";

const LoadingFoodByWeather = () => (
  <Box
    maxWidth={"1600px"}
    width={"90%"}
    margin={"auto"}
    marginTop={"50px"}
    padding={"10px"}
  >
    <Typography
      fontFamily={"Poppins"}
      fontWeight={500}
      fontSize={{ xs: "28px", sm: "32px" }}
      lineHeight={{ xs: "40px", sm: "48px" }}
      letterSpacing={"0%"}
    >
      Food according to Weather
    </Typography>

    <Grid
      container
      spacing={{ xs: "20px", sm: "40px", md: "50px" }}
      marginY={"50px"}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid key={index} size={{ xs: 6, sm: 4 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            animation="wave"
            sx={{
              height: { xs: "200px", sm: "220px", md: "260px" },
              borderRadius: "17px",
            }}
          />

          <Skeleton
            variant="text"
            width="60%"
            height={30}
            animation="wave"
            sx={{ marginBottom: "10px" }}
          />

          <Skeleton variant="text" animation="wave" width="80%" height={20} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default LoadingFoodByWeather;
