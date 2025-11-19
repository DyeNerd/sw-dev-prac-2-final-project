# 📦 Inventory Management System

A full-stack inventory management system with user authentication, role-based access control, and stock request management.

## 🎯 Features

### 👥 User Management
- User registration with name, email, tel, role, and password
- Login with JWT authentication
- Two user roles: **Admin** and **Staff**
- Secure logout functionality

### 📦 Product Management
- View products (all users)
- Admin: Add, update, delete products
- Product details: name, SKU, description, category, price, stock quantity, unit, picture

### 📋 Stock Request Management
- **Staff**: Create stock-in/stock-out requests
- **Staff**: View, edit, delete own requests
- **Admin**: View, edit, delete all requests
- Stock-out validation: max 50 items, cannot exceed available stock
- Request tracking with unique IDs

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Notifications**: Sonner

### Backend
- **Runtime**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Security**: Helmet, XSS-Clean, Express Rate Limit, HPP
- **API Documentation**: Swagger UI

## 📁 Project Structure

```
sw-dev-prac-2-final-project/
├── backend/                 # Express.js API
│   ├── config/             # Database & environment config
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Auth middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Entry point
│   ├── package.json
│   └── vercel.json        # Vercel deployment config
│
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── config/        # API configuration
│   │   ├── contexts/      # React contexts (Auth)
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript types
│   │   └── App.tsx        # Main app component
│   ├── package.json
│   └── vercel.json        # Vercel deployment config
│
├── DEPLOYMENT_GUIDE.md    # Step-by-step deployment guide
├── ENV_SETUP.md           # Environment variables reference
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd sw-dev-prac-2-final-project

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment Variables

**Backend**: Create `backend/config/config.env`
```env
NODE_ENV=development
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
FRONTEND_URL=http://localhost:3000
```

**Frontend**: Create `frontend/.env`
```env
REACT_APP_API_URL=http://localhost:3001/api/v1
```

See `ENV_SETUP.md` for detailed instructions.

### 3. Run Development Servers

**Backend** (Terminal 1):
```bash
cd backend
npm run dev
# Server runs on http://localhost:3001
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
# App runs on http://localhost:3000
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api-docs

## 🌐 Deployment

This project is configured for **Vercel** deployment. See `DEPLOYMENT_GUIDE.md` for complete instructions.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy backend
cd backend
vercel

# Deploy frontend
cd ../frontend
vercel
```

Remember to configure environment variables in Vercel Dashboard after deployment!

## 📖 API Documentation

Once the backend is running, visit `/api-docs` for interactive Swagger documentation:
- Local: http://localhost:3001/api-docs
- Production: https://your-backend.vercel.app/api-docs

## 🔒 User Roles & Permissions

| Feature | Guest | Staff | Admin |
|---------|-------|-------|-------|
| View Products | ✅ | ✅ | ✅ |
| Add/Edit/Delete Products | ❌ | ❌ | ✅ |
| Create Stock Requests | ❌ | ✅ | ❌ |
| View Own Requests | ❌ | ✅ | ✅ |
| View All Requests | ❌ | ❌ | ✅ |
| Edit/Delete Own Requests | ❌ | ✅ | ✅ |
| Edit/Delete Any Requests | ❌ | ❌ | ✅ |

## 🧪 Testing

### Create Test Users

**Admin User**:
- Register with role: Admin
- Can manage products and view all requests

**Staff User**:
- Register with role: Staff
- Can create stock requests and view own requests

### Test Scenarios

1. ✅ Register and login as admin
2. ✅ Create several products
3. ✅ Logout and register as staff
4. ✅ Create stock-in request (any quantity)
5. ✅ Create stock-out request (max 50, within stock)
6. ✅ Try stock-out > 50 (should fail)
7. ✅ Edit and delete own request
8. ✅ Login as admin and view all requests

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcrypt
- HTTP security headers (Helmet)
- Rate limiting (100 requests per 10 minutes)
- XSS protection
- NoSQL injection prevention
- HPP (HTTP Parameter Pollution) protection
- CORS configuration

## 📝 License

ISC

## 👨‍💻 Author

TNPTW

## 🤝 Contributing

This is a university project. Contributions are not currently accepted.

## 📞 Support

For issues or questions, please refer to the course materials or contact your instructor.

