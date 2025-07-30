export const apiDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Mock API Documentation',
    version: '1.0.0',
    description: 'Documentation for the mock API endpoints',
  },
  paths: {
    '/api/users': {
      get: {
        summary: 'Get all users',
        responses: {
          '200': {
            description: 'List of users',
            content: {
              'application/json': {
                example: {
                  data: [{
                    id: 'uuid',
                    name: 'Alice Martin',
                    email: 'alice.martin@example.com',
                    createdAt: '2025-01-01T00:00:00.000Z',
                    updatedAt: '2025-01-01T00:00:00.000Z',
                  }],
                  message: 'Success',
                  timestamp: '2025-01-01T00:00:00.000Z',
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'email'],
                properties: {
                  name: { type: 'string' },
                  email: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'User created successfully',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Product: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          price: { type: 'number' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Order: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          userId: { type: 'string' },
          products: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                productId: { type: 'string' },
                quantity: { type: 'number' },
              },
            },
          },
          total: { type: 'number' },
          status: {
            type: 'string',
            enum: ['pending', 'confirmed', 'cancelled'],
          },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
    },
  },
};