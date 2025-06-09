'use client';

import { useEffect, useState } from 'react';
import { IconPlayerPlay, IconTemplate, IconTrash, IconMessage, IconPlayerStop, IconMaximize, IconMinimize } from '@tabler/icons-react';
import { Box, Button, Group, Paper, Select, Stack, Text, Tooltip, Textarea, ActionIcon, Modal } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('./CodeEditor').then(mod => mod.CodeEditor), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
      <Text c="dimmed">Loading editor...</Text>
    </div>
  ),
});

// Judge0 language IDs
const LANGUAGES = [
  { id: 71, name: 'Python (3.8.1)', value: 'python' as LanguageValue },
  { id: 75, name: 'C (Clang 7.0.1)', value: 'c' as LanguageValue },
  { id: 54, name: 'C++ (GCC 9.2.0)', value: 'cpp' as LanguageValue },
  // { id: 63, name: 'JavaScript (Node.js 12.14.0)', value: 'javascript' as LanguageValue },
].map(lang => ({
  ...lang,
  label: lang.name,
}));

type LanguageValue = 'python' | 'cpp' | 'c' | 'javascript';

interface Template {
  value: string;
  label: string;
  code: Record<LanguageValue, string>;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const EXAMPLE_TEMPLATES: Template[] = [
  {
    value: 'default',
    label: 'Instructions',
    code: {
      python: `# Write your Python code here`,
      cpp: `// Write your C++ code here`,
      c: `// Write your C code here`,
      javascript: `// Write your JavaScript code here`
    }
  },
  {
    value: 'solution',
    label: 'Solution',
    code: {
      python: `# Solution template`,
      cpp: `// Solution template`,
      c: `// Solution template`,
      javascript: `// Solution template`
    }
  },
];

export function CodePlayground({ templates }: { templates?: Template[] }) {
  const codeTemplates = templates && Array.isArray(templates) ? templates : EXAMPLE_TEMPLATES;
  const [codeByLanguage, setCodeByLanguage] = useState<Record<LanguageValue, string>>({
    python: codeTemplates[0].code.python,
    cpp: codeTemplates[0].code.cpp,
    c: codeTemplates[0].code.c,
    javascript: codeTemplates[0].code.javascript,
  });
  const [code, setCode] = useState<string>(codeTemplates[0].code[LANGUAGES[0].value as LanguageValue]);
  const [output, setOutput] = useState<string[]>(['Select a language to start coding...']);
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setCodeByLanguage(prev => ({
      ...prev,
      [selectedLanguage.value]: code
    }));
  }, [code, selectedLanguage.value]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsAiLoading(true);

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage], code }),
        signal: controller.signal
      });

      if (!response.ok) throw new Error('Failed to get response');
      
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let assistantMessage = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const text = new TextDecoder().decode(value);
        assistantMessage += text;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'assistant') {
            lastMessage.content = assistantMessage;
          } else {
            newMessages.push({ role: 'assistant', content: assistantMessage });
          }
          return newMessages;
        });
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Response generation stopped.' }]);
      } else {
        console.error('Chat error:', error);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }]);
      }
    } finally {
      setIsAiLoading(false);
      setAbortController(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isAiLoading) {
        handleSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  const stopGeneration = () => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
    }
  };

  const safeBase64Decode = (str: string): string => {
    try {
      // Check if the string is valid base64
      if (!/^[A-Za-z0-9+/=]+$/.test(str)) {
        return str; // Return original string if not valid base64
      }
      return atob(str);
    } catch (error) {
      console.error('Base64 decode error:', error);
      return str; // Return original string if decode fails
    }
  };

  const runCode = async () => {
    if (!isMounted || isLoading || isRunning) return;
    setIsRunning(true);
    setOutput(['▶ Running code...']);

    try {
      // Create submission with proper base64 encoding
      const createResponse = await fetch('https://codesandboxapi.resilientdb.com/submissions?base64_encoded=true&wait=false&fields=*', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        },
        body: JSON.stringify({
          language_id: selectedLanguage.id,
          source_code: btoa(code), // Simple base64 encoding
          base64_encoded: true
        }),
      });

      const { token } = await createResponse.json();

      // Poll for results
      let result;
      do {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const getResponse = await fetch(
          `https://codesandboxapi.resilientdb.com/submissions/${token}?base64_encoded=true&fields=*`,
          {
            headers: {
              'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
              'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
            },
          }
        );
        result = await getResponse.json();
      } while (result.status.id <= 2);

      // Get output with simple base64 decoding
      if (result.stdout) {
        setOutput(prev => [...prev, atob(result.stdout)]);
      }
      if (result.stderr) {
        setOutput(prev => [...prev, `Error: ${atob(result.stderr)}`]);
      }
      if (result.compile_output) {
        setOutput(prev => [...prev, `Compilation: ${atob(result.compile_output)}`]);
      }

      setOutput(prev => [...prev, '✅ Code execution completed']);
    } catch (error: any) {
      setOutput(prev => [...prev, `❌ Error: ${error.message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => setOutput([]);
  const clearConversation = () => setMessages([]);

  if (!isMounted) {
    return (
      <Paper withBorder p="md" radius="md">
        <Stack>
          <Box className="h-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
            <Text c="dimmed">Loading playground...</Text>
          </Box>
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper withBorder p="md" radius="md">
      <Stack>
        <Group justify="space-between" align="center">
          <Group>
            <Select
              size="xs"
              placeholder="Select language"
              data={LANGUAGES}
              value={selectedLanguage.value}
              onChange={(value) => {
                const lang = LANGUAGES.find(l => l.value === value);
                if (lang) {
                  setSelectedLanguage(lang);
                  setCode(codeByLanguage[lang.value as LanguageValue]);
                  setOutput(['Select a language to start coding...']);
                }
              }}
            />
            <Tooltip label="Load example">
              <Select
                size="xs"
                placeholder="Load example"
                data={codeTemplates}
                onChange={(value) => {
                  if (value) {
                    const template = codeTemplates.find((t) => t.value === value);
                    if (template) {
                      setCode(template.code[selectedLanguage.value as LanguageValue]);
                    }
                  }
                }}
                leftSection={<IconTemplate size={14} />}
              />
            </Tooltip>
            <Tooltip label="Ask AI Assistant">
              <ActionIcon 
                variant="light" 
                onClick={() => setShowChat(!showChat)}
                color={showChat ? "blue" : "gray"}
              >
                <IconMessage size={14} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>

        <Box>
          <CodeEditor
            value={code}
            onChange={setCode}
            editable={!isLoading}
            language={selectedLanguage.value}
          />
        </Box>

        {showChat && (
          <>
            <Paper withBorder p="md" radius="md">
              <Stack>
                <Group justify="space-between" align="center">
                  <Text size="sm" fw={500}>AI Assistant</Text>
                  <Group>
                    <Tooltip label={isExpanded ? "Minimize" : "Expand"}>
                      <ActionIcon 
                        variant="light" 
                        onClick={() => setIsExpanded(true)}
                        disabled={isExpanded}
                      >
                        <IconMaximize size={14} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Clear conversation">
                      <ActionIcon 
                        variant="light" 
                        color="red" 
                        onClick={clearConversation}
                        disabled={messages.length === 0}
                      >
                        <IconTrash size={14} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Group>
                <Box style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {[...messages].reverse().map((message, i) => (
                    <Paper key={i} p="xs" mb="xs" bg={message.role === 'user' ? 'dark.6' : 'dark.7'}>
                      <Text size="sm" c={message.role === 'user' ? 'blue' : 'white'}>
                        {message.role === 'user' ? (
                          message.content
                        ) : (
                          <ReactMarkdown
                            components={{
                              code({ node, inline, className, children, ...props }: CodeProps) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                  <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                  >
                                    {String(children).replace(/\n$/, '')}
                                  </SyntaxHighlighter>
                                ) : (
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        )}
                      </Text>
                    </Paper>
                  ))}
                </Box>
                <form onSubmit={handleSubmit}>
                  <Group>
                    <Textarea
                      placeholder="Ask about your code... (Press Enter to send, Shift+Enter for new line)"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      style={{ flex: 1 }}
                      disabled={isAiLoading}
                      autosize
                      minRows={1}
                      maxRows={4}
                    />
                    {isAiLoading ? (
                      <Button 
                        color="red" 
                        onClick={stopGeneration}
                        leftSection={<IconPlayerStop size={14} />}
                      >
                        Stop
                      </Button>
                    ) : (
                      <Button type="submit">
                        Send
                      </Button>
                    )}
                  </Group>
                </form>
              </Stack>
            </Paper>

            <Modal
              opened={isExpanded}
              onClose={() => setIsExpanded(false)}
              size="xl"
              title={
                <Group justify="space-between" w="100%">
                  <Text size="sm" fw={500}>AI Assistant</Text>
                  <Group>
                    <Tooltip label="Minimize">
                      <ActionIcon 
                        variant="light" 
                        onClick={() => setIsExpanded(false)}
                      >
                        <IconMinimize size={14} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Clear conversation">
                      <ActionIcon 
                        variant="light" 
                        color="red" 
                        onClick={clearConversation}
                        disabled={messages.length === 0}
                      >
                        <IconTrash size={14} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Group>
              }
              styles={{
                title: {
                  width: '100%',
                  marginRight: 0,
                },
                body: {
                  height: 'calc(100vh - 200px)',
                  display: 'flex',
                  flexDirection: 'column',
                },
              }}
            >
              <Stack style={{ flex: 1, height: '100%' }}>
                <Box style={{ flex: 1, overflowY: 'auto' }}>
                  {[...messages].reverse().map((message, i) => (
                    <Paper key={i} p="xs" mb="xs" bg={message.role === 'user' ? 'dark.6' : 'dark.7'}>
                      <Text size="sm" c={message.role === 'user' ? 'blue' : 'white'}>
                        {message.role === 'user' ? (
                          message.content
                        ) : (
                          <ReactMarkdown
                            components={{
                              code({ node, inline, className, children, ...props }: CodeProps) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                  <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                  >
                                    {String(children).replace(/\n$/, '')}
                                  </SyntaxHighlighter>
                                ) : (
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        )}
                      </Text>
                    </Paper>
                  ))}
                </Box>
                <form onSubmit={handleSubmit}>
                  <Group>
                    <Textarea
                      placeholder="Ask about your code... (Press Enter to send, Shift+Enter for new line)"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      style={{ flex: 1 }}
                      disabled={isAiLoading}
                      autosize
                      minRows={1}
                      maxRows={4}
                    />
                    {isAiLoading ? (
                      <Button 
                        color="red" 
                        onClick={stopGeneration}
                        leftSection={<IconPlayerStop size={14} />}
                      >
                        Stop
                      </Button>
                    ) : (
                      <Button type="submit">
                        Send
                      </Button>
                    )}
                  </Group>
                </form>
              </Stack>
            </Modal>
          </>
        )}

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