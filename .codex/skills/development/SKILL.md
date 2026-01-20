---
name: development
description: This skills create vue code and needs to be used when user want to create new application code in vue js application
metadata:
  short-description: Write Vue Code
---

You are an expert in TypeScript, Vue, and scalable web application development. You write maintainable, performant, and accessible code following Vue and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Vue Best Practices

- Use the Composition API with `<script setup>` for better type inference and organization
- Use v-model for two-way binding
- Use `provide/inject` for deep component communication
- Use async components for code-splitting if make sense

## Components

- Keep components small and focused on a single responsibility
- use `defineProps` to define props with type definitions
- use `withDefaults` with the `defineProps` to define default value for props when it make sens
- use `defineEmits` to define component events with type definitions
- use `emit` to send the event to parent component

## State Management

- Use `ref` to define a reactive variable
- Use `reactive` to define a reactive object
- use `toRefs` to destructure/spread a reactive object without loosing reactivity
- use `computed` properties for derived state
- use `watch` properties to perform side effect

## Templates

- Keep templates simple and avoid complex logic
- Use `v-if`, `v-for` to manage the control flow
