import React from "react";
import { Container, Heading, SimpleGrid, Center } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  // Sample project data – update with your own projects.
  const projects = [
    {
      title: "Health tracker",
      description:
        "Designed and optimized a distributed data storage system using CassandraDB with query-first schema design and batch processing to enhance scalability and reduce query latency, developed a RESTful API with a React-based frontend to improve data processing speed and enhance health metric tracking efficiency.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s",
      skills: ["CassandraDB", "Flask", "React"],
      repo: "https://github.com/Anushka8/HealthTracker",
    },
    {
      title: " Geospatial & Temporal Analysis of Traffic Accident Data",
      description:
        "Led a Manhattan crash data study that employed Python for visualization and spatial analysis, conducted data cleaning and feature selection with Pandas, and applied DBSCAN and KMeans clustering to uncover accident patterns and hotspots, significantly boosting data processing efficiency, accuracy, and clustering performance.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s",
      skills: ["Python", "Pandas", "Seaborn", "DBSCAN", "KMeans"],
      repo: "https://github.com/YourUsername/ProjectTwo",
    },
    {
      title: "Rock Paper Scissors Gesture Recognition",
      description:
        "Developed a gesture recognition system leveraging template matching with an SVM model to achieve 87% accuracy, enhanced hand detection using background subtraction, ROI definition, and skin masking for a 30% improvement, and explored adaptive thresholding with CNN enhancements to increase model robustness by 25%.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s",
      skills: ["OpenCV", "Python", "SVM", "CNN"],
      repo: "https://github.com/btn6364/CSCI-720-Project",
    },
  ];

  return (
    <Container maxW="none" py={16} bg="ghostwhite" id="projects">
      <Center>
        <Heading
          as="h1"
          fontSize={{ base: "4rem", md: "4rem" }}
          whiteSpace="nowrap"
          mb={4}
          py={{ base: 2, md: 4 }}
          color="lighterjeans"
        >
          Projects
        </Heading>
      </Center>
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} py="2rem"> */}
      <SimpleGrid
        SimpleGrid
        columns={{ base: 1, md: 2, lg: 1 }}
        spacing={4}
        justify="center"
        px={{ base: "1rem", md: "20rem" }}
        py={{ base: "2.5rem", md: "5rem" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
