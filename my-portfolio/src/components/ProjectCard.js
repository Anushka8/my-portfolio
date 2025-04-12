// src/components/ProjectCard.js
import React from "react";
import { Box, Text, Image, SimpleGrid, Container } from "@chakra-ui/react";

export default function ProjectCard({ project }) {
  return (
    <Container p={"2rem"}>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
        _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}
      >
        {/* Project image */}
        <Image
          src={project.image}
          alt={project.title}
          w="100%"
          h="200px"
          objectFit="cover"
        />

        {/* Project info */}
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold">
            {project.title}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {project.description}
          </Text>
        </Box>

        {/* Hover overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.7)"
          color="white"
          opacity="0"
          transition="opacity 0.3s ease"
          _hover={{ opacity: 1 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
        >
          <Text mb={4} fontSize="lg" fontWeight="bold">
            Skills
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
            {project.skills.map((skill) => (
              <Box
                key={skill}
                bg="gray.200"
                color="black"
                borderRadius="md"
                p={1}
                textAlign="center"
              >
                {skill}
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
