import React from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import { Text, Timeline } from "@chakra-ui/react";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";

export default function MyTimeline() {
  return (
    <Container maxW="container.xl" py={0} minH="100vh" bg="danger">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        p={{ base: 10, md: 16 }}
      >
        <Box flex="1" mr={{ md: 6 }} p={{ base: 3, md: 8 }}>
          <Timeline.Root maxW="100rem">
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuShip />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Software Verification Engineer Intern - MSA
                </Timeline.Title>
                <Timeline.Description>Aug 2024 - Dec 2024</Timeline.Description>
                <Text textStyle="sm">
                  Automated data synchronization from structured datasets to the
                  TestRail platform by processing data with Pandas and updating
                  it via RESTful API, enhancing workflow efficiency by 40%.
                </Text>
                <Text textStyle="sm">
                  Developed a Python-based battery emulator as a Hatch module
                  using Raspberry Pi Pico, enabling Hardware-in-the-Loop (HITL)
                  testing, integrating it into an existing Tox-based test
                  environment, increasing the testing coverage by 25%.
                </Text>
                <Text textStyle="sm">
                  Created deployment scripts with PyInfra for Raspberry Pi
                  setups, automating system configuration, dependency
                  installation, and environment setup, streamlining
                  configuration processes and reducing deployment time by 35%.
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Embedded Software Engineer Intern - MSA
                </Timeline.Title>
                <Timeline.Description>Jan 2024 - May 2024</Timeline.Description>
                <Text textStyle="sm">
                  Engineered a cross-browser dashboard with React and Tailwind
                  to visualize real-time data, including firefighter location
                  and gear status, enhancing user experience by 40% and
                  improving situational awareness.
                </Text>
                <Text textStyle="sm">
                  Developed software for an emergency signal button using RTOS,
                  timers, and device drivers, optimizing real-time communication
                  with interrupt handling, and Bluetooth, reducing response time
                  by 30%.
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuPackage />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Order Delivered</Timeline.Title>
                <Timeline.Description>
                  20th May 2021, 10:30am
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </Box>
      </Flex>
    </Container>
  );
}
