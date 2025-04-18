import React from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";

export default function ExperienceAccordionItem({
  date,
  title,
  company,
  description,
  skills,
}) {
  return (
    <Accordion.Root allowToggle collapsible>
      <Accordion.Item value={title}>
        <Accordion.ItemTrigger asChild>
          <Box
            as="button"
            textAlign="left"
            p={4}
            cursor="pointer"
            transition="background 0.3s ease, transform 0.3s ease"
            _hover={{ bg: "gray.50", transform: "scale(1.01)" }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "flex-start", md: "center" }}
              w="full"
            >
              {/* Left side: Title, Company, and Date */}
              <Box mb={{ base: 2, md: 0 }}>
                <Heading as="h3" size="md">
                  {title} - {company}
                </Heading>
                <Text fontSize="sm" color="gray.600" mt={1}>
                  {date}
                </Text>
              </Box>

              {/* Right side: Skills */}
              <Wrap
                spacing={2}
                ml={{ base: 0, md: "auto" }}
                mt={{ base: 2, md: 0 }}
                justifyContent={{ base: "none", md: "flex-end" }}
              >
                {skills.map((skill) => (
                  <WrapItem key={skill}>
                    <Badge variant="subtle" colorScheme="blue">
                      {skill}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Flex>
          </Box>
        </Accordion.ItemTrigger>

        <Accordion.ItemContent>
          <Accordion.ItemBody p={4}>
            <Text>{description}</Text>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
