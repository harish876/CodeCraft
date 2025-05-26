'use client';

import { IconBrandGithub, IconHammer } from '@tabler/icons-react';
import { ActionIcon, Anchor, Badge, Box, Container, Group, Text } from '@mantine/core';

import '@mantine/core/styles.css';

import Link from 'next/Link';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Container
        style={{
          minWidth: '100vw',
          background: "rgba(0,0,0,0.1)",
          position: 'relative',
          overflow: 'hidden',
        }}
        size="xl"
        py="md"
        c="light"
      >
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Box
              style={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd700',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              <IconHammer size={20} />
            </Box>
            <Text size="xl" fw={700} c="light">
              <Link href="/"> CodeCraft </Link>
            </Text>
            <Badge variant="light" color="orange" size="sm">
              Under Construction
            </Badge>
          </Group>

          <Group gap="lg" visibleFrom="sm">
            <Anchor href="/docs" c="#fff" fw={500}>
              Docs
            </Anchor>
            <Anchor href="https://www.boot.dev/playground/py" c="#fff" fw={500}>
              Playground
            </Anchor>
            <ActionIcon variant="subtle" c="#fff" size="lg">
              <Anchor href="https://github.com/harish876/CodeCraft"><IconBrandGithub size={20} /></Anchor>
            </ActionIcon>
            {/* <ColorSchemeControl /> */}
          </Group>
        </Group>
      </Container>
    </>
  );
};
