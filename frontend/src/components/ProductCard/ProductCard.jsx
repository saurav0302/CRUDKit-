import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useProductStore } from "../Store/Product.js";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Custom color values from our vintage palette
  const cardBg = useColorModeValue("white", "#1a3640");
  const cardBorder = useColorModeValue("#90AEAD", "#874F41");
  const textColor = useColorModeValue("#244855", "#FBE9D0");
  const priceColor = useColorModeValue("#E64833", "#E64833");
  const modalBg = useColorModeValue("#FBE9D0", "#244855");
  const inputBg = useColorModeValue("white", "rgba(26, 54, 64, 0.8)");

  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="md"
      rounded="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={cardBg}
      borderWidth="1px"
      borderColor={cardBorder}
    >
      <Box position="relative" h="220px">
        <Image 
          src={product.image} 
          alt={product.name} 
          h="100%" 
          w="full" 
          objectFit="cover" 
        />
        <Box 
          position="absolute" 
          top="0" 
          right="0" 
          bg="rgba(36, 72, 85, 0.7)" 
          color="white" 
          py={1} 
          px={3} 
          borderBottomLeftRadius="md"
        >
          <Flex align="center">
            <Box as={FiDollarSign} mr={1} />
            <Text fontWeight="bold">{product.price}</Text>
          </Flex>
        </Box>
      </Box>

      <Box p={5}>
        <Heading 
          as="h3" 
          size="md" 
          mb={3}
          color={textColor}
          fontFamily="'Comic Neue', cursive"
        >
          {product.name}
        </Heading>

        <HStack spacing={2} mt={4}>
          <IconButton 
            icon={<EditIcon />} 
            onClick={onOpen} 
            bg="#90AEAD"
            color="white"
            _hover={{ bg: "#7d9b9a" }}
            flex="1"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            bg="#E64833"
            color="white"
            _hover={{ bg: "#d13d29" }}
            flex="1"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent bg={modalBg}>
          <ModalHeader 
            color={textColor}
            fontFamily="'Comic Neue', cursive"
          >
            Update Product
          </ModalHeader>
          <ModalCloseButton color={textColor} />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                bg={inputBg}
                borderColor={cardBorder}
                _focus={{ borderColor: "#E64833" }}
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                bg={inputBg}
                borderColor={cardBorder}
                _focus={{ borderColor: "#E64833" }}
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                bg={inputBg}
                borderColor={cardBorder}
                _focus={{ borderColor: "#E64833" }}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#E64833"
              color="white"
              _hover={{ bg: "#d13d29" }}
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button 
              variant="outline" 
              borderColor={cardBorder}
              color={textColor}
              _hover={{ bg: "rgba(144, 174, 173, 0.1)" }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;