import { useRef } from "react";
import { Box, Flex,  Text, Button } from "@chakra-ui/react";
import { i_400_108 } from "@/styles/fontStyle";
import NextImage from "next/legacy/image";
import Link from "next/link";
import { AddIcon, } from "@chakra-ui/icons";
import { useSwiper } from "swiper/react";
import Image from "next/legacy/image";

export const ImageCard = ({ imageSrc, imageStyle, title, link, btnText, containerStyles, titleStyles, btnStyles, btnWrapperStyles, iconStyles }) => {
  const btnRef = useRef();


  return (
  <Box
    pos="relative"
    width="100%"
    maxW="1406px"
    maxH="790px"
    h={'100%'}
    borderRadius={{ base: "25px", md: "90px" }}
    {...containerStyles}
  >
    <NextImage src={imageSrc} style={imageStyle} objectFit="cover" layout="fill" alt="project" />

    <Text
      w="100%"
      zIndex={1}
      pos={'relative'}
      left="20px"
      top={{ base: "50%", md: "50%"}}
      textTransform="uppercase"
      fontSize={{ base: "40px", md: '50px', lgg: '70px', "2xl": "90px" }}
      fontFamily={"Waldenburg-SchwerSchmal"}
      dangerouslySetInnerHTML={{ __html: title }}
      {...titleStyles}
    />
    <Flex
      w={{ base: "100%", md: "unset" }}
      pos="absolute"
      bottom="40px"
      right={{ base: "unset", md: "150px " }}
      justifyContent={{ base: "center", md: "flex-end" }}
      {...btnWrapperStyles}
    >
      <Link href={link} >
        <Button
          as="div"
          variant="primary"
          maxW={{ base: "312px", md: "400px" }}
          //height={"66px"}
          textTransform="unset"
          fontFamily="Waldenburg"
          id={'link'}
          fontSize={{ base: "12px", md: "16px" }}
          ref={btnRef}
          {...btnStyles}
        >
          {btnText}
        </Button>
      </Link>
    </Flex>
    <Flex 
      flexDir={'column'}
      pos="absolute"
      bottom={{ base: "50%", md: "40px" }}
      right={{ base: "23px", md: "60px" }}
    >
      <Image 
        id={'pluse'}
        src={"/images/ourWork/plus.png"}
        alt="plus"
        width={'62px'}
        height={'62px'}
      />
      
      <Flex  cursor='vertical-text' mt={'14px'} bgColor={'white'} width="62px" height={'6px'} />
    </Flex>

  </Box>
)};
