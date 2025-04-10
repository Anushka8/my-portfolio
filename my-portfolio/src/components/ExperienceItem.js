// src/components/ExperienceItem.js
import React from "react";
import { Flex, Box, Heading, Text, Stack, Badge } from "@chakra-ui/react";

/**
 * Props:
 *  - date: "July 2024 - Present"
 *  - title: "Backend Developer"
 *  - company: "KeelWorks Foundation"
 *  - description: string describing role
 *  - skills: array of strings, e.g. ["REST APIs", "TypeScript", ...]
 */
export default function ExperienceItem({
  date,
  title,
  company,
  description,
  skills,
}) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="full"
      mb={8} /* spacing between experience items */
    >
      {/* Left column: Date */}
      <Box
        flex={{ base: "none", md: "0 0 30%" }}
        mr={{ base: 0, md: 8 }}
        mb={{ base: 4, md: 0 }}
      >
        <Text fontWeight="bold">{date}</Text>
      </Box>

      {/* Right column: Title, Company, Description, Skills */}
      <Box flex="1">
        <Heading as="h3" size="md" mb={2}>
          {title} - {company}
        </Heading>
        <Text mb={3}>{description}</Text>

        <Stack direction="row" spacing={2}>
          {skills?.map((skill) => (
            <Badge key={skill} variant="subtle" colorScheme="blue">
              {skill}
            </Badge>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
}
