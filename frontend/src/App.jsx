import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "../src/components/Pages/CreatePage.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

// Color palette from the vintage image
// Dark blue: #244855
// Coral red: #E64833
// Brown: #874F41
// Teal: #90AEAD
// Cream: #FBE9D0

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("#FBE9D0", "#244855")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</Box>
	);
}

export default App;