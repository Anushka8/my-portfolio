import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  Box,
} from "@chakra-ui/react";
import { customConfig } from "./theme/config";

const system = createSystem(defaultConfig, customConfig);

export default function App() {
  return (
    <ChakraProvider value={system}>
      {/* 3. Use tokens in components */}
      <Box color="danger" fontSize="xl" p={6}>
        Hello from Chakra with my custom system!
      </Box>
      {/* Example using custom keyframe: spin */}
      <Box
        w="100px"
        h="100px"
        bg="danger"
        animation="spin 2s linear infinite"
        margin="20px auto"
      />
    </ChakraProvider>
  );
}
