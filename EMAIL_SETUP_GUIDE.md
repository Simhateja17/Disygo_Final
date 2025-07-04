# 📧 Email Setup Guide for Contact Form

Your contact form is now configured to send emails! You have **two options** to choose from:

## 🚀 Option 1: EmailJS (Recommended - No Backend Required)

### ✅ **Advantages:**
- ✅ **Easy Setup** - No backend configuration needed
- ✅ **Free Tier** - 200 emails/month free
- ✅ **Frontend Only** - Works with static hosting
- ✅ **Quick Implementation** - Ready in minutes

### 📋 **Setup Steps:**

#### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### 2. Create Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Easy setup with your existing account
   - **Outlook**: If you use Microsoft email
   - **Yahoo**: If you use Yahoo email
4. Follow the connection wizard
5. **Copy the Service ID** (e.g., `service_abc123`)   service_q0urfdz

#### 3. Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```html
**Subject:** 🚀 New Project Request: {{service}} - {{from_name}}

**HTML Content:**
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00FFFF, #0080FF); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: white; padding: 10px; border-left: 4px solid #00FFFF; margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 New Project Request - DISYGO</h1>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">👤 Client Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="label">🌍 Country:</div>
                <div class="value">{{country}}</div>
            </div>
            
            <div class="field">
                <div class="label">🛠️ Service:</div>
                <div class="value">{{service}}</div>
            </div>
            
            <div class="field">
                <div class="label">💰 Budget:</div>
                <div class="value">{{budget}}</div>
            </div>
            
            <div class="field">
                <div class="label">📋 Project Details:</div>
                <div class="value">{{project_details}}</div>
            </div>
            
            <div class="field">
                <div class="label">📅 Preferred Date:</div>
                <div class="value">{{preferred_date}}</div>
            </div>
            
            <div class="field">
                <div class="label">🕒 Preferred Time:</div>
                <div class="value">{{preferred_time}}</div>
            </div>
            
            <div class="field">
                <div class="label">📝 Submitted:</div>
                <div class="value">{{submission_date}}</div>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Set **"To Email"** to: `disygo.work@gmail.com`
5. **Copy the Template ID** (e.g., `template_xyz789`)   template_gficlkh

#### 4. Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (e.g., `user_abc123def456`)  OSg3slHpnNkZ3GYjn

#### 5. Configure Environment Variables
1. Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace with your actual values from EmailJS dashboard

#### 6. Test the Form
1. Run your application: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email (disygo.work@gmail.com)

---

## 🛠️ Option 2: Backend API with Nodemailer (Advanced)

### ✅ **Advantages:**
- ✅ **More Control** - Full server-side control
- ✅ **Better Security** - Credentials not exposed
- ✅ **Unlimited Emails** - No service limits
- ✅ **Custom Logic** - Add database storage, etc.

### 📋 **Setup Steps:**

#### 1. Gmail App Password Setup
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Enable 2-Step Verification if not already enabled
4. Go to **App passwords**
5. Generate an app password for "Mail"
6. **Copy the 16-character password**

#### 2. Configure Environment Variables
Create `.env.local`:

```bash
# Backend Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
TO_EMAIL=disygo.work@gmail.com
```

#### 3. Update Contact Form
In `app/contact/page.tsx`, change the import to use API:

```typescript
// Change this line:
import { sendContactEmail } from '../../lib/emailService'

// To use the API instead:
import { sendContactEmailViaAPI } from '../../lib/emailService'

// And change this line in handleSubmit:
const emailSent = await sendContactEmailViaAPI(formData)
```

#### 4. Test the API
1. Run: `npm run dev`
2. Test the contact form
3. Check your email

---

## 🔧 **Troubleshooting**

### EmailJS Issues:
- **Check Console**: Look for error messages in browser console
- **Verify IDs**: Ensure Service ID, Template ID, and Public Key are correct
- **Template Variables**: Make sure template uses correct variable names
- **Email Limits**: Free tier has 200 emails/month

### Backend API Issues:
- **Gmail Security**: Make sure you're using an App Password, not your regular password
- **Firewall**: Check if your hosting provider allows SMTP connections
- **Environment Variables**: Verify all env vars are set correctly
- **Console Logs**: Check server logs for detailed error messages

### General Issues:
- **Spam Folder**: Check if emails are going to spam
- **Email Validation**: Ensure form validation is working
- **Network**: Check internet connection and firewall settings

---

## 📋 **Which Option Should I Choose?**

### Choose **EmailJS** if:
- ✅ You want quick setup (5 minutes)
- ✅ You're using static hosting (Vercel, Netlify)
- ✅ You don't need advanced email features
- ✅ 200 emails/month is sufficient

### Choose **Backend API** if:
- ✅ You need unlimited emails
- ✅ You want to store form submissions in a database
- ✅ You need advanced email customization
- ✅ You prefer server-side processing

---

## 🎯 **Current Status**

Your contact form is **ready to use** with EmailJS! Just:

1. ✅ **Complete EmailJS setup** (follow steps above)
2. ✅ **Add environment variables**
3. ✅ **Test the form**

The form will send beautifully formatted emails to `disygo.work@gmail.com` with all the project details! 🚀

---

## 📧 **Email Template Preview**

When someone submits the form, you'll receive an email like this:

**Subject:** 🚀 New Project Request: Website Development - John Doe

**Content:** Beautifully formatted HTML email with:
- 👤 Client details (name, email, phone, country)
- 🛠️ Service requested
- 💰 Budget information
- 📋 Detailed project requirements
- 📅 Preferred contact date and time
- 📝 Submission timestamp

Perfect for quickly understanding and responding to client inquiries! 🎉 