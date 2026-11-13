# Production Deployment Guide

## 1. Hosting Architecture Options

The application is designed for flexible deployment:
1. **Option A (Unified Node.js / Express Server):** Recommended for full production environments (VPS, Railway, Render, AWS EC2, or DigitalOcean). The Express server serves both the built static assets from `dist/` and the backend `/api/` endpoints on a single port.
2. **Option B (Decoupled Cloud Hosting):** Frontend deployed on Vercel/Netlify/Cloudflare Pages, while the Express API runs as a microservice or serverless function.

---

## 2. Option A: Unified Deployment (Step-by-Step)

### Prerequisites
- Node.js version 18.0.0 or higher.
- Git repository clone.

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Production Frontend
```bash
npm run build
```
This compiles the TypeScript code and executes Vite bundling, generating optimized static assets in the `dist/` directory.

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `PORT=5000` (or host assigned port) and `NODE_ENV=production`.

### Step 4: Start the Production Server
```bash
npm start
```
The server will bind to the configured port, mount Helmet security headers, rate limiters, serve static frontend pages, and process incoming appointment enquiries to `server/data/enquiries.json`.

---

## 3. Production Process Management (PM2)

For production stability and automatic restarts:
```bash
npm install -g pm2
pm2 start server/index.js --name "cars-energy-app"
pm2 save
pm2 startup
```

---

## 4. Reverse Proxy Setup (Nginx Example)

```nginx
server {
    listen 80;
    server_name carsenergy.co.in www.carsenergy.co.in;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name carsenergy.co.in www.carsenergy.co.in;

    ssl_certificate /etc/letsencrypt/live/carsenergy.co.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/carsenergy.co.in/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
