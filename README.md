# Node.js Server

This is a simple Node.js server created using Express.js. To run the server, follow the steps below:

## Prerequisites

* Node.js installed on your machine. You can download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Installation

1. Open your terminal and navigate to the project folder.
2. Run `npm install` or `npm init -y` to install the required packages.
3. Run `npm install express` to install Express.js.
4. Run `npm i nodemon` to install Nodemon.

## Running the Server

1. To run the server, navigate to the project folder and run `npm run start`.
2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

Note: In the `package.json` file, the "start" script is set to `"start": "nodemon app.js"`. This tells Nodemon to watch for changes to the `app.js` file and restart the server automatically when changes are detected.
