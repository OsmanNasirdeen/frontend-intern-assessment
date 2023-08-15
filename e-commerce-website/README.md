# E-commerce website

---

# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [How To Use](#how-to-use)
- [Project Status](#project-status)
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

## navigate into the project repository

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
