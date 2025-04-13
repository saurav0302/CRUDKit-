import { Box, Flex, Text, IconButton, useColorMode, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      bg={colorMode === "light" ? "#FBE9D0" : "#244855"} 
      py={3} 
      px={4} 
      width="100%" 
      borderBottom={colorMode === "light" ? "1px solid #E6D5B8" : "none"}
      boxShadow={colorMode === "light" ? "0 2px 8px rgba(0,0,0,0.05)" : "0 2px 10px rgba(0,0,0,0.1)"}
    >
      <Container maxW="container.xl">
        <Flex 
          align="center" 
          justify="space-between"
        >
          <Link to="/">
            <Text
              fontSize="28px"
              fontFamily="'Comic Neue', cursive"
              fontWeight="bold"
              letterSpacing="1px"
              color="#E64833"
            >
              CRUD-KIT
            </Text>
          </Link>

          <Flex align="center">
            <Link to="/create">
              <IconButton
                icon={<PlusSquareIcon fontSize="22px" />}
                aria-label="Create new item"
                bg="#E64833"
                color="white"
                _hover={{ bg: "#d13d29" }}
                borderRadius="md"
                mr={3}
                size="lg"
                boxShadow="sm"
              />
            </Link>
            <IconButton
              icon={colorMode === "light" ? 
                <IoMoon size="22px" /> : 
                <LuSun size="22px" />
              }
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              bg={colorMode === "light" ? "#90AEAD" : "#E64833"}
              color="white"
              _hover={{ 
                bg: colorMode === "light" ? "#7d9b9a" : "#d13d29" 
              }}
              borderRadius="md"
              size="lg"
              boxShadow="sm"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;