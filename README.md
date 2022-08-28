# gif-expert
This is a respository of my GifExpertApp

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Type into the input and see render into the page 10 results of the GIF that the user is lookimg for

### Links

- Solution URL: [https://github.com/Omared250/gif-expert]
- Live Site URL: [https://gif-expert-omar.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid Display
- Responsive Design
- React 18
- Custom Hook
- Vite
- Netlify

### What I learned

This proyect was taken form the course of React inside the platform Udemy and the course owns to Fernando Herrera. The idea of this course is 
to understand in a better way react 18 also learn about how deploy a proyect and work with custom hooks and default hooks that react brings.

```js custom hook proud-of-this:
    import { useEffect, useState } from "react";
    import { getGifs } from "../helpers/getGifs"

    export const useFetchGifs = ( category ) => {

      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState( true );
  
      const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
      };

      useEffect(() => {
        getImages();
      }, []);

      return {
        images,
        isLoading,
      }
    }
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)
