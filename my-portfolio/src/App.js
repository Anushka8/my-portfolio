import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { customConfig } from "./theme/config";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyTimeline from "./components/MyTimeline";

const system = createSystem(defaultConfig, customConfig);

export default function App() {
  return (
    <ChakraProvider value={system}>
      <Navbar />
      <HeroSection />
      <MyTimeline />
    </ChakraProvider>
  );
}
