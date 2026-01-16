# 📝 TODO App

A modern, full-stack TODO application built with Next.js 16, React 19, and MongoDB. This application provides a clean and intuitive interface for managing your daily tasks with real-time updates and dark mode support.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?style=flat-square&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

-  **Create Tasks** - Add new tasks to your todo list
-  **Delete Tasks** - Remove completed or unwanted tasks


## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Frontend:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Language:** JavaScript (ES6+)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd todo
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
todo/
├── src/
│   └── app/
│       ├── api/
│       │   └── task/
│       │       └── route.js      # API routes for task operations
│       ├── globals.css           # Global styles
│       ├── layout.js             # Root layout component
│       ├── model.js              # MongoDB/Mongoose models
│       └── page.js               # Main page component
├── public/                       # Static assets
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Project dependencies
```

## 🔌 API Routes

The application includes RESTful API endpoints:

- **GET** `/api/task` - Fetch all tasks
- **POST** `/api/task` - Create a new task
- **DELETE** `/api/task` - Delete a task

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by modifying:
- [globals.css](src/app/globals.css) - Global styles and CSS variables
- Tailwind classes in component files

### Database Schema

The TODO model is defined in [model.js](src/app/model.js). You can extend it to include additional fields like:
- Task description
- Due dates
- Priority levels
- Categories

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add your `MONGODB_URI` environment variable
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Other Platforms

This application can also be deployed on:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Any Node.js hosting platform

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Built with ❤️ using Next.js For SPAM**
