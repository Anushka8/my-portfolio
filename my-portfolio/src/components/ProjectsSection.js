// src/components/ProjectsSection.js
import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  // Sample projects data; adjust as needed.
  const projects = [
    {
      title: "Health tracker",
      description:
        "Designed and optimized a distributed data storage system using CassandraDB with query-first schema design and batch processing to enhance scalability and reduce query latency, developed a RESTful API with a React-based frontend to improve data processing speed and enhance health metric tracking efficiency.",
      image:
        "https://thumbs.dreamstime.com/b/electronic-healthcare-patient-health-record-doctor-helping-people-ehr-computer-medical-personal-profile-prescription-utter-214635009.jpg",
      skills: ["CassandraDB", "Flask", "React"],
    },
    {
      title: " Geospatial & Temporal Analysis of Traffic Accident Data",
      description:
        "Led a Manhattan crash data study that employed Python for visualization and spatial analysis, conducted data cleaning and feature selection with Pandas, and applied DBSCAN and KMeans clustering to uncover accident patterns and hotspots, significantly boosting data processing efficiency, accuracy, and clustering performance.",
      image:
        "https://www.systematica.net/content/uploads/2018/07/Systematica-Expertise-06-Traffic-Data-Analysis.jpg",
      skills: ["Python", "Pandas", "Seaborn", "DBSCAN", "KMeans"],
    },
    {
      title: "Rock Paper Scissors Gesture Recognition",
      description:
        "Developed a gesture recognition system leveraging template matching with an SVM model to achieve 87% accuracy, enhanced hand detection using background subtraction, ROI definition, and skin masking for a 30% improvement, and explored adaptive thresholding with CNN enhancements to increase model robustness by 25%.",
      image:
        "https://media.istockphoto.com/id/1192618623/vector/hand-game-rock-paper-scissors-gesture-illustration-in-line-art-style-for-popular-hand-game.jpg?s=612x612&w=0&k=20&c=9VsdMuzRgZWr5aPbGMRfSQ8TF1QncVTH8295gNZ6D70=",
      skills: ["OpenCV", "Python", "SVM", "CNN"],
    },
  ];

  return (
    <Container maxW="none" py={10} bg="ghostwhite" id="projects">
      <Heading
        as="h1"
        fontSize={{ base: "1.5rem", md: "4rem" }}
        whiteSpace="nowrap"
        mb={4}
        py={{ base: 2, md: 4 }}
        color="calmpurple"
      >
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
