'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { X, Send } from './Icons'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Disygo AI Robot. How can I help you today? I can assist you with information about our services, projects, or any questions you might have!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Optimized scroll function - only when needed
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }, [])

  // Only scroll when messages change, not on every render
  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 0)
    return () => clearTimeout(timeoutId)
  }, [messages.length, scrollToBottom])

  // Focus input only when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  // Simplified escape handler - no propagation overhead
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Comprehensive modal state management for production
    const originalOverflow = document.body.style.overflow
    const originalPosition = document.body.style.position
    const originalWidth = document.body.style.width
    const originalHeight = document.body.style.height
    const scrollPosition = window.pageYOffset

    // Add modal-open class to disable smooth scrolling
    document.documentElement.classList.add('modal-open')
    document.body.classList.add('modal-open')
    
    // Prevent background scroll with multiple approaches
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    document.body.style.top = `-${scrollPosition}px`

    document.addEventListener('keydown', handleEscape)

    return () => {
      // Restore original state
      document.removeEventListener('keydown', handleEscape)
      
      // Remove modal classes
      document.documentElement.classList.remove('modal-open')
      document.body.classList.remove('modal-open')
      
      // Restore body styles
      document.body.style.overflow = originalOverflow
      document.body.style.position = originalPosition
      document.body.style.width = originalWidth
      document.body.style.height = originalHeight
      document.body.style.top = ''
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition)
    }
  }, [isOpen, onClose])

  const handleSendMessage = useCallback(async () => {
    const message = inputMessage.trim()
    if (!message) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      const aiResponse = await getAIResponse(message, [...messages, userMessage])
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. If the issue persists, feel free to contact our team directly!",
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }, [inputMessage, messages])

  // Azure OpenAI integration
  const getAIResponse = async (userInput: string, conversationHistory: Message[]): Promise<string> => {
    try {
      const openAIMessages = conversationHistory.map(msg => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: openAIMessages
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.message || "I'm sorry, I couldn't generate a response. Please try again."
      
    } catch (error) {
      console.error('API call failed:', error)
      throw error
    }
  }

  // Ultra-fast input change handler - no overhead
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)
  }, [])

  // Ultra-fast key handler - minimal processing
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }, [handleSendMessage])

  // Memoized message list to prevent unnecessary re-renders
  const messageList = useMemo(() => 
    messages.map((message) => (
      <div
        key={message.id}
        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div
          className={`max-w-[70%] p-3 rounded-lg ${
            message.isUser
              ? 'bg-cyan-600 text-white'
              : 'bg-gray-800 border border-gray-700 text-white'
          }`}
        >
          <p className="text-sm">{message.text}</p>
          <span className="text-xs opacity-70 mt-1 block">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    )), [messages])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 modal-container">
      {/* Simplified backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Ultra-lightweight modal */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-black border border-cyan-500 border-opacity-30 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col modal-container">
          {/* Simplified header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500 border-opacity-20 bg-black">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
                🤖
              </div>
              <div>
                <h2 className="text-lg font-bold text-cyan-400">Disygo AI Assistant</h2>
                <p className="text-gray-400 text-xs">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Ultra-fast messages container */}
          <div 
            ref={messagesEndRef}
            className="flex-1 overflow-y-auto p-4 bg-black modal-scroll-container"
            style={{ 
              scrollBehavior: 'auto',
              contain: 'layout style paint'
            }}
            onScroll={(e) => {
              e.stopPropagation()
              e.preventDefault()
            }}
            onWheel={(e) => {
              e.stopPropagation()
            }}
            onTouchMove={(e) => {
              e.stopPropagation()
            }}
          >
            {messageList}
            
            {/* Simplified typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Ultra-lightweight input area */}
          <div className="p-4 border-t border-cyan-500 border-opacity-20 bg-black">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                disabled={isTyping}
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send size={16} />
                <span className="hidden sm:inline text-sm">Send</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Powered by Azure OpenAI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatModal 