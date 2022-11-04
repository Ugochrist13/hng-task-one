import { VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <VStack>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </VStack>
  );
}

export default App;
