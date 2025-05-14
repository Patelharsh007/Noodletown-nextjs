import { Container, Grid, Skeleton, Typography } from "@mui/material";

const LoadingRestaurantDetail = () => {
  return (
    <Container maxWidth="lg" sx={{ margin: "80px auto" }}>
      <Typography
        fontFamily="Poppins"
        fontWeight={500}
        fontSize={{ xs: "28px", sm: "24px" }}
        lineHeight={{ xs: "40px", sm: "36px" }}
        letterSpacing="0%"
        color="#000000"
        textAlign={{ xs: "center", sm: "left" }}
      >
        Menu
      </Typography>

      <Grid container spacing={3} marginTop={"30px"}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                sx={{
                  height: { xs: "200px", sm: "300px", md: "500px" },
                  borderRadius: "20px",
                }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="60%"
                height={30}
                sx={{ marginTop: "16px", marginLeft: "16px" }}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default LoadingRestaurantDetail;
