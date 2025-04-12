import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function HeroSection() {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 14 }} minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        p={{ base: 10, md: 16 }}
      >
        {/* Left side: text content */}
        <Box flex="1" mr={{ md: 6 }} p={{ base: 3, md: 8 }}>
          <Heading
            as="h1"
            fontSize={{ base: "3rem", md: "6rem" }}
            whiteSpace="nowrap"
            mb={4}
            color="danger"
            py={{ base: 2, md: 4 }}
          >
            Anushka Churi
          </Heading>

          <Heading
            as="h2"
            fontSize={{ base: "1rem", md: "1.5rem" }}
            fontWeight="normal"
            mb={4}
            color="gray"
          >
            A software engineer.
          </Heading>

          <Text mb={4}>
            I am currently a university student at Rochester Institute of
            Technology, working towards a Degree in Computer Science. I love
            building applications.
          </Text>

          {/* Social buttons */}
          <Stack direction="row" spacing={4}>
            <Box
              as="a"
              href="https://www.linkedin.com/in/anushka-churi"
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              bg="blue.200"
            >
              <TfiLinkedin size="24px" color="white" />
            </Box>

            <Box
              as="a"
              href="https://github.com/Anushka8"
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              bg="gray.200"
            >
              <FaGithub size="24px" />
            </Box>

            <Box
              as="a"
              href="https://github.com/Anushka8"
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              bg="red.200"
            >
              <SiGmail size="24px" />
            </Box>
          </Stack>
        </Box>

        {/* Right side: illustration */}
        <Box
          flex="1"
          mt={{ base: 8, md: 16 }}
          textAlign="center"
          p={{ base: 3, md: 8 }}
        >
          <Image
            src="my-notion-face-portrait.png"
            alt="Illustration"
            maxW="400px"
            mx="auto"
          />
        </Box>
      </Flex>
    </Container>
  );
}
