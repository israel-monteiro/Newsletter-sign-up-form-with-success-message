# Newsletter Sign-up Form with Success Message

A responsive and accessible newsletter subscription form with real-time email validation and a personalized success state. Built with semantic HTML, CSS custom properties, and TypeScript for a modern user experience.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form to subscribe
- See a success message displaying their email after successfully submitting
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- See the success card state after valid subscription with a dismiss button to return to the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

![Mobile Layout](./design/mobile-design.jpg)

![Desktop Layout](./design/desktop-design.jpg)

![Error state](./design/error-states.jpg)

![Active states](./design/active-states.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/newsletter-sign-up-form-with-success-message-Gg7S6332gO)
- Live Site URL: [Live Demo](https://israel-monteiro.github.io/Newsletter-sign-up-form-with-success-message/)
- GitHub Repository: [Repository](https://github.com/israel-monteiro/Newsletter-sign-up-form-with-success-message.git)

## Features

- Email validation using regular expressions
- Dynamic success message displaying the user's email
- Responsive layout for mobile and desktop
- Form error handling with visual feedback
- Built with TypeScript and semantic HTML


## My process

### Built with

- Semantic HTML5 markup with accessible form structure
- CSS custom properties (variables for colors, spacing, and typography)
- CSS Grid and Flexbox for responsive layouts
- Mobile-first responsive design (375px to 1440px+)
- TypeScript with proper type annotations
- Email validation with regex pattern matching
- BEM naming convention for CSS classes
- Picture element for responsive images
- Form state management without external dependencies

### What I learned

This project deepened my understanding of several frontend concepts:

**Form Validation and Error Handling**: Implementing email validation taught me how to provide real-time feedback to users while maintaining clean code.

```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string) {
    return emailRegex.test(email);
}
```

**State Management with TypeScript**: Managing the transition between the newsletter form and success card states reinforced the importance of proper type safety in DOM manipulation.

```typescript
function showSuccessCard(email: string) {
    if (successCardEmail) successCardEmail.textContent = email;
    successCard?.classList.remove("hidden");
    newsletterCard?.classList.add("hidden");
}
```

**CSS Custom Properties for Maintainability**: Using CSS variables for colors and spacing made the design system scalable and easy to maintain across multiple component files.

```css
:root {
    --colors-red-500: hsl(4, 100%, 67%);
    --colors-blue-800: hsl(234, 29%, 20%);
    --colors-white: hsl(0, 0%, 100%);
}
```

**Responsive Design Architecture**: Building mobile-first and progressively enhancing for larger screens ensured a solid foundation that works on all devices. The Picture element with different SVG sources for mobile and desktop optimized the experience for each breakpoint.

**Input Event Handling**: Understanding the difference between form submission and input events allowed me to clear validation errors dynamically while the user corrects their input.

### Continued development

In future iterations, I'd like to explore:

- Adding smooth transitions and animations when switching between form and success states
- Implementing localStorage to remember subscriptions and prevent duplicate submissions
- Enhancing accessibility with ARIA labels, error descriptions, and keyboard navigation improvements
- Adding a loading state during form submission to simulate backend communication
- Integrating with a real newsletter service API
- Creating unit tests with Jest to validate email validation logic and state transitions
- Implementing a toast notification system for better user feedback

## Author

- Name: Israel Monteiro
- GitHub: [israel-monteiro](https://github.com/israel-monteiro)
- Frontend Mentor: [Israel-Monteiro](https://www.frontendmentor.io/profile/Israel-Monteiro)


