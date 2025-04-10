import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import { TfiLinkedin, TfiGithub, TfiFacebook } from "react-icons/tfi";

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
            <Button
              as="a"
              href="#"
              leftIcon={<TfiLinkedin />}
              colorScheme="linkedin"
              variant="solid"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="#"
              leftIcon={<TfiGithub />}
              colorScheme="github"
              variant="solid"
            >
              Facebook
            </Button>
            <Button
              as="a"
              href="#"
              leftIcon={<TfiFacebook />}
              colorScheme="facebook"
              variant="solid"
            >
              Twitter
            </Button>
          </Stack>
        </Box>

        {/* Right side: illustration */}
        <Box
          flex="1"
          mt={{ base: 8, md: 0 }}
          textAlign="center"
          p={{ base: 3, md: 8 }}
        >
          <Image
            src="my-notion-face-portrait.png"
            alt="Illustration"
            animationName="bounce, fade-in"
            animationDuration="slow"
            maxW="400px"
            mx="auto"
          />
        </Box>
      </Flex>
    </Container>
  );
}
