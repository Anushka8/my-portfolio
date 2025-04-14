// // src/components/ProjectCard.js
// import React from "react";
// import { Box, Text, Image, SimpleGrid, Container } from "@chakra-ui/react";

// export default function ProjectCard({ project }) {
//   return (
//     <Container p={"2rem"}>
//       <Box
//         position="relative"
//         overflow="hidden"
//         borderRadius="lg"
//         boxShadow="md"
//         _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}
//       >
//         {/* Project image */}
//         <Image
//           src={project.image}
//           alt={project.title}
//           w="100%"
//           h="200px"
//           objectFit="cover"
//         />

//         {/* Project info */}
//         <Box p={4}>
//           <Text fontSize="xl" fontWeight="bold">
//             {project.title}
//           </Text>
//           <Text fontSize="sm" color="gray.600">
//             {project.description}
//           </Text>
//         </Box>

//         {/* Hover overlay */}
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           bg="rgba(0,0,0,0.7)"
//           color="white"
//           opacity="0"
//           transition="opacity 0.3s ease"
//           _hover={{ opacity: 1 }}
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           p={4}
//         >
//           <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2} p={"2rem"}>
//             {project.skills.map((skill) => (
//               <Box
//                 key={skill}
//                 bg="gray.200"
//                 color="black"
//                 borderRadius="md"
//                 p={1}
//                 textAlign="center"
//               >
//                 {skill}
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// src/components/ProjectCard.js
import React from "react";
import { Box, Image, Heading, Text, Badge, Stack } from "@chakra-ui/react";

export default function ProjectCard({
  title,
  description,
  image,
  skills,
  repo,
}) {
  return (
    <Box
      w="25rem"
      as="a" // make the card clickable as a link
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
      cursor="pointer"
      _focus={{ boxShadow: "outline" }}
      m={4}
    >
      {/* Project image */}
      <Image src={image} alt={title} w="100%" h="200px" objectFit="cover" />

      <Box p={4}>
        {/* Project Title */}
        <Heading
          as="h3"
          fontSize={{ base: "0.5rem", md: "1.25rem" }}
          // letterSpacing="widest"
          size="md"
          mb={2}
          textAlign={"center"}
          color="lighterjeans"
        >
          {title}
        </Heading>

        {/* Project Description */}
        <Text mb={2} noOfLines={3}>
          {description}
        </Text>

        {/* Tools/Skills Box: a bordered box below the description */}
        <Box mt={4} p={2}>
          <Stack direction="row" spacing={2} wrap="wrap">
            {skills.map((skill) => (
              <Badge key={skill} variant="subtle" colorScheme="blue">
                {skill}
              </Badge>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
