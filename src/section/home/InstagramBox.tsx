import { Box, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const InstagramBox: React.FC = () => {
  return (
    <>
      <Box
        maxWidth={"1600px"}
        width={{ xs: "80%", sm: "90%" }}
        margin={"50px auto"}
        padding={{ xs: "25px", sm: "30px" }}
      >
        <Grid
          container
          spacing={2}
          position={"relative"}
          sx={{
            "&::before": {
              content: '""',
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "99.5%",
              background: "rgba(0, 0, 0, 0.2)",
              zIndex: 3,
            },
          }}
        >
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031435/gridInstaImg6_gsylxg.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031431/gridInstaImg4_ymb0ur.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031434/gridInstaImg1_zecyns.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }} display={{ xs: "none", sm: "block" }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031429/gridInstaImg3_rcgbmh.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }} display={{ xs: "none", sm: "block" }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031434/gridInstaImg1_zecyns.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4 }}>
            <Box
              component={"img"}
              src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031435/gridInstaImg6_gsylxg.jpg`}
              alt="Pizza-Image"
              height={{ xs: "180px", sm: "240px", lg: "325px" }}
              width={"100%"}
            />
          </Grid>

          {/* Instagram Overlay Box */}
          <Box
            width={{ xs: "50%", sm: "50%" }}
            height={{ xs: "175px", sm: "180px" }}
            margin={"0 auto"}
            padding={"20px"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            boxShadow={"0px 20px 25px 0px rgba(246, 183, 22, 0.25)"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            zIndex={4}
            sx={{
              backgroundColor: "rgba(246, 183, 22, 1)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={{ xs: "14px", sm: "18px", lg: "22px" }}
              lineHeight={{ xs: "25px", sm: "30px", lg: "33px" }}
              textAlign={"center"}
              color={"#fff"}
            >
              Follow Us On Instagram To See Pictures Taken By Our Customers
            </Typography>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff",
                textDecoration: "none",
                fontSize: { xs: "14px", sm: "18px", lg: "22px" },
                fontFamily: "Poppins",
                fontWeight: 500,
                "&:hover": {
                  color: "#000",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
              @santorins
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default InstagramBox;
