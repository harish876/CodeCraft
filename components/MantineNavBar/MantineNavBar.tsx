'use client';

import { IconHammer } from '@tabler/icons-react';
import { Anchor, Badge, Box,Group, Text } from '@mantine/core';

import '@mantine/core/styles.css';

import { Navbar } from 'nextra-theme-docs';
import Link from 'next/link';
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
      <Navbar
        logo={
          <Group justify="space-between" align="left">
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
                CodeCraft
              </Text>
              <Badge variant="light" color="orange" size="sm">
                Under Construction
              </Badge>
            </Group>
          </Group>
        }
      />
    </>
  );
};
