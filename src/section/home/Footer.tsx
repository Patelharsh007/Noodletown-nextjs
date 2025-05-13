import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container
      sx={{
        maxWidth: "1300px",
        width: "90%",
        margin: "200px auto 100px",
        position: "relative",
        padding: "auto",
      }}
    >
      <Box
        width={"100%"}
        height={{ xs: "400px", sm: "526px" }}
        position={"relative"}
        margin={"auto"}
      >
        <Box
          component={"img"}
          src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031421/footerMobile_xy1ghu.jpg`}
          alt="Footer-image"
          width={"100%"}
          height={"100%"}
          borderRadius={"178px 0px 178px 0px"}
          boxShadow={"0px 4px 9px 3px rgba(0, 0, 0, 0.1)"}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <Box
          position={"absolute"}
          top={{ xs: "20%", sm: "30%" }}
          left={{ xs: "5%", sm: "9%" }}
          width={"35%"}
          height={{ xs: "auto", sm: "380px" }}
          padding={{ xs: "20px", sm: "0" }}
          borderRadius={"10px"}
          textAlign={"center"}
        >
          <Typography
            variant="h1"
            width={"100%"}
            margin={"auto"}
            fontFamily={"Poppins"}
            fontSize={{ xs: "17px", sm: "36px", lg: "48px" }}
            fontWeight={700}
            lineHeight={{ xs: "36px", sm: "48px", lg: "72px" }}
            marginBottom={"20px"}
          >
            Download our app
          </Typography>
          <Grid container spacing={2} width={"100%"}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <a href="https://play.google.com/">
                <Box
                  component={"img"}
                  src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031434/playstore_n9kzhz.png`}
                  alt=""
                  width={{ xs: "80px", sm: "150px" }}
                  height={{ xs: "45px", sm: "90px" }}
                  borderRadius={"5px"}
                  display={"block"}
                  margin={"auto"}
                />
              </a>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <a href="https://www.apple.com/in/app-store/">
                <Box
                  component={"img"}
                  src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031418/appstore_nrtpcn.png`}
                  alt=""
                  width={{ xs: "80px", sm: "150px" }}
                  height={{ xs: "45px", sm: "90px" }}
                  borderRadius={"5px"}
                  display={"block"}
                  margin={"auto"}
                />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
