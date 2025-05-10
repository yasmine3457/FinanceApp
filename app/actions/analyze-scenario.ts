"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function analyzeScenario(scenario: string) {
  try {
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
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
