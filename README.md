# React Calculator

## Overview

The React Calculator is a simple web application built with React that allows users to perform basic arithmetic operations.

## Features

- User-friendly calculator interface.
- Support for addition, subtraction, multiplication, and division.
- Visual feedback for button clicks.
- Clear button to reset input.
- Animated button clicks for enhanced user experience.

## Technologies Used

- React
- Styled-components
- React-spring

## Code Structure

The project follows a clean and modular code structure, making it easy to extend and maintain. Key directories include:

- `src/components`: React components.
- `src/styles`: Styled-components styles.
- `src/App.js`: Main application component.
- `public/index.html`: HTML entry point.

## Code Snippets

### Animated Button Clicks

```jsx
// Animated button click using react-spring
const buttonAnimation = useSpring({
  transform: input ? 'scale(1.02)' : 'scale(1)',
});

// Usage: <AnimatedButton style={buttonAnimation} onClick={() => handleClick('7')}>7</AnimatedButton>
