import React from "react";
import { Heading, Container } from "@chakra-ui/react";

export default function MyTimeline() {
  return (
    <Container maxW="none" py={0} minH="100vh" bg="danger">
      <Heading as="h1" size="lg" mb={8}>
        Skills
      </Heading>
    </Container>
  );
}
