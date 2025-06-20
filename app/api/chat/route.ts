import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'

// Configure Azure OpenAI
const openai = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
  defaultQuery: { 'api-version': '2024-02-15-preview' },
  defaultHeaders: {
    'api-key': process.env.AZURE_OPENAI_API_KEY,
  },
})

export async function POST(req: NextRequest) {
  try {
    // Debug logging
    console.log('Azure OpenAI Configuration:')
    console.log('- Endpoint:', process.env.AZURE_OPENAI_ENDPOINT)
    console.log('- Deployment:', process.env.AZURE_OPENAI_DEPLOYMENT_NAME)
    console.log('- API Key exists:', !!process.env.AZURE_OPENAI_API_KEY)

    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // System prompt to define the AI assistant's personality and knowledge
    const systemMessage = {
      role: 'system',
      content: `You are the Disygo AI Assistant, a helpful and knowledgeable chatbot representing Disygo, a cutting-edge digital solutions company. 

Key information about Disygo:
- We specialize in web development, AI integration, custom software development, and digital transformation
- We've completed 18+ projects with 98% client satisfaction
- Our team is experienced in modern technologies including React, Next.js, AI/ML, and more
- We provide services like custom software development, AI solutions, web applications, mobile apps, and digital consulting

Your personality:
- Professional yet friendly and approachable
- Technical but explain things in an understandable way
- Enthusiastic about technology and innovation
- Helpful and solution-oriented
- Always willing to provide information about Disygo's services

Guidelines:
- Keep responses concise but informative (usually 1-3 sentences)
- If asked about services, provide specific details about what Disygo offers
- If asked technical questions, provide helpful insights
- If unsure about specific company details, acknowledge it and offer to connect them with the team
- Encourage potential clients to reach out for consultations
- Be engaging and maintain the conversation flow`
    }

    const completion = await openai.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4.1-nano',
      messages: [systemMessage, ...messages],
      max_tokens: 500,
      temperature: 0.7,
      stream: false,
    })

    const assistantMessage = completion.choices[0]?.message?.content

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'No response generated' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: assistantMessage,
      usage: completion.usage
    })

  } catch (error) {
    console.error('Azure OpenAI API error:', error)
    
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message.includes('401')) {
        return NextResponse.json(
          { error: 'Authentication failed. Please check your API key.' },
          { status: 401 }
        )
      }
      if (error.message.includes('429')) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to get AI response. Please try again.' },
      { status: 500 }
    )
  }
} 