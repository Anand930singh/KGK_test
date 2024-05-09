# KGK_test

This project is demonstrating how to build authentication using Node.js, Express.js, TypeScript, and PostgreSQL.

## Authentication
Bcrypt Hashing: Passwords are hashed using bcrypt before storing in the database. This ensures that passwords are securely stored and cannot be retrieved in plain text.
JWT Tokens: JSON Web Tokens (JWT) are used for authentication. When a user successfully logs in, a JWT token is generated and stored in local storage for some fix amout of time. This token must be included in the Authorization header of subsequent requests to access protected routes.

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed on your local machine.
PostgreSQL installed and running.
TypeScript installed globally (npm install -g typescript).

## Technology Stack
This project was built using the following technologies:

Node.js: Used as the runtime environment for the server-side code.

Express.js: Chosen as the web application framework for handling HTTP requests and routing.

TypeScript: Utilized for adding static typing to JavaScript, enhancing code readability, and catching errors during development.

PostgreSQL: Selected as the relational database management system for storing application data.

TypeORM: Employed as the Object-Relational Mapping (ORM) library for database interactions, providing a convenient way to work with SQL databases using TypeScript/JavaScript.

## Installation
1. Clone the repository.
```bash
git clone https://github.com/Anand930singh/KGK_test.git
```
2. Navigate to the project directory:
```bash
cd KGK_test
```
3. Install Dependencies:
```bash
npm install
```
4. Create .env file
```bash
touch .env
```
5. Add credentials
```bash
HOST=localhost
DBpassword=*****
Database=******
PORT=********
JWTScret=***************************
```
6. Start the server
```bash
npm run start:dev
```

## API Endpoints
/auth/signup - Register a new user


```json
//RequestBody
{
  "email":"xyz@gmail.com",
  "user":"name",
  "password":"Password"
}
```

/auth/sigin - Login with username and password
```json
//RequestBody
{
  "user":"name",
  "password":"Password"
}
```
/auth/signout - Logout 

/dashboard - This route can be acessed only if the user is loggedin

## Running Tests

To run the tests, execute the following command:

```bash
npm test
```

## Architecture
The application follows a layered architecture consisting of:

Presentation Layer: Handled by Express.js routes and controllers.

Business Logic Layer: Managed by service classes responsible for processing requests, interacting with the database, and performing business logic operations.

Data Access Layer: Managed by TypeORM entities and repositories for database interactions.

## Secure Configuration

Environment Variables: Sensible configuration settings such as database credentials and secret keys are stored as environment variables and not hard-coded in the application code, reducing the risk of exposure.


