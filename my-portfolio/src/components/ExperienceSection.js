// // src/components/ExperienceSection.js
// import React from "react";
// import { Container, Heading } from "@chakra-ui/react";
// import ExperienceItem from "./ExperienceItem";

// export default function ExperienceSection() {
//   return (
//     <Container maxW="container.md" py={10} minH="100vh" id="experience">
//       <Heading
//         as="h1"
//         fontSize={{ base: "1.5rem", md: "4rem" }}
//         whiteSpace="nowrap"
//         mb={4}
//         py={{ base: 2, md: 4 }}
//         color="calmpurple"
//       >
//         Experience
//       </Heading>

//       <ExperienceItem
//         date="Aug 2024 - Dec 2024"
//         title="Software Verification Engineer"
//         company="MSA Safety Incorporated"
//         description="Automated data synchronization from structured datasets to the TestRail platform via RESTful API, developed a battery emulator for Hardware-in-the-Loop testing on Raspberry Pi Pico within a Tox-based test environment, created deployment scripts for Raspberry Pi setups that automate system configuration, dependency installation, and environment setup."
//         skills={[
//           "REST APIs",
//           "Python",
//           "Tox",
//           "Hatch",
//           "Raspberry Pi",
//           "PyInfra",
//         ]}
//       />

//       <ExperienceItem
//         date="Jan 2024 - May 2024"
//         title="Embedded Software Engineer"
//         company="MSA Safety Incorporated"
//         description="Engineered a cross-browser dashboard with React and Tailwind to visualize real-time data including firefighter location and gear status, developed software for an emergency signal button using RTOS, timers, and device drivers to optimize real-time communication with interrupt handling and Bluetooth connectivity."
//         skills={["C++", "RTOS", "I2C", "React", "Low-level drivers"]}
//       />

//       <ExperienceItem
//         date="Aug 2023 - Dec 2023"
//         title="Teaching Assistant"
//         company="Rochester Institute of Technology"
//         description=" Instructed and mentored 30 students in Advanced Java lab sessions, covering data structures, algorithms, optimization
//  techniques, and time-space complexity analysis, leading to a 20% increase in assessment scores."
//         skills={["Java"]}
//       />

//       <ExperienceItem
//         date="Dec 2019 - May 2022"
//         title="Senior Software Engineer"
//         company="Capgemini"
//         description=" Developed adaptive, schema-driven forms in a web-based application using MVC architecture to enable dynamic database updates based on user input, designed an ETL pipeline for regulatory compliance data that ensured data integrity and adherence to industry standards, engineered a scalable full-stack registration and amendment system through modular UI components and backend logic."
//         skills={["SQL", "MVC", "ETL", "Full-stack", "Agile", "Scrum"]}
//       />
//     </Container>
//   );
// }

// src/components/ExperienceSection.js
import React from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import ExperienceAccordionItem from "./ExperienceAccordionItem";

export default function ExperienceSection() {
  return (
    <Container maxW="none" py={10} minH="100vh" id="experience">
      <Heading
        as="h1"
        fontSize={{ base: "4rem", md: "4rem" }}
        whiteSpace="nowrap"
        mb={4}
        py={{ base: 2, md: 4 }}
        color="lighterjeans"
      >
        Experience
      </Heading>

      <Stack spacing={6} py="4rem">
        <ExperienceAccordionItem
          date="Aug 2024 - Dec 2024"
          title="Software Verification Engineer"
          company="MSA Safety Incorporated"
          description="Automated data synchronization from structured datasets to the TestRail platform via RESTful API, developed a battery emulator for Hardware-in-the-Loop testing on Raspberry Pi Pico within a Tox-based test environment, created deployment scripts for Raspberry Pi setups that automate system configuration, dependency installation, and environment setup."
          skills={[
            "REST APIs",
            "Python",
            "Tox",
            "Hatch",
            "Raspberry Pi",
            "PyInfra",
            "Bitbucket",
          ]}
        />
        <ExperienceAccordionItem
          date="Jan 2024 - May 2024"
          title="Embedded Software Engineer"
          company="MSA Safety Incorporated"
          description="Engineered a cross-browser dashboard with React and Tailwind to visualize real-time data including firefighter location and gear status, developed software for an emergency signal button using RTOS, timers, and device drivers to optimize real-time communication with interrupt handling and Bluetooth connectivity."
          skills={[
            "C++",
            "RTOS",
            "I2C",
            "React",
            "Low-level drivers",
            "Bitbucket",
          ]}
        />
        <ExperienceAccordionItem
          date="Aug 2023 - Dec 2023"
          title="Teaching Assistant"
          company="Rochester Institute of Technology"
          description="Instructed and mentored 30 students in Advanced Java lab sessions, covering data structures, algorithms, optimization techniques, and time-space complexity analysis, leading to a 20% increase in assessment scores."
          skills={["Java", "OOP"]}
        />
        <ExperienceAccordionItem
          date="Dec 2019 - May 2022"
          title="Senior Software Engineer"
          company="Capgemini"
          description="Developed adaptive, schema-driven forms in a web-based application using MVC architecture to enable dynamic database updates based on user input, designed an ETL pipeline for regulatory compliance data that ensured data integrity and adherence to industry standards, engineered a scalable full-stack registration and amendment system through modular UI components and backend logic."
          skills={["SQL", "MVC", "ETL", "Full-stack", "Jira", "Agile", "Scrum"]}
        />
      </Stack>
    </Container>
  );
}
