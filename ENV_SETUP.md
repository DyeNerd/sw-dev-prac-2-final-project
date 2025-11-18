# 🔐 Environment Variables Setup

## Backend Environment Variables (Vercel Dashboard)

Add these in: **Vercel Dashboard → Backend Project → Settings → Environment Variables**

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/inventory?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
NODE_ENV=production
FRONTEND_URL=https://your-frontend-name.vercel.app
```

### How to get MONGO_URI:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<username>`, `<password>`, and add database name `inventory`

### How to generate JWT_SECRET:
Run this in terminal or use a password generator:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Frontend Environment Variables (Vercel Dashboard)

Add this in: **Vercel Dashboard → Frontend Project → Settings → Environment Variables**

```env
VITE_API_URL=https://your-backend-name.vercel.app/api/v1
```

Replace `your-backend-name` with your actual backend Vercel URL.

---

## Local Development (.env files)

### Backend: `backend/config/config.env`
```env
NODE_ENV=development
PORT=3001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/inventory
JWT_SECRET=your-local-jwt-secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
FRONTEND_URL=http://localhost:3000
```

### Frontend: `frontend/.env`
```env
VITE_API_URL=http://localhost:3001/api/v1
```

---

## ⚠️ Important Notes

1. **Never commit .env files to Git** (already in .gitignore)
2. **Use different JWT_SECRET for production and development**
3. **MongoDB Atlas Network Access**: Allow `0.0.0.0/0` for Vercel to connect
4. **CORS**: Make sure FRONTEND_URL matches your frontend URL exactly

