# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Running locally](#running-locally)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size ✅
- See hover and focus states for all interactive elements on the page ✅
- **Bonus**: Toggle the mobile menu (requires some JavaScript) ✅

### Screenshot

![](./public/images/screenshot.png)

### Links

- Live Site URL: [news-homepage](https://frontendmentor-samuelsilvadev.vercel.app/news-homepage)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### Running locally

First create a `.env.local` file and fill it with the variables described on the `.env.local.example` file.

```bash
  cp .env.local.example .env.local
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### What I learned

- Load images using next/image
- Usage of logging library pino
- Create different layouts per page on next.js  
- Deploy images on aws using its CLI
- Trigger deploy using and event coming from another repository