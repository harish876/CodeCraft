'use client';

import { useEffect, useState } from 'react';
import { python } from '@codemirror/lang-python';
import { IconPlayerPlay, IconTemplate, IconTrash } from '@tabler/icons-react';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import { Box, Button, Group, Paper, Select, Stack, Text, Tooltip } from '@mantine/core';

declare global {
  interface Window {
    loadPyodide: (options: { indexURL: string }) => Promise<any>;
    pyodide: any;
  }
}

const EXAMPLE_TEMPLATES = [
  {
    value: 'default',
    label: 'Code your own stack',
    code: `
      """
        Instructions
      """
    `,
  },
  {
    value: 'stack',
    label: 'Stack Data Structure',
    code: `
      """
        Solution
      """
`,
  },
];

export function PythonPlayground({ templates }) {
  const codeTemplates = templates && Array.isArray(templates) ? templates : EXAMPLE_TEMPLATES;
  const [code, setCode] = useState(codeTemplates[0].code);
  const [output, setOutput] = useState<string[]>(['Initializing Python environment...']);
  const [isLoading, setIsLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const initPython = async () => {
      try {
        if (window.pyodide) {
          setOutput(['✅ Python environment ready']);
          setIsLoading(false);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });

        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });

        await pyodide.runPythonAsync(`
          import sys
          from io import StringIO
          sys.stdout = StringIO()
          sys.stderr = StringIO()
        `);

        window.pyodide = pyodide;
        setOutput(['✅ Python environment ready']);
        setIsLoading(false);
      } catch (error) {
        setOutput((prev) => [
          ...prev,
          `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        ]);
        setIsLoading(false);
      }
    };

    initPython();
  }, []);

  const runCode = async () => {
    if (isLoading || isRunning) {
      return;
    }
    setIsRunning(true);
    setOutput(['▶ Running code...']);

    try {
      // Wrap code in async function if it uses await
      const codeToRun = /\bawait\b/.test(code)
        ? `
async def __run():
${code
  .split('\n')
  .map((line: string) => `    ${line}`)
  .join('\n')}

import asyncio
loop = asyncio.get_event_loop()
loop.run_until_complete(__run())
`
        : code;

      // Run the code and capture output
      await window.pyodide.runPythonAsync(codeToRun);

      // Get output
      const stdout = await window.pyodide.runPythonAsync('sys.stdout.getvalue()');
      if (stdout) {
        setOutput((prev) => [...prev, stdout]);
      }

      setOutput((prev) => [...prev, '✅ Code execution completed']);
    } catch (error: any) {
      setOutput((prev) => [...prev, `❌ Error: ${error.message}`]);
    } finally {
      // Clear buffers
      await window.pyodide.runPythonAsync('sys.stdout.truncate(0)\nsys.stdout.seek(0)');
      setIsRunning(false);
    }
  };

  const clearOutput = () => setOutput([]);

  return (
    <Paper withBorder p="md" radius="md">
      <Stack>
        <Group justify="flex-end" align="center">
          <Tooltip label="Load example">
            <Select
              size="xs"
              placeholder="Load example"
              data={codeTemplates}
              onChange={(value) =>
                value && setCode(codeTemplates.find((t) => t.value === value)?.code || '')
              }
              leftSection={<IconTemplate size={14} />}
            />
          </Tooltip>
        </Group>

        <Box>
          <CodeMirror
            value={code}
            height="600px"
            theme={vscodeDark}
            extensions={[python()]}
            onChange={setCode}
            editable={!isLoading}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              history: true,
              foldGutter: true,
              drawSelection: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              defaultKeymap: true,
              searchKeymap: true,
              historyKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true,
            }}
          />
        </Box>

        <Group justify="space-between">
          <Button
            onClick={runCode}
            loading={isRunning}
            disabled={isLoading}
            color="blue"
            leftSection={<IconPlayerPlay size={14} />}
          >
            {isRunning ? 'Running...' : 'Run'}
          </Button>
          <Button
            onClick={clearOutput}
            variant="light"
            disabled={isLoading || output.length === 0}
            leftSection={<IconTrash size={14} />}
          >
            Clear Output
          </Button>
        </Group>

        <Paper
          withBorder
          p="xs"
          style={{
            backgroundColor: '#1e1e1e',
            color: '#33ff00',
            fontFamily: 'monospace',
            height: '200px',
            overflow: 'auto',
          }}
        >
          {output.map((line, i) => (
            <Text key={i} style={{ whiteSpace: 'pre-wrap', color: 'inherit' }}>
              {line}
            </Text>
          ))}
        </Paper>
      </Stack>
    </Paper>
  );
}
