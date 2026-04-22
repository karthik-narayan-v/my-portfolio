import { Box } from "@mui/material";
import { ReactNode } from "react";
import { container, scale } from "@/themes/scale";

type AppContainerProps = {
  children: ReactNode;

  disablePaddingX?: boolean;
};

export const AppContainer = ({
  children,
  disablePaddingX = false,
}: AppContainerProps) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        backgroundColor: "customColor.surface",

        pt: {
          xs: scale["3xl"],
          md: scale["4xl"],
        },

        px: disablePaddingX ? 0 : container.paddingX,

      }}
    >
      {children}
    </Box>
  );
};
