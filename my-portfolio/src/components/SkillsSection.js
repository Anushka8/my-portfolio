import React, { useState } from "react";
import {
  Container,
  Heading,
  Button,
  Wrap,
  WrapItem,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { skillsData } from "./Skills";

export default function SkillsSection() {
  // "all" means all skills are highlighted
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Remove the "all" button; only these four appear
  const categories = ["frontend", "backend", "frameworks", "CI/CD"];

  return (
    <Container maxW="none" minH="100vh" py="5rem" bg="ghostwhite" id="skills">
      <Center>
        <Heading
          as="h1"
          fontSize={{ base: "4rem", md: "4rem" }}
          whiteSpace="nowrap"
          mb={4}
          py={{ base: 2, md: 4 }}
          color="lighterjeans"
        >
          Skills
        </Heading>
      </Center>
      <Wrap
        spacing={4}
        justify="center"
        px={{ base: "1rem", md: "20rem" }}
        py={{ base: "2.5rem", md: "5rem" }}
      >
        {skillsData.map((skillItem) => {
          const isHighlighted =
            selectedCategory === "all" ||
            skillItem.category === selectedCategory;
          return (
            <WrapItem key={skillItem.name}>
              <SkillCard
                skill={skillItem.name}
                category={skillItem.category}
                isHighlighted={isHighlighted}
              />
            </WrapItem>
          );
        })}
      </Wrap>

      {/* Filter Buttons: When hovering over a button, set the state to that category.
          onMouseLeave on the button group resets the filter to "all". */}
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={4}
        mb={6}
        px={{ base: "5rem", md: "30rem" }}
        onMouseLeave={() => setSelectedCategory("all")}
      >
        {categories.map((cat) => (
          <Button
            letterSpacing="widest"
            key={cat}
            variant="link"
            textDecoration={selectedCategory === cat ? "underline" : "none"}
            colorScheme={selectedCategory === cat ? "teal" : "gray"}
            onMouseOver={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </SimpleGrid>
    </Container>
  );
}
