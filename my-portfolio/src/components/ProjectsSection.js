// src/components/ProjectsSection.js
import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  // Sample projects data; adjust as needed.
  const projects = [
    {
      title: "Project One",
      description: "A brief description of project one.",
      image: "my-notion-face-portrait.png",
      skills: ["React", "NodeJS", "MongoDB"],
    },
    {
      title: "Project Two",
      description: "A brief description of project two.",
      image: "my-notion-face-portrait.png",
      skills: ["Python", "Flask", "PostgreSQL"],
    },
    {
      title: "Project Three",
      description: "A brief description of project three.",
      image: "my-notion-face-portrait.png",
      skills: ["Java", "Spring", "MySQL"],
    },
  ];

  return (
    <Container maxW="none" py={16}>
      <Heading as="h2" mb={8} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={"2rem"}>
        {projects.map((project, index) => (
          <ProjectCard p={"5rem"} key={index} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
