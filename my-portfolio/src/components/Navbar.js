// import React from "react";
// import {
//   Box,
//   Flex,
//   Heading,
//   Link,
//   Spacer,
//   HStack,
//   // IconButton,
//   Stack,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// export default function Navbar() {
//   // For toggling the mobile menu
//   const { isOpen, onToggle } = useDisclosure();

//   // Define navigation links (consistent for desktop and mobile)
//   const navLinks = [
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Experience", href: "#experience" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <Box
//       as="nav"
//       position="fixed"
//       top="0"
//       left="0"
//       right="0"
//       zIndex="modal"
//       bg="white"
//       color="black"
//       boxShadow="sm"
//       px={{ base: 4, md: 8 }}
//       py={4}
//     >
//       <Flex align="center">
//         {/* Logo/Name on the left */}
//         <Heading
//           as="h1"
//           size="md"
//           letterSpacing="widest"
//           color="lighterjeans"
//           fontWeight="extrabold"
//         >
//           anushka
//         </Heading>

//         <Spacer />

//         <Box
//           as="button"
//           onClick={onToggle}
//           display={{ base: "inline-flex", md: "none" }}
//           aria-label="Toggle Navigation"
//           p={2}
//           borderWidth="1px"
//           borderColor="gray.200"
//           borderRadius="md"
//           transition="background 0.2s ease, transform 0.2s ease"
//           _hover={{ bg: "gray.100", transform: "scale(1.02)" }}
//         >
//           {isOpen ? (
//             <IoClose size="24px" color="black" />
//           ) : (
//             <GiHamburgerMenu size="24px" color="grey" />
//           )}
//         </Box>

//         {/* Horizontal links on medium+ screens */}
//         <HStack spacing={10} display={{ base: "none", md: "flex" }} ml={6}>
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               pl="3"
//               letterSpacing="widest"
//               _hover={{ textDecoration: "underline" }}
//               _focus={{
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//               _focusVisible={{
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//               _active={{
//                 outline: "none",
//                 boxShadow: "none",
//               }}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </HStack>
//       </Flex>

//       {/* Collapsible menu when isOpen=true (small screens only) */}
//       {isOpen && (
//         <Box pb={4} display={{ md: "none" }}>
//           <Stack as="nav" spacing={4}>
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={onToggle} // close menu when link is clicked
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// }

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  // For toggling the mobile menu
  const { isOpen, onToggle } = useDisclosure();

  // Define navigation links (consistent for desktop and mobile)
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

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
          color="lighterjeans"
          fontWeight="extrabold"
        >
          anushka
        </Heading>

        <Spacer />

        {/* Hamburger menu button on small screens */}
        <Box
          as="button"
          onClick={onToggle}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Toggle Navigation"
          p={2}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          transition="background 0.2s ease, transform 0.2s ease"
          _hover={{ bg: "gray.100", transform: "scale(1.02)" }}
        >
          {isOpen ? (
            <IoClose size="24px" color="black" />
          ) : (
            <BsList size="24px" color="darkerjeans" />
          )}
        </Box>

        {/* Horizontal links on medium+ screens */}
        <HStack spacing={10} display={{ base: "none", md: "flex" }} ml={6}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              pl="3"
              letterSpacing="widest"
              _hover={{ textDecoration: "underline" }}
              _focus={{ outline: "none", boxShadow: "none" }}
              _active={{ outline: "none", boxShadow: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Collapsible menu when isOpen=true (small screens only) */}
      {isOpen && (
        <Box pb={4} display={{ base: "block", md: "none" }}>
          <Stack as="nav" spacing={4}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onToggle} // Close menu when link is clicked
                _hover={{ textDecoration: "underline" }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
