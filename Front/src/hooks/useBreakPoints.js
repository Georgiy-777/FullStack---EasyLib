import { useMediaQuery } from "@chakra-ui/react";

export const useBreakPoints = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isTablet] = useMediaQuery("(max-width: 1140px)");
  const [isDesk] = useMediaQuery("(min-width: 1440px)");

  return { isMobile, isTablet, isDesk };
};
