# Edf3ly-E-Commerce

The source code of `Yashry/Edf3ly` e-commerce website. The website built to provide some of organization's services and represent their products with simplicity in mind.

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Endpoints](#endpoints)
1. [License](#license)

## Installation

Make sure to have [Node.js](https://nodejs.org/en/download/) installed on your machine.

1. Clone this repo `$ git clone https://github.com/EnergiaPowered/official-website.git` or using `ssh`.

2. `$ cd Official-website`.

3. Run `$ npm install` to install dependencies and packages in the root.

## Usage

1. Run `$ npm start` to start serving the app, then go to `https://localhost:3000` to view the front and start using the application.

## Endpoints

1. '/' => the main page which redirects you to '/products?categoryId=...'
2. '/products?categoryId=...' => shows the products of the selected category in the products section
3. '/products?categoryId=...&price=m,n' => shows the products of the selected category which its price is > m && < n in the products section
4. '/products?categoryId=...&color=a,b,c,d,....' => shows the products of the selected category which its color is one of a, b, c, d, ... in the products section
5. '/products?categoryId=...&rating=m' => shows the products of the selected category which its rating = m in the products section

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

