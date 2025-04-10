import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { customConfig } from "./theme/config";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
// import MyTimeline from "./components/MyTimeline";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";

const system = createSystem(defaultConfig, customConfig);

export default function App() {
  return (
    <ChakraProvider value={system}>
      <Navbar />
      <HeroSection />
      <Skills />
      <ExperienceSection />
      <Projects />
    </ChakraProvider>
  );
}
