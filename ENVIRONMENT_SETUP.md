# 🔐 Environment Variables Setup Guide

## Understanding Environment Files

- `.env.local` - **Local development only** (not deployed)
- `.env.example` - Template for other developers
- **Production** - Set in hosting platform dashboard

## 🚀 Production Deployment Setup

### For Vercel (Recommended):

1. **Deploy Your Code**
   ```bash
   git add .
   git commit -m "Production ready portfolio"
   git push origin main
   ```

2. **Set Environment Variables in Vercel**
   - Go to [vercel.com](https://vercel.com) and import your repository
   - After deployment, go to your project dashboard
   - Click **Settings** → **Environment Variables**
   - Add these variables:

   ```
   Name: RESEND_API_KEY
   Value: re_LKViYZks_BybFa4Bt38bFFeBqUunXvig3
   Environment: Production, Preview, Development
   ```

   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://your-domain.com
   Environment: Production, Preview, Development
   ```

3. **Redeploy**
   - After adding environment variables, trigger a new deployment
   - Go to **Deployments** tab and click **Redeploy**

### For Netlify:

1. **Deploy Your Code**
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Set Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add:
     - `RESEND_API_KEY` = `re_LKViYZks_BybFa4Bt38bFFeBqUunXvig3`
     - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`

3. **Redeploy**
   - Trigger a new build after adding variables

### For Railway:

1. **Connect Repository**
   - Import your GitHub repository
   - Railway will auto-detect Next.js

2. **Set Environment Variables**
   - Go to Variables tab in your project
   - Add:
     - `RESEND_API_KEY` = `re_LKViYZks_BybFa4Bt38bFFeBqUunXvig3`
     - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.railway.app`

### For DigitalOcean App Platform:

1. **Create App**
   - Connect your GitHub repository
   - Choose Node.js environment

2. **Set Environment Variables**
   - In App Settings → Environment Variables
   - Add the same variables as above

## 🔍 How to Verify It's Working:

### 1. Check Environment Variables in Production:
Add this temporary API route to test:

```typescript
// app/api/test-env/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    // Never log the actual API key for security
  })
}
```

Visit `https://your-domain.com/api/test-env` to verify.

### 2. Test Contact Form:
- Submit a test inquiry on your live site
- Check if email arrives at mk7164798@gmail.com
- Check browser console for any errors

### 3. Check Deployment Logs:
- Vercel: Go to Functions tab to see API logs
- Netlify: Check Function logs
- Railway: Check deployment logs

## 🚨 Security Best Practices:

### ✅ DO:
- Set environment variables in hosting platform dashboard
- Use different API keys for development/production if needed
- Keep `.env.local` in `.gitignore`
- Use `.env.example` as a template for team members

### ❌ DON'T:
- Commit `.env.local` to Git
- Hardcode API keys in your code
- Share API keys in public repositories
- Use production keys in development

## 🔄 Environment Variable Flow:

```
Local Development:
.env.local → Your local Next.js app

Production Deployment:
Hosting Platform Environment Variables → Your deployed app
```

## 🛠️ Quick Setup Commands:

### Vercel CLI (Alternative method):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy and set environment variables
vercel
vercel env add RESEND_API_KEY
# Enter: re_LKViYZks_BybFa4Bt38bFFeBqUunXvig3
# Select: Production, Preview, Development

vercel env add NEXT_PUBLIC_SITE_URL
# Enter: https://your-domain.com
```

### Railway CLI:
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway link
railway variables set RESEND_API_KEY=re_LKViYZks_BybFa4Bt38bFFeBqUunXvig3
railway deploy
```

## 📧 Email Testing Checklist:

After deployment:
- [ ] Environment variables are set in hosting platform
- [ ] Site builds and deploys successfully
- [ ] Contact form loads without errors
- [ ] Test email submission works
- [ ] Email arrives at mk7164798@gmail.com
- [ ] File attachments work
- [ ] Rate limiting functions properly

## 🆘 Troubleshooting:

**If emails don't work in production:**

1. **Check Environment Variables**
   - Verify `RESEND_API_KEY` is set correctly
   - Check for typos in the API key

2. **Check API Logs**
   - Look for error messages in hosting platform logs
   - Check Resend dashboard for delivery status

3. **Test API Endpoint**
   - Visit `/api/test-env` to verify environment variables
   - Check browser network tab for API errors

4. **Verify Resend Account**
   - Ensure API key is active in Resend dashboard
   - Check if you've hit rate limits

**Your production environment is now properly configured! 🎉**