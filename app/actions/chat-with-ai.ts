"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export async function chatWithAI(
  userMessage: string,
  previousMessages: Message[],
): Promise<{ success: boolean; reply: string }> {
  try {
    // Check if API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return {
        success: false,
        reply: "OpenAI API key is not configured. Please add your API key in the environment variables.",
      }
    }

    // Format the conversation history for the prompt
    const conversationHistory = previousMessages
      .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n\n")

    const prompt = `
You are an expert assistant specializing in Islamic Finance and AAOIFI Financial Accounting Standards.

Conversation history:
${conversationHistory}

User: ${userMessage}

Provide a helpful, accurate, and concise response about Islamic finance. If the question is about AAOIFI standards, provide specific references to the relevant standards (e.g., FAS 28 for Ijarah). If asked about accounting treatments, explain the proper journal entries and calculations according to AAOIFI standards.
`

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return { success: true, reply: text }
  } catch (error) {
    console.error("Error in chat with AI:", error)
    return {
      success: false,
      reply:
        error instanceof Error ? `Error: ${error.message}` : "An unknown error occurred while processing your message.",
    }
  }
}
