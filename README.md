# Todo App Backend

A modern, scalable REST API built with Express.js, TypeScript, and Prisma ORM for managing todo tasks.

## 🚀 Features

- **RESTful API** for task management (CRUD operations)
- **TypeScript** for type safety and better developer experience
- **Prisma ORM** for database management with SQLite
- **Modular Architecture** with separation of concerns
- **Custom Error Handling** with proper HTTP status codes
- **Input Validation** middleware
- **CORS** enabled for frontend integration

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQLite (via Prisma)
- **ORM**: Prisma
- **Validation**: Custom middleware
- **Development**: ts-node, nodemon

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm**

## 🚀 Getting Started

### Installing dependencies

```bash 
run `npm install`
```

### DB Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init
```

### Create .env file

!! Be sure to replace username and password variables in .env DATABASE_URL !!

```bash
# Database
DATABASE_URL="mysql://<username>:<password>@localhost:3306/todoapp"

# Server
PORT=3001
NODE_ENV=development
```

### Start the development server
`npm run dev`

The server will start on http://localhost:3001

#### Development
`npm run dev`        # Start development server with hot reload
`npm run build`        # Build TypeScript to JavaScript
`npm run start`        # Start production server

#### Database
`npm run db:migrate`   # Run database migrations
`npm run db:studio`    # Open Prisma Studio (database GUI)
`npm run db:reset`     # Reset database and run migrations
`npm run db:seed`      # Seed database with sample data

#### Utilities
`npm run type-check`   # Check TypeScript types

#### Project Structure
```bash
backend/
├── src/
│   ├── controllers/     # Request handlers
│   │   └── taskController.ts
│   ├── services/        # Business logic
│   │   └── taskService.ts
│   ├── routes/          # API routes
│   │   └── task.ts
│   ├── middleware/      # Custom middleware
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   ├── errors/          # Custom error classes
│   │   └── customErrors.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   └── server.ts        # Application entry point
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── package.json
└── tsconfig.json
```

🏗️ Architecture
This backend follows a layered architecture pattern:

Routes: Handle HTTP requests and route to appropriate controllers
Controllers: Process requests, call services, and return responses
Services: Contain business logic and interact with the database
Middleware: Handle cross-cutting concerns (validation, error handling)
Errors: Custom error classes for proper error handling
