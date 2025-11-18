# 🚀 Vercel Deployment Guide

This guide will help you deploy both the **Backend** and **Frontend** to Vercel.

---

## 📋 Prerequisites

1. **GitHub Account** (to connect with Vercel)
2. **Vercel Account** (free tier is fine) - [Sign up here](https://vercel.com/signup)
3. **MongoDB Atlas Account** (free tier) - [Sign up here](https://www.mongodb.com/cloud/atlas/register)

---

## 🗄️ Step 1: Setup MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new **Free Cluster**
3. Click **"Connect"** → **"Connect your application"**
4. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster.mongodb.net/`)
5. Replace `<username>` and `<password>` with your database credentials
6. Add your database name at the end: `mongodb+srv://user:pass@cluster.mongodb.net/inventory`

⚠️ **Important**: In Network Access, allow access from anywhere (0.0.0.0/0) for Vercel to connect

---

## 🔧 Step 2: Deploy Backend to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to backend folder
cd backend

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option B: Using Vercel Dashboard

1. Push your code to **GitHub**
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. **Root Directory**: Set to `backend`
6. Click **"Deploy"**

### Configure Environment Variables

In Vercel Dashboard → Your Backend Project → Settings → Environment Variables, add:

| Variable | Value | Example |
|----------|-------|---------|
| `MONGO_URI` | Your MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/inventory` |
| `JWT_SECRET` | Random secret key (use a password generator) | `your-super-secret-jwt-key-123456` |
| `JWT_EXPIRE` | Token expiration | `30d` |
| `JWT_COOKIE_EXPIRE` | Cookie expiration | `30` |
| `NODE_ENV` | Environment | `production` |
| `FRONTEND_URL` | Your frontend URL (will add later) | `https://your-frontend.vercel.app` |

After adding variables, **redeploy** your backend.

✅ **Save your backend URL**: `https://your-backend-name.vercel.app`

---

## 🎨 Step 3: Deploy Frontend to Vercel

### Option A: Using Vercel CLI

```bash
# Navigate to frontend folder
cd frontend

# Create .env file
echo "VITE_API_URL=https://your-backend-name.vercel.app/api/v1" > .env

# Deploy
vercel
```

### Option B: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository (same repo)
4. **Root Directory**: Set to `frontend`
5. Click **"Deploy"**

### Configure Environment Variables

In Vercel Dashboard → Your Frontend Project → Settings → Environment Variables, add:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://your-backend-name.vercel.app/api/v1` |

After adding, **redeploy** your frontend.

---

## 🔄 Step 4: Update Backend CORS

Go back to your **Backend** project in Vercel:

1. Settings → Environment Variables
2. Update `FRONTEND_URL` to your frontend URL: `https://your-frontend-name.vercel.app`
3. **Redeploy** the backend

---

## ✅ Step 5: Test Your Deployment

1. Visit your frontend URL: `https://your-frontend-name.vercel.app`
2. Try to **Register** a new user
3. **Login** with the credentials
4. Create some **Products** (as admin)
5. Create **Stock Requests** (as staff)

---

## 🐛 Troubleshooting

### Issue: CORS Error

**Solution**: Make sure `FRONTEND_URL` in backend matches your frontend URL exactly (no trailing slash)

### Issue: Database Connection Failed

**Solution**: 
- Check MongoDB Atlas Network Access (allow 0.0.0.0/0)
- Verify `MONGO_URI` is correct in backend environment variables
- Make sure to replace `<username>` and `<password>` with actual values

### Issue: JWT Token Error

**Solution**: 
- Verify `JWT_SECRET` is set in backend environment variables
- JWT_SECRET should be a long random string

### Issue: API 404 Error

**Solution**: 
- Check that `VITE_API_URL` in frontend includes `/api/v1` at the end
- Example: `https://your-backend.vercel.app/api/v1`

### Issue: Build Failed

**Backend**: Check that `vercel.json` exists in backend folder
**Frontend**: Check that `vercel.json` exists in frontend folder

---

## 📝 Quick Deployment Checklist

- [ ] MongoDB Atlas cluster created and connection string copied
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables configured (6 variables)
- [ ] Backend deployment successful and URL saved
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variable configured (VITE_API_URL)
- [ ] Backend FRONTEND_URL updated with frontend URL
- [ ] Both services redeployed after configuration
- [ ] Test registration, login, and basic functionality

---

## 🎉 Success!

Your inventory management system should now be live on Vercel!

- **Frontend**: `https://your-frontend-name.vercel.app`
- **Backend API**: `https://your-backend-name.vercel.app`
- **API Docs**: `https://your-backend-name.vercel.app/api-docs`

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Deploying Express Apps to Vercel](https://vercel.com/guides/using-express-with-vercel)

