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
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  // For toggling the mobile menu
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="modal"
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
          icon={isOpen ? <IoClose /> : <GiHamburgerMenu />}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Toggle Navigation"
        />

        {/* Horizontal links on medium+ screens */}
        <HStack spacing={10} display={{ base: "none", md: "flex" }} ml={6}>
          <Link
            href="#about"
            pl="3"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
          <Link
            href="#skills"
            pl="3"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            pl="3"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            Experience
          </Link>
          <Link
            href="#Projects"
            pl="3"
            letterSpacing="widest"
            _hover={{ textDecoration: "underline" }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            pl="3"
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
