# Converter [Number to Word conversion]

[![Build Status](https://travis-ci.org/priyanjitdey94/Converter.svg?branch=master)](https://travis-ci.org/priyanjitdey94/Converter)
[![Release](https://img.shields.io/badge/Release-0.0.1-blue.svg)](https://github.com/priyanjitdey94/Converter/releases)
[![License](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

**Converter** is an application written in JavaScript that recognizes special numeric patterns in a text and converts it to string format. For example: 'I am 5 years old.' is converted to 'I am five years old'.

## Scope
Numeric string of the following format are only accepted for conversion:
* Number without any prefix or suffix. '1','12323'
* Decimal. Format - X+.X+ where X is a digit in [0,9].
* Fraction. Format - X+/X+ where X is a digit in [0,9].
* Time. Format - [hh:mm] or [hh:mm:ss]
* Date. Format - [dd/mm/yy] or [dd/mm/yyyy]
* Phone. Format - [XXXXXXXXXXXX] or [+XXXXXXXXXXXX] where X is a digit in [0,9].
* Ordinals. Format - X+(st/nd/rd/th).

**P.S.** 'X+' mean one or more digits.

## Getting Started
This instructions will help you to setup this repository in your local machine for your own development, tweaking and testing purposes. ;)

### Prerequisites
For setting up this project , you need `npm ` or `yarn` in your local machine. Your can setup `npm` using the following command
```
sudo apt-get install npm
```
For `yarn`,
```
sudo apt-get install yarn
```
## Installing
Download and unzip this repository in your local machine. `cd` into the repository and run `npm install` or `yarn` for installing the neccessary packages required for development and testing of this project.
## Running the test
After installing the neccessary packages you can run test cases using the following command
```
npm run test
```
or
```
yarn run test
```
This project uses **Jest** for unit testing.

## Build with
`Webpack` is used as a module bundler for building this project.
`Babel` is used for converting the ES6 code to ES5.

## Contribution and Coding Guidelines
* Follow ES6 standards for writing JS code.
* Class names should start with Capital letters
* Object names should contain class name as prefix followed by 'Obj'. For example, object of class 'Temp' should be 'tempObj'
* Use eslint
* Create proper and clear documentation of the code written by you.
* Create a pull request to the development branch mentioning any new feature addition and/or bug fix as title.

## License
This project is under the [MIT](https://opensource.org/licenses/MIT) license.
