# svgLogoCreator

## Description

- The motivation is to learn to create a Node command line application two create a SVG logo.
- The project was built to create a logo with code.
- The problem this project solves is further understanding of Node.
- I learned how to create a logo placeholder logo using Node.js.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Download repo from GitHub repository link:
https://github.com/harleysherman/svgLogoCreator.

2. Install repo in terminal

3. Use npm i to install all packages needed

4. Change code in VS Code when needed

5. Happy coding!

## Usage

Provide instructions and examples for use. Include screenshots as needed.

Here's the link to the video below:
[Video Link]()

Here's the link to the svg example:
[logo.svg](./examples/logo.svg)

Here's the GitHub link where the repo lives:
[svgLogoCreator](https://github.com/harleysherman/svgLogoCreator)

## Credits

I want to thank Leif for helping me understand how to install the inquirer package in package.json and explaining how to connect all the the js files together through inheritance. I want to thank Charles for helping explaining the 'this' usage in the triangle, square, and circle js files.

## License

The license used in this project is MIT License.

---

## Badges

![jest](https://img.shields.io/badge/jest-testing-blue)
![inquirer](https://img.shields.io/badge/inquirer-package-green)
![fs](https://img.shields.io/badge/fs-package-green)

## Features

The features of this project are listed below:
- Prompting the user for logo text, text color, and choice of shape in list form
- From these user choices, an logo template will be created as svg file type that is 300px by 200px.
- Special note: there are no hexadecimal numbers due to the importance of user experience. Most developers and even designers do not know hexadecimal numbers off the top of their head. Most people use hexadecimals with the help of a color picker. In future development, one will be added.

## How to Contribute

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

For any violations of this project, contact me hello@harleysherman.com.

## Tests

If you press enter on the shape choice instead of picking a choice, it will prompt an error to display in the terminal that states you must choose a shape in order to continue.

All shape options are tested to make sure that they do in fact match the user's choice. These tests are located in circle.test.js, shape.test.js, square.test.js, and triangle.test.js.