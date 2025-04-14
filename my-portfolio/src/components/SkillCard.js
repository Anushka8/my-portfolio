import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function SkillCard({ skill, category, isHighlighted }) {
  // Set pastel background colors based on category.
  let bgColor;
  let color;
  switch (category) {
    case "frontend":
      bgColor = "yellow";
      break;
    case "backend":
      bgColor = "lightestjeans";
      color = "white";
      break;
    case "frameworks":
      bgColor = "lighterjeans";
      color = "white";
      break;
    case "CI/CD":
      bgColor = "darkerjeans";
      color = "white";
      break;
    default:
      bgColor = "gray.100";
  }

  // Full opacity when highlighted; lower opacity if not.
  const opacity = isHighlighted ? 1 : 0.4;

  return (
    <Box
      bg={bgColor}
      color={color}
      borderRadius="3rem" // Fully rounded, creating a circle.
      w="100px" // Fixed width for a smaller badge.
      h="50px" // Fixed height for a smaller badge.
      p={2} // Padding inside the badge.
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      opacity={opacity}
      transition="opacity 0.3s ease"
    >
      <Text fontSize="sm" fontWeight="semibold">
        {skill}
      </Text>
    </Box>
  );
}
