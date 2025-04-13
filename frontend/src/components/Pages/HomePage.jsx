import { Container, SimpleGrid, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../Store/Product.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { FiPackage } from "react-icons/fi";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            fontFamily="'Comic Neue', cursive"
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#E64833"
          >
            <Box as={FiPackage} display="inline-block" mr={2} />
            Current Products
          </Heading>
          <Text
            fontSize="lg"
            color="#874F41"
            fontFamily="'Comic Neue', cursive"
          >
            Browse through our product collection
          </Text>
        </Box>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w="full"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Box 
            bg="rgba(144, 174, 173, 0.1)" 
            p={6} 
            borderRadius="md"
            textAlign="center"
            borderWidth="1px"
            borderColor="#90AEAD"
          >
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              color="#874F41"
              fontFamily="'Comic Neue', cursive"
              mb={3}
            >
              No products found yet
            </Text>
            <Link to="/create">
              <Text 
                as="span" 
                color="#E64833" 
                fontWeight="bold"
                _hover={{ textDecoration: "underline" }}
              >
                Create your first product →
              </Text>
            </Link>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;