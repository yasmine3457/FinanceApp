"use client";




import { submitFeedback } from "../actions/Audit ";
import { analyzeFinancialData } from "../actions/Audit ";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowLeft, BarChart3 } from "lucide-react"
import Link from "next/link"
import { AuditTool } from "@/components/audit-tool"
import { useRef, useState } from "react"

export default function AuditPage() {
  const [complianceReport, setComplianceReport] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-emerald-600" />
              <span className="text-xl font-bold text-emerald-800">IslamicFinanceAI</span>
            </Link>
          </div>
          <div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Generate Report</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Audit & Compliance Tool</h1>
          <p className="text-gray-600">AI-powered audit and compliance analysis for Islamic financial institutions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-emerald-800">Financial Statement Analysis</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  Upload financial statements for AI-powered compliance analysis
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="input">
                  <TabsList className="mb-4">
                    <TabsTrigger value="input">Input</TabsTrigger>
                    
                    <TabsTrigger value="compliance">Compliance Report</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="input">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Financial Data
                      </label>
                      <Textarea
                        id="financialData"
                        placeholder="Enter key financial data or paste JSON/CSV format"
                        className="min-h-[150px]"
                      />
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={async () => {
                          const financialData = (document.getElementById("financialData") as HTMLTextAreaElement)?.value;
                          if (financialData) {
                            setLoading(true);
                            try {
                              const result = await analyzeFinancialData(financialData);
                              setComplianceReport(result);
                            } catch (error) {
                              setComplianceReport("Error analyzing data.");
                            } finally {
                              setLoading(false);
                            }
                          }
                        }}
                      >
                        {loading ? "Analyzing..." : "Analyze Data"}
                      </Button>
                    </div>
                  </TabsContent>

                 

                  <TabsContent value="compliance">
                    <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
                      {complianceReport || "Awaiting analysis..."}
                    </div>
                    <div className="mt-6">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Feedback
    </label>
    <Textarea
      id="feedback"
      placeholder="Enter feedback available only for expert (administrator)"
      className="min-h-[150px]"
    />
   <div className="flex justify-end mt-3">
  <Button
    className="bg-emerald-600 hover:bg-emerald-700"
    onClick={async () => {
      const feedbackText = (document.getElementById("feedback") as HTMLTextAreaElement)?.value;
      if (feedbackText) {
        try {
          await submitFeedback(feedbackText);
        } catch (error) {
          console.error("Error calling submitFeedback:", error);
        }
      }
    }}
  >
    Submit
  </Button>
</div>
    </div>

                  </TabsContent>

                  <TabsContent value="recommendations">
                  <Textarea
                        
                        placeholder="under developpement"
                        
                      />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
