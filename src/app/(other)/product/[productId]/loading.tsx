import { Box, Grid, Skeleton } from "@mui/material";

const ProductLoading = () => {
  return (
    <Box
      maxWidth="1600px"
      width="90%"
      margin="auto"
      marginY={{ xs: "30px", md: "50px" }}
    >
      <Grid size={{ sm: 12, md: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height={500}
        />
      </Grid>

      <Grid size={{ sm: 12, md: 7 }}>
        <Skeleton animation="wave" variant="text" width="60%" height={40} />
        <Skeleton
          animation="wave"
          variant="text"
          width="40%"
          height={20}
          sx={{ marginTop: 1 }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="80%"
          height={20}
          sx={{ marginTop: 2 }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="60%"
          height={50}
          sx={{ marginTop: 2 }}
        />
      </Grid>
    </Box>
  );
};

export default ProductLoading;
