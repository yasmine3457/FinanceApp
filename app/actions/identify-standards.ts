"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function identifyStandards(transaction: string) {
  try {
    // Check if API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return {
        success: false,
        error: "OpenAI API key is not configured. Please add your API key in the environment variables.",
      }
    }

    const prompt = `
You are an expert in Islamic Finance and AAOIFI Financial Accounting Standards.
Analyze the following financial transaction and identify the applicable AAOIFI Financial Accounting Standards (FAS):

${transaction}

Your analysis should include:
1. A summary of the key elements of the transaction
2. The primary applicable AAOIFI FAS with probability percentage (e.g., FAS 4: 85% probability)
3. Any secondary applicable standards with lower probabilities
4. Reasoning for each standard's applicability
5. Recommended accounting treatment based on the identified standards

Format your response in a structured way with clear headings and sections.
`

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      temperature: 0.2,
      maxTokens: 2000,
    })

    return { success: true, analysis: text }
  } catch (error) {
    console.error("Error identifying standards:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
