import emailjs from '@emailjs/browser'

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

export const sendContactEmail = async (formData: FormData): Promise<boolean> => {
  try {
    // EmailJS configuration - you'll need to replace these with your actual values
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

    // Prepare template parameters
    const templateParams = {
      to_email: 'disygo.work@gmail.com', // Your email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      country: formData.country || 'Not specified',
      service: formData.service,
      budget: formData.budget,
      project_details: formData.projectDetails,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      submission_date: new Date().toLocaleString()
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (response.status === 200) {
      console.log('Email sent successfully:', response)
      return true
    } else {
      console.error('Email sending failed:', response)
      return false
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

// Alternative: Using backend API route
export const sendContactEmailViaAPI = async (formData: FormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const result = await response.json()
      return result.success
    } else {
      console.error('API request failed:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('Error sending email via API:', error)
    return false
  }
} 