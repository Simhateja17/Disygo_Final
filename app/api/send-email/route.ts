import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  service: string
  budget: string
  projectDetails: string
  preferredDate: string
  preferredTime: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Use app password for Gmail
      },
    })

    // Email content
    const htmlContent = `
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
            .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
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
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${formData.phone}</div>
              </div>
              
              <div class="field">
                <div class="label">🌍 Country:</div>
                <div class="value">${formData.country || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">🛠️ Service Requested:</div>
                <div class="value">${formData.service}</div>
              </div>
              
              <div class="field">
                <div class="label">💰 Budget:</div>
                <div class="value">${formData.budget}</div>
              </div>
              
              <div class="field">
                <div class="label">📋 Project Details:</div>
                <div class="value">${formData.projectDetails}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Preferred Contact Date:</div>
                <div class="value">${formData.preferredDate}</div>
              </div>
              
              <div class="field">
                <div class="label">🕒 Preferred Contact Time:</div>
                <div class="value">${formData.preferredTime}</div>
              </div>
              
              <div class="field">
                <div class="label">📝 Submission Date:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the DISYGO contact form</p>
              <p>Please respond within 24 hours for the best client experience</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"${formData.name}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'disygo.work@gmail.com',
      subject: `🚀 New Project Request: ${formData.service} - ${formData.name}`,
      html: htmlContent,
      replyTo: formData.email,
    })

    console.log('Email sent: ', info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 