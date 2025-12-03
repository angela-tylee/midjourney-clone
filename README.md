# Midjourney Clone

A full-stack AI image generation application that allows users to create stunning images using DALL-E AI and share them with the community.

## Features

- Generate AI images using DALL-E API with custom prompts
- Random prompt suggestion feature for inspiration
- Community showcase to browse generated images
- Responsive design with Tailwind CSS
- Share generated images with the community

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **file-saver** - File download functionality

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **OpenAI API** - DALL-E image generation
- **Cloudinary** - Image hosting
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
midjourney-clone/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable components
│   │   ├── constants/     # Constants and configuration
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx   # Community showcase page
│   │   │   └── CreatePost.tsx  # Image generation page
│   │   └── utils/         # Utility functions
│   └── package.json
│
└── server/                 # Backend application
    ├── mongoDB/           # Database configuration and models
    ├── routes/            # API routes
    │   ├── dalleRoutes.js # DALL-E image generation endpoints
    │   └── postRoutes.js  # Post management endpoints
    ├── index.js           # Server entry point
    └── package.json
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB account
- OpenAI API key
- Cloudinary account (for image hosting)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd midjourney-clone
```

### 2. Install dependencies

Install server dependencies:
```bash
cd server
pnpm install
```

Install client dependencies:
```bash
cd ../client
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
MONGODB_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Running the Application

### Start the backend server

```bash
cd server
pnpm start
```

The server will run on `http://localhost:8080`

### Start the frontend development server

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173` (default Vite port)

## API Endpoints

### DALL-E Routes
- `GET /api/v1/dalle` - Test endpoint
- `POST /api/v1/dalle` - Generate image from prompt

### Post Routes
- Routes for managing community posts (to be implemented)

## Usage

1. Navigate to the Create page
2. Enter your name
3. Type a prompt describing the image you want to generate, or click "Surprise Me" for a random prompt
4. Click "Generate" to create the image using DALL-E AI
5. Once satisfied with the result, share it with the community

## Development Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Server
- `pnpm start` - Start server with nodemon (auto-reload)

## Acknowledgments

- DALL-E API by OpenAI for image generation
- Tailwind CSS for styling utilities
- Inspired by JavaScript Mastery [Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney & DALL-E Clone](https://www.youtube.com/watch?v=EyIvuigqDoA)

## Continue development

- Community feature
  - MongoDB for database solutions
  - Cloudinary for image hosting 