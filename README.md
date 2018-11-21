# Developer Portfolio - Test November 2018

Testing the development portfolio using Modular HTML and CSS with Pug and Sass

## Sass File Structure

[A Simple SCSS Architecture, and Best Practice Playbook - by Matthew Elsom](https://matthewelsom.com/blog/simple-scss-playbook.html)

* abstracts - helper functions and non-output code (font-face, global variables, colors, mixins)

* base - global styles including resets, typography, global tags (ex. body, html)

* components - micro level re-usable components that each do one thing only. Each sass file contains all component styles, variations and states

* layouts - unique combinations of components and base styles. Contains component overrides and specific layout attributes

[Best Practices - Sass Guidelines](https://sass-guidelin.es)

## BEM Methodology

Block, Element, Modifier (BEM) is a naming convention for classes in HTML and CSS. The idea is to make the relationship between HTML elements & built components and the CSS more clear.

#### BEM Example

```css
/* BLOCK COMPONENT */
.btn {}

/* ELEMENT THAT DEPENDS ON THE BLOCK */
.btn__price {}

/* MODIFIERS THAT CHANGE THE STYLE OF THE BLOCK */
.btn__price--orange {}
.btn__price--big {}
```


