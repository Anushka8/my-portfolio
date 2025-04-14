import React from "react";
import { Box, Heading, Text, Badge, Stack, Flex } from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";

export default function ProjectAccordionCard({
  title,
  skills,
  description,
  repo,
}) {
  return (
    <Accordion.Root allowToggle collapsible>
      <Accordion.Item value={title}>
        {/* A container "card" that is mostly a link to GitHub */}
        <Box
          as="a"
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          display="block"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          p={4}
          mb={4}
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{ transform: "scale(1.01)", boxShadow: "lg" }}
          cursor="pointer"
          position="relative"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
          >
            {/* Left side: Title */}
            <Box>
              <Heading as="h3" size="md" mb={{ base: 2, md: 0 }}>
                {title}
              </Heading>
              {/* Skills below title on small screens, right-aligned on larger */}
              <Stack
                direction={{ base: "row", md: "row" }}
                spacing={2}
                flexWrap="wrap"
                mt={{ base: 2, md: 0 }}
              >
                {skills.map((skill) => (
                  <Badge key={skill} variant="subtle" colorScheme="blue">
                    {skill}
                  </Badge>
                ))}
              </Stack>
            </Box>

            {/* A small toggle button for the Accordion, 
                stopping link navigation so user can expand/collapse description */}
            <Accordion.ItemTrigger asChild>
              <Box
                as="button"
                p={2}
                ml={{ base: 0, md: 2 }}
                onClick={(e) => e.stopPropagation()}
                /* Prevents anchor link click so the accordion can toggle */
              >
                <Accordion.ItemIndicator />
              </Box>
            </Accordion.ItemTrigger>
          </Flex>
        </Box>

        {/* Collapsible content: the project description */}
        <Accordion.ItemContent>
          <Accordion.ItemBody
            p={4}
            borderWidth="1px"
            borderRadius="md"
            mb={4}
            boxShadow="md"
          >
            <Text>{description}</Text>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
