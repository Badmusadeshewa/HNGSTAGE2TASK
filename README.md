 ## HNGSTAGE2TASK

## Express.js CRUD API with MongoDB and Mongoose

## Table of Contents

- [1. Prerequisites](#1-prerequisites)
- [2. Project-Structure](#2-project-structure)
- [3. Installation and Usage](#3-installation-and-usage)
- [4. Configuration](#4-configuration)
- [5. Start the server:](#5-start-the-server)
- [6. API Endpoints](#6-api-endpoints)
- [7. Dependencies](#7-dependencies)
- [8. Contributors](#8-contributors)
- [9. License](#9-license)

# 1. Prerequisites
Before you begin, ensure you have met the following requirements:
Node.js and npm installed. Download Node.js

# 2. Project-Structure
This is a simple Express.js application that demonstrates CRUD (Create, Read, Update, Delete) operations for a "Person" entity using MongoDB and Mongoose. The project is structured as follows:

- `controller` folder: Contains the controller logic for creating, updating, getting, and deleting persons.
  - `personcontroler.js`: Defines the controller functions for the API routes.

- `models` folder: Contains the schema and model definition for the "Person" entity.
  - `person.js`: Defines the schema and model for the "Person" entity.

- `route` folder: Contains the route definitions for the Express.js application.
  - `route.js`: Defines the API routes for creating, getting, updating, and deleting persons.

- `index.js`: The main application file where all the folders and dependencies are imported and the Express server is launched.

# 3. Installation and Usage

To run this project locally, follow these steps:

1. Clone the repository: start by cloning this Repository using git. Open your terminal and run

git clone https://github.com/Badmusadeshewa/hngstage2task.git

2. Change to the project directory: Navigate to the project's root directory cd: cd your-app

3. Install Dependencies: Install the project dependencies using npm:
npm install

4. Start the Application: Run npm to start the application
npm start,

npm run
# 4. Configuration
Create a .env file in the project root directory. This may include database connection strings, API keys, or any other sensitive information.
 Example
 
PORT=3000

MONGO_URI=mongodb://localhost:27017/HNGTASK`

# 5. Start the server:
node index.js

The server will be running at http://localhost:3000.

# 6. API Endpoints
1. Create a Person (POST): /api/person

Example request body:
{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}

2. Get All Persons (GET): /api

Get a Specific Person (GET): /api/:id

Example URL: /api

3. Update a Person (PUT/PATCH): /api/:id

Example URL: /api/:id

Example request body:
{
  "name": "Updated Name",
  "age": 35,
  "email": "updatedemail@example.com"
}

4. Delete a Person (DELETE): /api/:id

Example URL: /api/:id

# 7. Dependencies

Express.js: A web application framework for Node.js.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

# 8. Contributors
Badmus Adeshewa

# 9. License
License
