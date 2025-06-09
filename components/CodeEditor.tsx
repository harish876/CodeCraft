'use client';

import { useEffect, useState } from 'react';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
  editable?: boolean;
}

export function CodeEditor({ value, onChange, language, editable = true }: CodeEditorProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [extensions, setExtensions] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const loadExtension = async () => {
      let extension;
      try {
        switch (language) {
          case 'python':
            const python = await import('@codemirror/lang-python');
            extension = python.python();
            break;
          case 'javascript':
            const javascript = await import('@codemirror/lang-javascript');
            extension = javascript.javascript();
            break;
          case 'cpp':
            const cpp = await import('@codemirror/lang-cpp');
            extension = cpp.cpp();
            break;
          case 'c':
            const c = await import('@codemirror/lang-cpp');
            extension = c.cpp();
            break;
          default:
            extension = [];
        }
        setExtensions([extension]);
      } catch (error) {
        console.error('Failed to load language extension:', error);
        setExtensions([]);
      }
    };

    if (isMounted) {
      loadExtension();
    }
  }, [language, isMounted]);

  if (!isMounted) {
    return (
      <div className="h-[400px] bg-gray-900 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Loading editor...</span>
      </div>
    );
  }

  return (
    <CodeMirror
      value={value}
      height="600px"
      theme={vscodeDark}
      extensions={extensions}
      onChange={onChange}
      editable={editable}
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
  );
} 