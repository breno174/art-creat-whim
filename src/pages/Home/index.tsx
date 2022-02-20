import {
  Flex,
  Text,
  Grid,
  Image,
  Box,
  HStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import backfloor from "../../assets/sueny.jpg";

export const Home = () => {
  return (
    <Box id="content" backgroundColor="gray.400" w="100vw" h="100vh">
      <Box as="header" h="9vh" p="8px" backgroundColor="brown.400">
        <Flex alignItems="center" h="100%">
          <HStack
            position="relative"
            zIndex="10"
            backgroundColor="gray.200"
            w="100%"
            h="100%"
            boxShadow="0 25px 45px rgb(0,0,0, 0.1)"
            borderRadius="13px"
            alignItems="center"
            justifyContent="space-around"
            backdropBlur="25px"
          >
            <Text
              fontSize={["18px", "20px", "24px", "28px"]}
              color="white"
              fontWeight="bold"
            >
              Minha historia
            </Text>
            <Text
              fontSize={["18px", "20px", "24px", "28px"]}
              color="white"
              fontWeight="bold"
            >
              Produtos
            </Text>
            <Text
              fontSize={["18px", "20px", "24px", "28px"]}
              color="white"
              fontWeight="bold"
            >
              Contatos
            </Text>
            <Text
              fontSize={["18px", "20px", "24px", "28px"]}
              color="white"
              fontWeight="bold"
            >
              Carrinho
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Box as="main" h="91vh">
        <Flex
          as="section"
          w="100%"
          h="100%"
          p="20px"
          alignItems="center"
          justifyContent="center"
          backgroundColor="blue.300"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            id="backimage"
            width="70%"
            maxW="800px"
            height="70%"
            bgGradient="linear(to-r, gray.500, gray.100, gray.500)"
          >
            <Box id="ferro" h="85%" w="85%" backgroundColor="blue.300"></Box>
          </Flex>
          <Box h="100%" id="home">
            <Heading
              as="h2"
              position="absolute"
              top="40%"
              left="30%"
              zIndex="10"
              fontSize="68px"
              color="white"
            >
              Criar com capricho
            </Heading>
            <Heading
              as="h3"
              position="absolute"
              top="50%"
              left="30%"
              zIndex="10"
              fontSize="44px"
              color="white"
            >
              Sueny Angelim
            </Heading>
            {/*<Image h="100%" src={backfloor} alt="backgroudn image" />*/}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
