'use client';

import { useState } from 'react';
import { Box, Group, Textarea, Button, Paper, Text, Avatar } from '@mantine/core';
import { IconSend, IconRobot, IconUser } from '@tabler/icons-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

export function AssistantChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
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
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
      <Box style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        {messages.map((message, i) => (
          <Group key={i} align="flex-start" mb="md">
            <Avatar color={message.role === 'user' ? 'gray' : 'blue'} radius="xl">
              {message.role === 'user' ? <IconUser size={16} /> : <IconRobot size={16} />}
            </Avatar>
            <Paper p="md" bg={message.role === 'user' ? 'dark.6' : 'dark.7'} style={{ maxWidth: '80%' }}>
              {message.role === 'user' ? (
                <Text size="sm">{message.content}</Text>
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
            </Paper>
          </Group>
        ))}
      </Box>

      <Paper p="md" style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}>
        <form onSubmit={handleSubmit}>
          <Group>
            <Textarea
              placeholder="Ask any question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1 }}
              disabled={isLoading}
              autosize
              minRows={1}
              maxRows={3}
            />
            <Button 
              type="submit" 
              loading={isLoading}
              disabled={!input.trim()}
              leftSection={<IconSend size={14} />}
            >
              Send
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
} 