// __tests__/index.test.ts
import request from 'supertest';
import { app } from '../src';
import * as db from '../src/config/db';
import * as authService from '../src/services/auth.service';

// Mock the connectDB function
jest.mock('../src/config/db', () => ({
  connectDB: jest.fn()
}));

// Mock the AuthService module
jest.mock('../src/services/auth.service', () => ({
  AuthService: {
    signUp: jest.fn(),
    signIn: jest.fn()
  }
}));

describe('Index Routes', () => {
  beforeAll(() => {
    (db.connectDB as jest.Mock).mockResolvedValue({});
  });

  it('should sign up a new user', async () => {
    const userData = { 
        "email":"xyz@gmial.com",
        "user":"name",
        "password":"xyz123"
    };
    const expectedResponse = {
        status: 200
      };
      
    // Mock the signUp function to return the expected response
    (authService.AuthService.signUp as jest.Mock).mockResolvedValueOnce(expectedResponse);

    const response = await request(app)
      .post('/auth/signup')
      .send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });

  it('should sign in a user', async () => {
    const userData = {
    "user":"name",
    "password":"xyz123"};
    const expectedResponse = {
        status: 200,
        data: {
          message: "Login Successful",
          token: "your-auth-token",
        },
      };
    
    // Mock the signIn function to return the expected response
    (authService.AuthService.signIn as jest.Mock).mockResolvedValueOnce(expectedResponse);

    const response = await request(app)
      .post('/auth/signin')
      .send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
