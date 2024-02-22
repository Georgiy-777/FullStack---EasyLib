import { i_400_18_36 } from "@/styles/fontStyle";
import { Box, Text } from "@chakra-ui/react";

export const BlockTitle = ({
  title,
  titleStyle,
  desc,
  descStyle,
  containerStyles,
}) => {
  return (
    <Box w="100%" maxW="1300px" mx="auto" {...containerStyles}>
      <Text
        {...i_400_18_36}
        letterSpacing="2.52px"
        textTransform={"uppercase"}
        opacity="0.85"
        fontFamily="Waldenburg-Buch"
        {...titleStyle}
      >
        {title}
      </Text>
      {desc ? (
        <Text
          mt="27px"
          fontFamily="Waldenburg-Buch"
          lineHeight="130%"
          fontSize={{ base: "32px", md: "49px" }}
          {...descStyle}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      ) : null}
    </Box>
  );
};
