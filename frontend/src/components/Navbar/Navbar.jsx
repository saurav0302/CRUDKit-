import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, #E64833, #874F41)"}
					bgClip={"text"}
				>
					<Link to={"/"}>CRUD-KIT</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button colorScheme="red" bg="#E64833" _hover={{ bg: "#d13d29" }}>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
					<Button 
						onClick={toggleColorMode} 
						bg={colorMode === "light" ? "#90AEAD" : "#874F41"}
						_hover={{ bg: colorMode === "light" ? "#7d9b9a" : "#763f32" }}
					>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;