# E-commerce website

---

# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [How To Use](#how-to-use)
- [Project Status](#project-status)
- [Design Decisions](#design-decisions)
- [License](#license)
- [Author](#author)

---

# Description

## a web-based e-commerce application built with react with all the essential features to manage an online shopping business.

# Technologies Used

### engines

- node: ">=6.0.0"

The Project is created with:

- vite: "^4.4.5"
- react: "^18.2.0"
- react-dom: "^18.2.0"
- react-router-dom: "^6.15."
- reduxjs/toolkit: "^1.9.5"
- react-redux: "^8.1.2"
- CSS

---

# Features

- List Products Page with:

  - product name
  - product price
  - view details button

- Product Details Page:

  - product name
  - product price
  - product description
  - add to cart button

- Checkout Page(contains):

  - form for delivery information
  - summary of ordered products

- Checkout Success Page:

---

[Back To The Top](#e-commerce-website)

# Setup

To clone and run this application, you'll need to first have Git and Node.js (npm) installed on your computer. From your command line type the following:

## Clone this repository

$ git clone https://github.com/OsmanNasirdeen/frontend-intern-assessment.git

## navigate into the repository

$ cd ./frontend-intern-assessment/e-commerce-website

## Install dependencies

$ npm install

## Run the app

$ npm run dev

```
$ git clone https://github.com/OsmanNasirdeen/frontend-intern-assessment.git
$ cd ./frontend-intern-assessment/e-commerce-website
$ npm install
$ npm run dev
```

---

# How To Use

## References

### Back-end

---

` server/API to get the project data`:

```javascript
const API = https://dummyjson.com/docs/products
```

[Back To The Top](#e-commerce-website)

## API Reference

```javascript
// get all products from API
const getAllData = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(console.log);
```

---

# Design Decisions

- ## react-router-dom:

  utilizes react-router-dom for managing page navigation across multiple pages. React Router allows us to handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

- ## redux

  - Centralized state management system: Redux state is stored globally in the store. All the components of the entire application can easily access the store data directly. This makes it very easy for a component to get the state it requires. So while developing large, complex applications with many components, the Redux store is highly preferred.

  - Performance Optimizations: unlike React which re-renders all components tree when a component gets updated, Redux store helps in improving the performance by skipping unnecessary re-renders and ensuring that a given component re-renders only when its data has actually changed.

  - Storing long-term data that persists until page refresh

---

# Project Status

completed:false

---

# License

MIT License

Copyright (c) [2023] osman Nasirdeen

---

# Author

- LinkedIn - [Osman Nasirdeen](https://www.linkedin.com/in/osman-nasirdeen/)
- Github - [OsmanNasirdeen](https://github.com/OsmanNasirdeen)

[Back To The Top](#e-commerce-website)
