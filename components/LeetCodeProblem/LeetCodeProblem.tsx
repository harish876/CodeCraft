'use client';

import { Badge, Group, Paper, Stack, Text, Anchor, Checkbox, Button } from '@mantine/core';
import { IconExternalLink, IconVideo } from '@tabler/icons-react';
import { useState } from 'react';

interface LeetCodeProblem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  url: string;
  description: string;
  videoUrl?: string;
}

interface LeetCodeProblemCardProps {
  problem: LeetCodeProblem;
}

interface LeetCodeProblemListProps {
  problems: LeetCodeProblem[];
}

export function LeetCodeProblemCard({ problem }: LeetCodeProblemCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Paper withBorder p={24} radius={12} shadow="sm">
      <Group justify="space-between" mb="md">
        <Group>
          <Badge size="lg" color={getDifficultyColor(problem.difficulty)}>
            {problem.difficulty}
          </Badge>
          <Badge size="lg" variant="light">
            {problem.category}
          </Badge>
        </Group>
        <Group>
          <Checkbox
            checked={isCompleted}
            onChange={(event) => setIsCompleted(event.currentTarget.checked)}
            label="Completed"
            size="md"
          />
          <Group gap="xs">
            {problem.videoUrl && (
              <Button
                variant="light"
                size="sm"
                leftSection={<IconVideo size={14} />}
                component="a"
                href={problem.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Solution
              </Button>
            )}
            <Anchor href={problem.url} target="_blank" rel="noopener noreferrer">
              <Group gap={4}>
                <Text size="sm">View on LeetCode</Text>
                <IconExternalLink size={14} />
              </Group>
            </Anchor>
          </Group>
        </Group>
      </Group>

      <Stack gap="xs">
        <Text fw={500} size="lg">
          {problem.id}. {problem.title}
        </Text>
        <Text size="sm" c="dimmed">
          {problem.description}
        </Text>
      </Stack>
    </Paper>
  );
}

export function LeetCodeProblemList({ problems }: LeetCodeProblemListProps) {
  return (
    <Stack mt={24}>
      {problems.map((problem) => (
        <LeetCodeProblemCard key={problem.id} problem={problem} />
      ))}
    </Stack>
  );
} 