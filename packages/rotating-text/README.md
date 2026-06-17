# @bimaputrasena/rotating-text

> Lightweight, accessible animated rotating word component for React 18+.

[![npm version](https://img.shields.io/npm/v/@bimaputrasena/rotating-text.svg)](https://www.npmjs.com/package/@bimaputrasena/rotating-text)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@bimaputrasena/rotating-text)](https://bundlephobia.com/package/@bimaputrasena/rotating-text)
[![license](https://img.shields.io/npm/l/@bimaputrasena/rotating-text.svg)](LICENSE)

**Why this and not another typing/rotating library?**

- ✅ **Zero CLS** — reserves horizontal space with an invisible sizing word
- ✅ **A11y first** — `prefers-reduced-motion`, `aria-live="polite"`, atomic updates
- ✅ **Zero dependencies** — < 2 KB gzipped, no runtime peers besides React
- ✅ **Style agnostic** — works with Tailwind, CSS modules, vanilla CSS
- ✅ **TypeScript native** — full types, no `@types/*` package needed
- ✅ **SSR safe** — `staticOnly` mode for server render & tests

## Install

```bash
npm i @bimaputrasena/rotating-text
# or
pnpm add @bimaputrasena/rotating-text
# or
yarn add @bimaputrasena/rotating-text
```

## Basic usage

```tsx
import { RotatingText } from "@bimaputrasena/rotating-text";

export function Hero() {
  return (
    <h1>
      Make your business{" "}
      <RotatingText
        words={["trusted.", "found.", "understood.", "shareable."]}
      />
    </h1>
  );
}
```

## With Tailwind gradient

```tsx
<RotatingText
  words={["dipercaya.", "dipahami.", "dikembangkan."]}
  className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent"
/>
```

## Props

| Prop          | Type              | Default                   | Description                                                                                                              |
| ------------- | ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `words`       | `string[]`        | **required**              | Words to cycle through.                                                                                                  |
| `intervalMs`  | `number`          | `2100`                    | Time each word is visible.                                                                                               |
| `fadeMs`      | `number`          | `220`                     | Fade transition duration.                                                                                                |
| `sizingWord`  | `string`          | _auto (longest in words)_ | Word used to reserve width — pick longest to prevent layout shift. Auto-detects from `words` if omitted.                 |
| `className`   | `string`          | —                         | Applied to the visible (animated) `<span>`.                                                                              |
| `style`       | `CSSProperties`   | —                         | Applied to the visible (animated) `<span>`.                                                                              |
| `staticOnly`  | `boolean`         | `false`                   | Render `words[0]` and skip animation. Useful for SSR snapshots or unit tests.                                            |

## How it prevents layout shift

The component renders **two** `<span>` elements:

1. An **invisible sizing word** (the longest in your list, or what you pass via `sizingWord`). It reserves horizontal space at the right width.
2. The **visible animated word**, absolutely positioned over the sizing slot.

When the word changes, the visible span stays the same width as the reserved slot — no neighbor text jumps. This is critical for hero headlines where word rotation is most common.

## Reduced motion handling

When the user has `prefers-reduced-motion: reduce` set at the OS level:

- Animation is skipped entirely (no interval, no fade)
- The first word (`words[0]`) renders statically
- `aria-live` still announces — but since text never changes, screen readers stay quiet

## `usePrefersReducedMotion` hook (bonus export)

```tsx
import { usePrefersReducedMotion } from "@bimaputrasena/rotating-text";

function MyComponent() {
  const reduced = usePrefersReducedMotion();
  return <div>{reduced ? "Calm UI" : "Animated UI"}</div>;
}
```

## License

MIT © [Bima Putra Sena](https://appvibe.web.id)
