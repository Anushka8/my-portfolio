import React from "react";
import { Box, Heading, Text, Badge, Stack } from "@chakra-ui/react";

export default function ProjectCard({
  title,
  description,
  image,
  skills,
  repo,
}) {
  return (
    <Box
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
      {/* <Image src={image} alt={title} w="100%" h="200px" objectFit="cover" /> */}

      <Box p={4}>
        {/* Project Title */}
        <Heading
          as="h3"
          fontSize={{ base: "1.25rem", md: "1.25rem" }}
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
