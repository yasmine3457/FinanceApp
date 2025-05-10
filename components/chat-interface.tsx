"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { chatWithAI } from "@/app/actions/chat-with-ai"

export function ChatInterface() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Islamic Finance AI assistant. I can help you with questions about AAOIFI standards, accounting treatments, and Islamic finance concepts. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await chatWithAI(userMessage, messages)
      if (response.success) {
        setMessages((prev) => [...prev, { role: "assistant", content: response.reply }])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm sorry, I encountered an error processing your request. Please check your API key or try again later.",
          },
        ])
      }
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, something went wrong. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[600px] border border-gray-200 rounded-md bg-white">
      <div className="flex items-center gap-2 p-3 border-b border-gray-200 bg-emerald-50">
        <Bot className="h-5 w-5 text-emerald-600" />
        <h3 className="font-medium text-emerald-800">Islamic Finance Assistant</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
            <div
              className={`flex items-start gap-2 max-w-[80%] ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`rounded-full p-2 ${
                  message.role === "user" ? "bg-emerald-600" : "bg-gray-200"
                } flex-shrink-0`}
              >
                {message.role === "user" ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-emerald-600" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-start gap-2">
              <div className="rounded-full p-2 bg-gray-200 flex-shrink-0">
                <Loader2 className="h-4 w-4 text-emerald-600 animate-spin" />
              </div>
              <div className="p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200">
                <p>Thinking...</p>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-gray-200">
        <div className="flex gap-2">
          <Textarea
            placeholder="Ask about Islamic finance standards..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[60px] resize-none"
          />
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 self-end"
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
