'use client';

import { IconHammer } from '@tabler/icons-react';
import { Badge, Box,Group, Text } from '@mantine/core';

import '@mantine/core/styles.css';

import { Navbar } from 'nextra-theme-docs';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';


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
