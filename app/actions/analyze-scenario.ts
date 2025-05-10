"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function analyzeScenario(scenario: string) {
  try {
    // Check if API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return {
        success: false,
        error: "OpenAI API key is not configured. Please add your API key in the environment variables.",
      }
    }

    // Validate API key format (basic check)
    if (!apiKey.startsWith("sk-") || apiKey.length < 20) {
      return {
        success: false,
        error:
          "The OpenAI API key appears to be in an incorrect format. It should start with 'sk-' and be at least 20 characters long.",
      }
    }

    const prompt = `
You are an expert in Islamic Finance and AAOIFI Financial Accounting Standards.
Analyze the following Islamic finance scenario and provide detailed accounting guidance:

${scenario}

Your analysis should include:
1. Key elements identified in the scenario
2. Applicable AAOIFI standards (e.g., FAS 28 for Ijarah)
3. Detailed accounting analysis
4. Journal entries required
5. Any calculations needed (e.g., amortization, deferred costs)

Format your response in a structured way with clear headings and explanations.
`

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      temperature: 0.2,
      maxTokens: 2000,
    })

    return { success: true, analysis: text }
  } catch (error) {
    console.error("Error analyzing scenario:", error)

    // Provide more specific error messages based on the error
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return {
          success: false,
          error:
            "There's an issue with your OpenAI API key. Please ensure you've added a valid API key to your environment variables. You can get your API key from https://platform.openai.com/account/api-keys",
        }
      } else if (error.message.includes("rate limit")) {
        return {
          success: false,
          error: "OpenAI rate limit exceeded. Please try again in a few moments.",
        }
      }
    }

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unknown error occurred while analyzing the scenario. Please try again later.",
    }
  }
}
