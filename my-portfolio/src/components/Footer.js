// src/components/Footer.js
import React from "react";
import {
  Box,
  Container,
  HStack,
  Link,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6}>
      <Container maxW="none">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
          align="center"
        >
          {/* Email */}
          <Link
            href="mailto:your-email@example.com"
            color="white"
            _hover={{ textDecoration: "none", color: "grey" }}
          >
            <HStack spacing={2}>
              <Icon as={MdEmail} boxSize={5} />
              <Text>anushkachuri8@gmail.com</Text>
            </HStack>
          </Link>

          {/* LinkedIn */}
          <Link
            href="www.linkedin.com/in/anushka-churi"
            isExternal
            color="white"
            _hover={{ textDecoration: "none", color: "grey" }}
          >
            <HStack spacing={2}>
              <Icon as={FaLinkedin} boxSize={5} />
              <Text>LinkedIn</Text>
            </HStack>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Anushka8"
            isExternal
            color="white"
            _hover={{ textDecoration: "none", color: "grey" }}
          >
            <HStack spacing={2}>
              <Icon as={FaGithub} boxSize={5} />
              <Text>GitHub</Text>
            </HStack>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
