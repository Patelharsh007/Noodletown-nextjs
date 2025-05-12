import { Badge, Stack, Box } from "@mui/material";
import Navbar from "@/components/Navbar";

export default function StaticHeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      padding={0}
      height={{ xs: "480px", sm: "548px" }}
      position={"relative"}
      zIndex={1}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/drqniwnnq/image/upload/v1747031432/heroImage_yesiof.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.46)",
          zIndex: -1,
        },
      }}
    >
      <Navbar linkColor="#fff" />
      {children}
    </Box>
  );
}
