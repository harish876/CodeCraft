'use client';

import Link from 'next/link';
import {  IconCode, IconHammer  } from '@tabler/icons-react';
import { Button, Text, Title, Container, Group, Stack, Box, Code, Flex } from '@mantine/core';

const features = [
  "Code Generation",
  "AI-Powered",
  "Template Library",
  "Real-time Collaboration",
  "Version Control",
  "Custom Workflows",
  "Smart Suggestions",
  "Multi-Language",
  "Code Generation",
  "AI-Powered",
  "Template Library",
  "Real-time Collaboration",
]

export function LandingPage() {
  return (
    <Box
      style={{
        minHeight: "95vh",
        background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="xl" py={80} my={80}>
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={60}>
          <Box flex={1}>
            <Stack gap="xl">
              <Text size="lg" c="dark" lh={1.4} maw={500}>
                AI-powered development platform with intelligent code generation, collaborative workflows, and
                enterprise-grade tooling for modern development teams
              </Text>

              <Box>
                <Text size="xl" c="dark" fw={500} mb="xs">
                  Build better software faster with
                </Text>
                <Title
                  order={1}
                  size="8rem"
                  fw={900}
                  c="dark"
                  style={{
                    lineHeight: 0.8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  CodeCraft
                </Title>
              </Box>

              <Group gap="md">
                <Button
                  size="lg"
                  variant="white"
                  c="dark"
                  fw={600}
                  leftSection={<IconCode size={20} />}
                  style={{
                    border: "2px solid #000",
                    borderRadius: "25px",
                  }}
                >
                  <Link href="/docs">Start Building</Link>
                </Button>
                <Button
                  size="lg"
                  variant="filled"
                  color="dark"
                  fw={600}
                  style={{
                    borderRadius: "25px",
                  }}
                >
                  Watch Demo
                </Button>
              </Group>

              <Code
                block
                p="md"
                style={{
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "#ffd700",
                  borderRadius: "8px",
                  fontFamily: "Monaco, Consolas, monospace",
                }}
              >
                $ npx create-codecraft-app my-project
              </Code>
            </Stack>
          </Box>

          <Box flex={1} style={{ textAlign: "center" }}>
            <Box
              style={{
                width: "400px",
                height: "400px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#ffd700",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    transform: "rotate(-10deg)",
                  }}
                >
                  {"<Component />"}
                </Box>

                <Box
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "30px",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#ffd700",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    transform: "rotate(15deg)",
                  }}
                >
                  "const ai = true"
                </Box>

                <Box
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "40px",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#ffd700",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    transform: "rotate(8deg)",
                  }}
                >
                  {"function() {}"}
                </Box>

                {/* Central Icon */}
                <Box
                  style={{
                    width: "120px",
                    height: "120px",
                    background: "linear-gradient(135deg, #000 0%, #333 100%)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffd700",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    marginBottom: "20px",
                  }}
                >
                  <IconHammer size={60} />
                </Box>

                <Text size="lg" fw={700} c="dark">
                  Craft. Code. Create.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>


      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#000",
          color: "#fff",
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "40px",
            animation: "scroll 30s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...features, ...features].map((feature, index) => (
            <Group key={index} gap="xs">
              <Text size="sm" fw={500}>
                {feature}
              </Text>
              <Text size="sm" c="dimmed">
                •
              </Text>
            </Group>
          ))}
        </Box>
      </Box>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  )
}

