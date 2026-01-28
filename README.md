# Student Opportunity Platform

A modern, production-ready full-stack web application connecting students with job opportunities.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### Backend
- **Node.js 18+**
- **Express.js**
- **MongoDB** with Mongoose
- **CORS** enabled

## 📁 Project Structure

```
student-opportunity-platform/
├── client/              # Next.js 14 frontend
│   ├── app/            # App router pages
│   ├── components/     # React components
│   ├── lib/            # Utilities and API client
│   └── public/         # Static assets
│
├── server/             # Express.js backend
│   ├── config/         # Database configuration
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic
│   └── data/           # Fake data for testing
│
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB instance (local or cloud)

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd server
npm install

# Create .env file
cp .env.example .env

# Add your MongoDB connection string to .env
# MONGODB_URI=mongodb://localhost:27017/student-opportunities
# or use MongoDB Atlas connection string

npm run dev
```

The backend will run on `http://localhost:5000`

## 🌐 Pages

- **/** - Homepage with hero section and CTA
- **/listings** - Browse job opportunities
- **/about** - About MORRIS CORP and partners
- **/contact** - Contact form and company details

## 🔌 API Endpoints

- `GET /api/jobs` - Fetch all job listings
- `POST /api/applications` - Submit job application
- `POST /api/messages` - Submit contact form

## 🎨 Design Features

- Clean, modern UI with neon blue accents
- Smooth animations with Framer Motion
- Responsive design for all devices
- Interactive job application modal
- Button micro-interactions

## 📝 Environment Variables

### Server (.env)
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## 🚢 Deployment

The application is ready for deployment to:
- **Frontend**: Vercel, Netlify
- **Backend**: Heroku, Railway, Render
- **Database**: MongoDB Atlas

## 📄 License

MIT License - Feel free to use this project for your needs.

---

**Built with ❤️ for MORRIS CORP**