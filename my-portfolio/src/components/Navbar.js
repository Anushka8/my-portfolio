import React from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  // For toggling the mobile menu
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      /* Example: if you defined "danger" in your custom config, you can do bg="danger" */
      bg="white"
      color="black"
      boxShadow="sm"
      px={{ base: 4, md: 8 }}
      py={4}
    >
      <Flex align="center">
        {/* Logo/Name on the left */}
        <Heading
          as="h1"
          size="md"
          letterSpacing="widest"
          color="danger"
          fontWeight="extrabold"
        >
          anushka
        </Heading>

        <Spacer />

        {/* Hamburger menu button on small screens */}
        <IconButton
          variant="outline"
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Toggle Navigation"
        />

        {/* Horizontal links on medium+ screens */}
        <HStack spacing={10} display={{ base: "none", md: "flex" }} ml={6}>
          <Link
            href="#about"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
          <Link
            href="#portfolio"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            Contact
          </Link>
        </HStack>
      </Flex>

      {/* Collapsible menu when isOpen=true (small screens only) */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link href="#about" _hover={{ textDecoration: "underline" }}>
              About
            </Link>
            <Link href="#portfolio" _hover={{ textDecoration: "underline" }}>
              Portfolio
            </Link>
            <Link href="#contact" _hover={{ textDecoration: "underline" }}>
              Contact
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
