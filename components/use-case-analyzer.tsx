"use client"

import { useState } from "react"
import { Bot, Loader2 } from "lucide-react"
import { analyzeScenario } from "@/app/actions/analyze-scenario"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function UseCaseAnalyzer() {
  const [scenario, setScenario] = useState("")
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!scenario.trim()) {
      setError("Please enter a scenario to analyze")
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      const result = await analyzeScenario(scenario)

      if (result.success && result.analysis) {
        setAnalysis(result.analysis)
      } else {
        setError(result.error || "Failed to analyze scenario")
      }
    } catch (err) {
      setError("An error occurred during analysis")
      console.error(err)
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
        <p className="text-gray-700 text-lg">Analyzing your Islamic finance scenario...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a moment as we apply AAOIFI standards</p>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertTitle>Analysis Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
        <Button variant="outline" className="mt-3" onClick={() => setError(null)}>
          Try Again
        </Button>
      </Alert>
    )
  }

  if (!analysis) {
    return (
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your Islamic finance scenario here..."
          className="min-h-[200px]"
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
        />
        <div className="flex justify-end">
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleAnalyze} disabled={!scenario.trim()}>
            Analyze with AI
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
            <p className="text-gray-600 text-sm">Analysis based on AAOIFI standards</p>
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
            Analyze Another Scenario
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Save Analysis</Button>
        </div>
      </div>
    </div>
  )
}
