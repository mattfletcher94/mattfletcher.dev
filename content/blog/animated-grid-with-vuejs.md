---
title: Cool Animated Grid Effect with Vue 3
description: Learn how to animate a grid of items with Vue.js and the Transition Group component.
keywords: Vuejs, Animation, Grid, Transition Group, Tutorial
image: /images/blog-animated-grid.webp
date: '3'
type: Tutorial
tags:
- Tutorial
- UI/UX
- Vue.js
---
# How to Animate a Grid with Vue 3 and the Transition Group Component

*Note: This tutorial is part of my instagram series.* 

<a href="https://www.instagram.com/p/Cd6HT0ws2kS/?utm_source=ig_web_copy_link" target="_blank">See instagram post.<a>

In this tutorial you will learn how to create an animated grid with Vue 3. We will be using the setup script, TypeScript and plain CSS. 

![Animated Grid with Vue.js](/gif/animated-list.gif)

### Vue Script code

```javascript
import { ref } from 'vue'

const items = ref([
  'Vue',
  'JavaScript',
  'CSS',
  'HTML',
  'React',
  'Figma',
  'GraphQL',
  'Bootstrap',
])

const shuffleArray = () => {
  items.value = items.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
```

## Template
Note: I haven't included the code for the icons, but choose your favourite icon library.

```html
<section>
  <TransitionGroup
    name="grid"
    class="grid"
    tag="div"
  >
    <div v-for="item in items" :key="item" class="grid-item">
      <IconVue v-if="item === 'Vue'" />
      <IconJavaScript v-else-if="item === 'JavaScript'" />
      <IconCSS v-else-if="item === 'CSS'" />
      <IconHTML v-else-if="item === 'HTML'" />
      <IconReact v-else-if="item === 'React'" />
      <IconFigma v-else-if="item === 'Figma'" />
      <IconGraphQL v-else-if="item === 'GraphQL'" />
      <IconBootstrap v-else-if="item === 'Bootstrap'" />
    </div>
  </TransitionGroup>
  <button @click="shuffleArray">Shuffle Array</button>
</section>
```
## Styles
```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.grid-item {
  padding: 1.5rem;
  background-color: #374151;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  transition: all 500ms ease;
}

.grid-item svg {
  width: 2.5rem;
  height: 2.5rem;
}

.grid-move {
  background-color: #6B7280!important;
  transform: scale(0.9);
}

button {
  display: block;
  margin-top: 1.5rem;
  background-color: #374151;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  color: #D1D5DB;
  font-weight: 600;
  transition: all 0.5s ease;
}

.btn:active {
  background-color: #6B7280;
}
```