"use client"

import { useState } from "react"
import { Bot, Loader2, AlertTriangle } from "lucide-react"
import { identifyStandards } from "@/app/actions/identify-standards"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function StandardsIdentifier({ exampleTransaction = "" }) {
  const [transaction, setTransaction] = useState(exampleTransaction)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleIdentify = async () => {
    if (!transaction.trim()) {
      setError("Please enter a transaction to analyze")
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      const result = await identifyStandards(transaction)

      if (result.success && result.analysis) {
        setAnalysis(result.analysis)
      } else {
        setError(result.error || "Failed to identify standards")
      }
    } catch (err) {
      console.error("Error in StandardsIdentifier:", err)
      setError("An unexpected error occurred during analysis. Please try again later.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const formatAnalysis = (text: string) => {
    // Split by headings (lines that end with a colon)
    const sections = text.split(/^([^:\n]+:)$/m)

    if (sections.length <= 1) {
      // If no clear sections, just return the text with paragraphs
      return text.split("\n\n").map((paragraph, i) => (
        <p key={i} className="mb-3">
          {paragraph}
        </p>
      ))
    }

    return sections.map((section, i) => {
      if (section.trim().endsWith(":")) {
        // This is a heading
        return (
          <h4 key={i} className="text-emerald-800 font-medium mt-4 mb-2">
            {section}
          </h4>
        )
      } else if (section.trim()) {
        // This is content
        return (
          <div key={i} className="mb-4">
            {section.split("\n\n").map((paragraph, j) => (
              <p key={j} className="text-gray-700 mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        )
      }
      return null
    })
  }

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin mb-4" />
        <p className="text-gray-700 text-lg">Identifying applicable AAOIFI standards...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a moment as we analyze your transaction</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <AlertTitle>Analysis Error</AlertTitle>
          <AlertDescription className="mt-2">{error}</AlertDescription>
        </Alert>

        {error.includes("API key") && (
          <Alert className="bg-blue-50 border-blue-200 text-blue-800 mb-4">
            <AlertTitle>API Key Instructions</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-2">To fix this issue:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  Go to{" "}
                  <a
                    href="https://platform.openai.com/account/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    OpenAI API Keys
                  </a>
                </li>
                <li>Create a new API key if you don't have one</li>
                <li>Copy your API key</li>
                <li>Add it to your project's environment variables as OPENAI_API_KEY</li>
              </ol>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <Textarea
            placeholder="Enter your financial transaction details here..."
            className="min-h-[200px]"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
          />
          <div className="flex justify-end">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleIdentify}
              disabled={!transaction.trim()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your financial transaction details here..."
          className="min-h-[200px]"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
        />
        <div className="flex justify-end">
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={handleIdentify}
            disabled={!transaction.trim()}
          >
            Identify Standards
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-md p-4">
        <div className="flex items-start gap-3 mb-3">
          <Bot className="h-5 w-5 text-emerald-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800">AI Analysis</h3>
            <p className="text-gray-600 text-sm">Analysis of applicable AAOIFI standards</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-md p-4">{formatAnalysis(analysis)}</div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => {
              setAnalysis(null)
              setError(null)
            }}
          >
            Analyze Another Transaction
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Save Analysis</Button>
        </div>
      </div>
    </div>
  )
}
