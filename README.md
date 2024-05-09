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

## Installation
1. Clone the repository.
```
git clone https://github.com/Anand930singh/KGK_test.git
```
2. Navigate to the project directory:
```
cd KGK_test
```
3. Install Dependencies:
```
npm install
```
4. Create .env file
```
touch .env
```
5. Add credentials
```
HOST=localhost
DBpassword=*****
Database=******
PORT=********
JWTScret=***************************
```
6. Start the server
```
npm run start:dev
```

## API Endpoints
/auth/signup - Register a new user

/auth/sigin - Login with username and password

/dashboard - This route can be acessed only if the user is loggedin


