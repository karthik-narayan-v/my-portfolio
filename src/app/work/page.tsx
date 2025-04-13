import { Box, Typography } from "@mui/material";

export default function Work() {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      paddingTop={"80px"}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color={"customColor.darker"}
        sx={{
          fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
          ml: 1,
          whiteSpace: "nowrap",
          fontFamily: "Poppins",
        }}
      >
        {"Work Section Coming Soon..."}
      </Typography>
    </Box>
  );
}
