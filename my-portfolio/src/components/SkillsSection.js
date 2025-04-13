// import React, { useState } from "react";
// import {
//   Container,
//   Heading,
//   Button,
//   ButtonGroup,
//   Wrap,
//   WrapItem,
// } from "@chakra-ui/react";
// import SkillCard from "./SkillCard";
// import { skillsData } from "./Skills";

// export default function SkillsSection() {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = ["all", "frontend", "backend", "frameworks", "CI/CD"];

//   return (
//     <Container
//       maxW="none"
//       minH="100vh"
//       py={"10rem"}
//       textAlign="center"
//       bg="white_bg"
//     >
//       <Heading
//         as="h1"
//         fontSize={{ base: "1.5rem", md: "3rem" }}
//         whiteSpace="nowrap"
//         mb={4}
//         py={{ base: 2, md: 4 }}
//       >
//         My Skills
//       </Heading>

//       {/* Display all skills but highlight the ones that match */}
//       <Wrap
//         spacing={4}
//         justify="center"
//         px={{ base: "5rem", md: "10rem" }}
//         py={{ base: "2.5rem", md: "5rem" }}
//       >
//         {skillsData.map((skillItem) => {
//           const isHighlighted =
//             selectedCategory === "all" ||
//             skillItem.category === selectedCategory;
//           return (
//             <WrapItem key={skillItem.name}>
//               <SkillCard
//                 skill={skillItem.name}
//                 category={skillItem.category}
//                 isHighlighted={isHighlighted}
//               />
//             </WrapItem>
//           );
//         })}
//       </Wrap>

//       <ButtonGroup spacing={4} mb={6} p={"2rem"}>
//         {categories.map((cat) => (
//           <Button
//             key={cat}
//             colorScheme={selectedCategory === cat ? "teal" : "gray"}
//             variant={selectedCategory === cat ? "solid" : "outline"}
//             onMouseOver={() => setSelectedCategory(cat)}
//           >
//             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//           </Button>
//         ))}
//       </ButtonGroup>
//     </Container>
//   );
// }

import React, { useState } from "react";
import {
  Container,
  Heading,
  Button,
  ButtonGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { skillsData } from "./Skills";

export default function SkillsSection() {
  // "all" means all skills are highlighted
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Remove the "all" button; only these four appear
  const categories = ["frontend", "backend", "frameworks", "CI/CD"];

  return (
    <Container
      maxW="none"
      minH="100vh"
      py="5rem"
      textAlign="center"
      bg="ghostwhite"
      id="skills"
    >
      <Heading
        as="h1"
        fontSize={{ base: "1.5rem", md: "4rem" }}
        whiteSpace="nowrap"
        mb={4}
        py={{ base: 2, md: 4 }}
        color="calmpurple"
      >
        Skills
      </Heading>

      <Wrap
        spacing={4}
        justify="center"
        px={{ base: "5rem", md: "10rem" }}
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
      <ButtonGroup
        spacing={4}
        mb={6}
        p="2rem"
        onMouseLeave={() => setSelectedCategory("all")}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            colorScheme={selectedCategory === cat ? "teal" : "gray"}
            variant={selectedCategory === cat ? "solid" : "outline"}
            onMouseOver={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}
