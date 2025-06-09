import { Extension } from '@codemirror/state';

declare module '@codemirror/lang-javascript' {
  export function javascript(): Extension;
}

declare module '@codemirror/lang-python' {
  export function python(): Extension;
}

declare module '@codemirror/lang-cpp' {
  export function cpp(): Extension;
} 