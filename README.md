# Social-Network-API

This project entails a social network API using Express.js for routing, a MongoDB database, and the Mongoose ODM.

Stack:
 
![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)  ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
 ## Table of Contents:  
[1. Description](#Description)  
[2. Usage](#Usage)  
[3. Mockup](#Walkthrough-Videos)  
[4. Installation](#Installation)  
[5. License](#License)  
[6. Questions](#Questions)  

## Description
This is a set of API for a social network that uses a MongoDB database so that the website can handle large amounts of unstructured data, Express.js for routing, Mongoose ODM, and the moment package to format time stamps.

## Usage

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.  
- Testing API GET routes in Insomnia Core for users and thoughts return the data for each of these routes in a formatted JSON
- Testing API POST, PUT, and DELETE routes in Insomnia Core are able to successfully create, update, and delete users and thoughts

- Testing API POST and DELETE routes in Insomnia Core are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Mockup
[Demonstration Video](https://drive.google.com/file/d/1sMsuGUTi4TUZ8AkVOZQDlkcfGsHR0XV4/view)  
 
## Installation
 
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
```
4. Start the server
```
    $ npm start
```
5. Open Insomnia Core to test API routes

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
Contact Kubi:

[Heidrun's GitHub](https://github.com/kubikubiessa)

[Email](kubikubiessa@gmail.com)

[LinkedIn](https://www.linkedin.com/in/heidrun-kubiessa-ph-d-98110324a/)