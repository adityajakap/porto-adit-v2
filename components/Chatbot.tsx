'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m Aditya\'s AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Function to convert basic Markdown to JSX elements
  const formatMessage = (text: string) => {
    // Split by lines to handle line breaks
    const lines = text.split('\n')
    
    return lines.map((line, lineIndex) => {
      // Handle bold text **text**
      const parts = line.split(/(\*\*.*?\*\*)/)
      
      const formattedParts = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Bold text
          return (
            <strong key={`${lineIndex}-${partIndex}`} className="font-semibold text-[#62d7dd]">
              {part.slice(2, -2)}
            </strong>
          )
        } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
          // Italic text
          return (
            <em key={`${lineIndex}-${partIndex}`} className="italic text-white/90">
              {part.slice(1, -1)}
            </em>
          )
        } else if (part.startsWith('`') && part.endsWith('`')) {
          // Code text
          return (
            <code key={`${lineIndex}-${partIndex}`} className="bg-white/10 px-1 py-0.5 rounded text-[#706f6e] text-xs font-mono">
              {part.slice(1, -1)}
            </code>
          )
        }
        return part
      })

      return (
        <div key={lineIndex}>
          {formattedParts}
          {lineIndex < lines.length - 1 && <br />}
        </div>
      )
    })
  }

  const sendToN8N = async (message: string) => {
    try {
      setIsLoading(true)
      
      console.log('Sending message to n8n:', message) // Debug log
      
      const response = await fetch('https://adityajakap.app.n8n.cloud/webhook/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          userId: 'portfolio-visitor'
        })
      })

      console.log('Response status:', response.status) // Debug log
      console.log('Response headers:', response.headers) // Debug log

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Get response text first to debug
      const responseText = await response.text()
      console.log('Raw response:', responseText) // Debug log

      // Check if response is empty
      if (!responseText || responseText.trim().length === 0) {
        return 'Sorry, I received an empty response.'
      }

      // Try to parse as JSON
      let data
      try {
        data = JSON.parse(responseText)
        console.log('Parsed JSON:', data) // Debug log
      } catch (parseError) {
        console.error('JSON parse error:', parseError)
        console.log('Response was not valid JSON, treating as plain text')
        
        // If response is not JSON, treat it as plain text
        return responseText.trim()
      }

      // Extract the actual message from various possible n8n response formats
      let finalResponse = ''
      
      if (data.output) {
        // n8n sometimes wraps in "output"
        finalResponse = data.output
      } else if (data.response) {
        // Standard response field
        finalResponse = data.response
      } else if (data.message) {
        // Alternative message field
        finalResponse = data.message
      } else if (data.text) {
        // Gemini text field
        finalResponse = data.text
      } else if (typeof data === 'string') {
        // Direct string response
        finalResponse = data
      } else {
        // If no recognizable format, stringify and return
        finalResponse = JSON.stringify(data)
      }

      console.log('Final response:', finalResponse) // Debug log
      return finalResponse || 'Sorry, I couldn\'t process that request.'
      
    } catch (error) {
      console.error('Error sending to n8n:', error)
      
      // More specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return 'Sorry, I can\'t connect to the server right now. Please check your internet connection.'
      } else if (error instanceof SyntaxError) {
        return 'Sorry, I received an invalid response from the server.'
      } else {
        return 'Sorry, something went wrong. Please try again later.'
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage('')

    // Send to n8n and get response
    const botResponse = await sendToN8N(currentMessage)

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: botResponse,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-[#62d7dd] to-[#706f6e] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ${
          isOpen ? 'rotate-45' : 'hover:shadow-[#62d7dd]/25'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#62d7dd]/20 to-[#706f6e]/20 border-b border-white/20 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#62d7dd] to-[#706f6e] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">AJ</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">AI Assistant</h4>
                <p className="text-white/60 text-xs">Powered by n8n</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#62d7dd] to-[#706f6e] text-white'
                      : 'bg-white/10 border border-white/20 text-white'
                  }`}
                >
                  {message.sender === 'bot' ? formatMessage(message.content) : message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-2xl text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#62d7dd] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#706f6e] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#62d7dd] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-white/20 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#62d7dd]/50 text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-[#62d7dd] to-[#706f6e] text-white p-2 rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}