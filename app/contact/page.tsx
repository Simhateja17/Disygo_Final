'use client'

import React, { useState, useCallback } from 'react'
import { Send, Calendar, Clock, User, Mail, Phone, Globe, DollarSign, FileText, ArrowLeft } from '../../components/Icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { sendContactEmail } from '../../lib/emailService'

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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: '',
    projectDetails: '',
    preferredDate: '',
    preferredTime: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string>('')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const services = [
    'Website Development',
    'App Development', 
    'AI Agents',
    'Digital Marketing',
    'E-Commerce Solutions',
    'AI Customer Services'
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required'
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required'
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred contact date is required'
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred contact time is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Send email using EmailJS
      const emailSent = await sendContactEmail(formData)
      
      if (emailSent) {
        setIsSubmitted(true)
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            country: '',
            service: '',
            budget: '',
            projectDetails: '',
            preferredDate: '',
            preferredTime: ''
          })
          setIsSubmitted(false)
        }, 5000)
      } else {
        setSubmitError('Failed to send email. Please try again or contact us directly at disygo.work@gmail.com')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('An unexpected error occurred. Please try again or contact us directly at disygo.work@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError('')
    }
  }, [errors, submitError])

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        
        <div className="min-h-screen flex items-center justify-center p-4 pt-24">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-cyan-400 font-matrix-heading mb-4">
              FORM SUBMITTED!
            </h1>
            <p className="text-gray-400 font-matrix-body text-lg mb-8">
              Thank you for your interest! We'll get back to you within 24 hours.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-matrix-heading px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span>BACK TO HOME</span>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-matrix-body mb-8"
          >
            <ArrowLeft size={20} />
            <span>BACK TO HOME</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-matrix-heading mb-4">
            <span className="cyan-gradient-text">START YOUR PROJECT</span>
          </h1>
          <p className="text-gray-400 text-lg font-matrix-body max-w-2xl mx-auto">
            Tell us about your project and let's build something amazing together! 
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black border border-cyan-500 border-opacity-30 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-cyan-400 font-matrix-heading flex items-center gap-3">
                  <User size={24} />
                  PERSONAL INFORMATION
                </h2>
                
                {/* Name */}
                <div>
                  <label className="block text-white font-matrix-body mb-3 text-lg">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-matrix-body mb-3 text-lg">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.email}</p>}
                </div>

                {/* Phone & Country */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-matrix-body mb-3 text-lg">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg`}
                        placeholder="+1 (555) 123-4567"
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-matrix-body mb-3 text-lg">
                      Country
                    </label>
                    <div className="relative">
                      <Globe size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg"
                        placeholder="United States"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-cyan-400 font-matrix-heading flex items-center gap-3">
                  <FileText size={24} />
                  PROJECT DETAILS
                </h2>

                {/* Service Selection */}
                <div>
                  <label className="block text-white font-matrix-body mb-3 text-lg">
                    Service <span className="text-red-400">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer group p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="sr-only"
                          disabled={isSubmitting}
                        />
                        <div className={`w-5 h-5 rounded-full border-2 ${formData.service === service ? 'border-cyan-500 bg-cyan-500' : 'border-gray-600'} transition-colors duration-300 group-hover:border-cyan-400`}>
                          {formData.service === service && (
                            <div className="w-3 h-3 bg-white rounded-full m-0.5"></div>
                          )}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-matrix-body text-lg">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.service && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.service}</p>}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-white font-matrix-body mb-3 text-lg">
                    Estimated Budget <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <DollarSign size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className={`w-full bg-gray-900 border ${errors.budget ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg`}
                      placeholder="e.g., $5,000 - $10,000"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.budget && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.budget}</p>}
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-white font-matrix-body mb-3 text-lg">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    rows={6}
                    className={`w-full bg-gray-900 border ${errors.projectDetails ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg resize-none`}
                    placeholder="Describe your project requirements, goals, timeline, and any specific features you need..."
                    disabled={isSubmitting}
                  />
                  {errors.projectDetails && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.projectDetails}</p>}
                </div>
              </div>

              {/* Contact Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-cyan-400 font-matrix-heading flex items-center gap-3">
                  <Calendar size={24} />
                  CONTACT PREFERENCES
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-white font-matrix-body mb-3 text-lg">
                      Preferred Contact Date <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full bg-gray-900 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-12 pr-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg
                          [&::-webkit-datetime-edit]:text-white
                          [&::-webkit-datetime-edit-fields-wrapper]:text-white
                          [&::-webkit-datetime-edit-text]:text-gray-400
                          [&::-webkit-datetime-edit-month-field]:text-white
                          [&::-webkit-datetime-edit-day-field]:text-white
                          [&::-webkit-datetime-edit-year-field]:text-white
                          [&::-webkit-calendar-picker-indicator]:hidden`}
                        disabled={isSubmitting}
                        style={{
                          colorScheme: 'dark'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement;
                          if (dateInput) dateInput.showPicker();
                        }}
                        className="absolute inset-0 cursor-pointer"
                        aria-label="Open date picker"
                      />
                    </div>
                    {errors.preferredDate && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.preferredDate}</p>}
                    <p className="text-gray-500 text-sm mt-1 font-matrix-body">Click anywhere in the field to select a date</p>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-white font-matrix-body mb-3 text-lg">
                      Preferred Contact Time <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Clock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                      <input
                        type="time"
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className={`w-full bg-gray-900 border ${errors.preferredTime ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-12 pr-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 font-matrix-body text-lg
                          [&::-webkit-datetime-edit]:text-white
                          [&::-webkit-datetime-edit-fields-wrapper]:text-white
                          [&::-webkit-datetime-edit-text]:text-gray-400
                          [&::-webkit-datetime-edit-hour-field]:text-white
                          [&::-webkit-datetime-edit-minute-field]:text-white
                          [&::-webkit-datetime-edit-ampm-field]:text-white
                          [&::-webkit-calendar-picker-indicator]:hidden`}
                        disabled={isSubmitting}
                        style={{
                          colorScheme: 'dark'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const timeInput = document.querySelector('input[type="time"]') as HTMLInputElement;
                          if (timeInput) timeInput.showPicker();
                        }}
                        className="absolute inset-0 cursor-pointer"
                        aria-label="Open time picker"
                      />
                    </div>
                    {errors.preferredTime && <p className="text-red-400 text-sm mt-2 font-matrix-body">{errors.preferredTime}</p>}
                    <p className="text-gray-500 text-sm mt-1 font-matrix-body">Click anywhere in the field to select a time</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-800">
                {submitError && (
                  <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-matrix-body text-sm">{submitError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-matrix-heading py-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-[1.02] text-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>SENDING EMAIL...</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>SUBMIT PROJECT REQUEST</span>
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-lg mt-4 text-center font-matrix-body">
                  Your details will be sent directly to our team. We'll review your project and get back to you within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 