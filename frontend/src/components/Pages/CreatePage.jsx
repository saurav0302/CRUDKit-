import { 
  Box, 
  Button, 
  Container, 
  Flex,
  FormControl,
  FormLabel,
  Heading, 
  Input, 
  useColorModeValue, 
  useToast, 
  VStack,
  Icon,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../Store/Product.js";
import { FiBox, FiDollarSign, FiImage, FiShoppingBag } from "react-icons/fi";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  // Using our vintage color palette
  const bgColor = useColorModeValue("#FBE9D0", "#244855");
  const cardBgColor = useColorModeValue("white", "#1a3640");
  const accentColor = useColorModeValue("#E64833", "#E64833");
  const textColor = useColorModeValue("#244855", "white");
  const borderColor = useColorModeValue("#90AEAD", "#874F41");

  return (
    <Container maxW="container.md" py={10}>
      <Box 
        bg={cardBgColor} 
        p={8} 
        rounded="xl" 
        shadow="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <VStack spacing={8} align="stretch">
          <Flex align="center" justify="center">
            <Icon as={FiShoppingBag} w={10} h={10} color={accentColor} mr={3} />
            <Heading 
              as="h1" 
              size="xl" 
              textAlign="center"
              color={textColor}
              fontFamily="'Comic Neue', cursive"
              fontWeight="bold"
            >
              Create New Product
            </Heading>
          </Flex>

          <Box 
            p={6} 
            rounded="md" 
            bg={useColorModeValue("rgba(144, 174, 173, 0.1)", "rgba(135, 79, 65, 0.1)")}
          >
            <VStack spacing={6}>
              <FormControl>
                <FormLabel fontWeight="bold" color={textColor}>
                  <Flex align="center">
                    <Icon as={FiBox} mr={2} color={accentColor} />
                    <Text>Product Name</Text>
                  </Flex>
                </FormLabel>
                <Input
                  placeholder="Enter product name"
                  name="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  borderColor={borderColor}
                  _hover={{ borderColor: accentColor }}
                  _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                  bg={useColorModeValue("white", "rgba(36, 72, 85, 0.3)")}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" color={textColor}>
                  <Flex align="center">
                    <Icon as={FiDollarSign} mr={2} color={accentColor} />
                    <Text>Price</Text>
                  </Flex>
                </FormLabel>
                <Input
                  placeholder="Enter price"
                  name="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  borderColor={borderColor}
                  _hover={{ borderColor: accentColor }}
                  _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                  bg={useColorModeValue("white", "rgba(36, 72, 85, 0.3)")}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" color={textColor}>
                  <Flex align="center">
                    <Icon as={FiImage} mr={2} color={accentColor} />
                    <Text>Image URL</Text>
                  </Flex>
                </FormLabel>
                <Input
                  placeholder="Enter image URL"
                  name="image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  borderColor={borderColor}
                  _hover={{ borderColor: accentColor }}
                  _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                  bg={useColorModeValue("white", "rgba(36, 72, 85, 0.3)")}
                />
              </FormControl>

              <Button 
                bg={accentColor}
                color="white"
                _hover={{ bg: "#d13d29", transform: "translateY(-2px)" }}
                _active={{ bg: "#b5351f" }}
                size="lg"
                w="full"
                fontWeight="bold"
                onClick={handleAddProduct}
                transition="all 0.3s ease"
                boxShadow="md"
                mt={4}
              >
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreatePage;