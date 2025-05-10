"use client";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ArrowLeft, BarChart3, FileText, AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { AuditTool } from "@/components/audit-tool"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function AuditPage() {
  const [financialData, setFinancialData] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

      const handleAnalyzeData = async () => {
        setIsLoading(true)
        try {
            // Prepare the data to be sent to the server (example: send in JSON format)
            const response = await fetch("/api/analyze-financial-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ financialData }),
            })

            if (!response.ok) {
                throw new Error("Failed to analyze data")
            }

            const data = await response.json()

            // Assuming the server returns results, handle the response (e.g., display analysis results)
            toast({ description: "Data analyzed successfully!" })
            // Here you can set the response data to state and display it in your UI
        } catch (error) {
            toast({ description: "An error occurred: " })
        } finally {
            setIsLoading(false)
        }
    }
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
                  <div className="flex items-center gap-2">
                    <Select defaultValue="quarterly">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <CardDescription>Upload financial statements for AI-powered compliance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="upload">Upload</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                    <TabsTrigger value="compliance">Compliance</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload">
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <div className="mx-auto flex flex-col items-center justify-center gap-1">
                          <FileText className="h-10 w-10 text-gray-400" />
                          <h3 className="mt-2 text-lg font-semibold text-gray-700">Upload Financial Statements</h3>
                          <p className="text-sm text-gray-500 mb-4">
                            Drag and drop your financial statement files or click to browse
                          </p>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">Select Files</Button>
                          <p className="mt-2 text-xs text-gray-500">Supports PDF, Excel, CSV (Max 10MB)</p>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-gray-800 mb-3">Manual Input</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                            <Input placeholder="Enter institution name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Reporting Period</label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Financial Data</label>
                            <Textarea
                              placeholder="Enter key financial data or paste JSON/CSV format"
                              className="min-h-[150px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Analyze Data</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="analysis">
                    <AuditTool />
                  </TabsContent>
                  <TabsContent value="compliance">
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                          AAOIFI Standards Compliance
                        </h3>
                        <div className="space-y-4">
                          <div className="border border-gray-100 rounded-md p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-800">
                                FAS 4: Murabaha and Other Deferred Payment Sales
                              </h4>
                              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm font-medium">
                                98% Compliant
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">
                              All Murabaha transactions properly recognized and measured according to AAOIFI standards.
                            </p>
                          </div>

                          <div className="border border-gray-100 rounded-md p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-800">FAS 10: Istisna'a and Parallel Istisna'a</h4>
                              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                                85% Compliant
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">
                              Minor discrepancies in revenue recognition for Istisna'a contracts.
                            </p>
                          </div>

                          <div className="border border-gray-100 rounded-md p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-800">FAS 28: Ijarah</h4>
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                                72% Compliant
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "72%" }}></div>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">
                              Significant issues with Ijarah asset classification and disclosure requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3">Compliance Issues</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-md">
                            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-red-800">Ijarah Asset Classification</h4>
                              <p className="text-gray-700 text-sm">
                                Several Ijarah assets are incorrectly classified as operating leases when they should be
                                classified as Ijarah Muntahia Bittamleek based on the contract terms.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-md">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-amber-800">Istisna'a Revenue Recognition</h4>
                              <p className="text-gray-700 text-sm">
                                The percentage of completion method is not consistently applied across all Istisna'a
                                projects, leading to potential misstatement of revenue.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-md">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-amber-800">Disclosure Inadequacy</h4>
                              <p className="text-gray-700 text-sm">
                                Insufficient disclosures regarding the nature and terms of Ijarah arrangements,
                                particularly for contingent rental provisions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="recommendations">
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3">AI-Generated Recommendations</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-emerald-500 pl-4 py-1">
                            <h4 className="font-medium text-gray-800">Ijarah Asset Reclassification</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Review all Ijarah contracts and reclassify assets based on the substance of the
                              arrangement rather than form. For contracts where ownership transfer is highly likely,
                              classify as Ijarah Muntahia Bittamleek and account accordingly per FAS 28.
                            </p>
                            <div className="mt-2 bg-emerald-50 p-2 rounded text-xs text-gray-700">
                              <p className="font-medium text-emerald-800">Suggested Journal Entry:</p>
                              <p>Dr. Right-of-Use Asset (Ijarah Muntahia Bittamleek) XXX</p>
                              <p>Cr. Right-of-Use Asset (Operating Ijarah) XXX</p>
                            </div>
                          </div>

                          <div className="border-l-4 border-emerald-500 pl-4 py-1">
                            <h4 className="font-medium text-gray-800">Istisna'a Revenue Recognition Policy</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Implement a consistent revenue recognition policy for all Istisna'a contracts. If using
                              percentage of completion, ensure proper documentation of progress measurements and
                              consistent application across all projects.
                            </p>
                            <div className="mt-2 bg-emerald-50 p-2 rounded text-xs text-gray-700">
                              <p className="font-medium text-emerald-800">Policy Update:</p>
                              <p>
                                "Revenue from Istisna'a contracts shall be recognized using the percentage of completion
                                method, calculated based on the ratio of costs incurred to date to the estimated total
                                costs. Progress shall be certified by qualified engineers on a monthly basis."
                              </p>
                            </div>
                          </div>

                          <div className="border-l-4 border-emerald-500 pl-4 py-1">
                            <h4 className="font-medium text-gray-800">Enhanced Disclosure Framework</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Develop a comprehensive disclosure checklist specific to Islamic financial instruments to
                              ensure compliance with all AAOIFI disclosure requirements.
                            </p>
                            <div className="mt-2 bg-emerald-50 p-2 rounded text-xs text-gray-700">
                              <p className="font-medium text-emerald-800">Key Disclosures for Ijarah:</p>
                              <ul className="list-disc pl-4 space-y-1">
                                <li>Nature of assets under Ijarah</li>
                                <li>Classification criteria used</li>
                                <li>Future minimum Ijarah payments</li>
                                <li>Contingent rental provisions</li>
                                <li>Purchase options and terms</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3">Implementation Timeline</h3>
                        <div className="relative">
                          <div className="absolute h-full w-0.5 bg-emerald-200 left-2.5 top-0"></div>
                          <div className="space-y-6">
                            <div className="flex gap-5">
                              <div className="relative z-10">
                                <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                                  <div className="h-2 w-2 rounded-full bg-white"></div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800">Immediate (1-2 weeks)</h4>
                                <ul className="mt-1 text-gray-600 text-sm space-y-1">
                                  <li>• Review and reclassify all Ijarah contracts</li>
                                  <li>• Document Istisna'a revenue recognition methodology</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex gap-5">
                              <div className="relative z-10">
                                <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                                  <div className="h-2 w-2 rounded-full bg-white"></div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800">Short-term (1 month)</h4>
                                <ul className="mt-1 text-gray-600 text-sm space-y-1">
                                  <li>• Implement revised accounting policies</li>
                                  <li>• Develop enhanced disclosure templates</li>
                                  <li>• Train accounting staff on AAOIFI requirements</li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex gap-5">
                              <div className="relative z-10">
                                <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                                  <div className="h-2 w-2 rounded-full bg-white"></div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800">Medium-term (3 months)</h4>
                                <ul className="mt-1 text-gray-600 text-sm space-y-1">
                                  <li>• Conduct internal audit of revised practices</li>
                                  <li>• Implement automated compliance checks</li>
                                  <li>• Prepare restated financial statements if necessary</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-emerald-100 shadow-sm sticky top-4">
              <CardHeader>
                <CardTitle className="text-emerald-800">Compliance Dashboard</CardTitle>
                <CardDescription>Overall AAOIFI standards compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32">
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-emerald-600"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset="50.24"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-emerald-800">80%</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Overall Compliance Score</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">FAS 4</span>
                        <span className="text-sm font-medium text-emerald-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">FAS 10</span>
                        <span className="text-sm font-medium text-amber-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">FAS 28</span>
                        <span className="text-sm font-medium text-red-600">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">FAS 32</span>
                        <span className="text-sm font-medium text-emerald-600">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
                    <h3 className="font-medium text-amber-800 mb-1 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Critical Issues</span>
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li className="flex items-start gap-1">
                        <XCircle className="h-3 w-3 text-red-500 mt-1" />
                        <span>Ijarah asset misclassification</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <XCircle className="h-3 w-3 text-red-500 mt-1" />
                        <span>Incomplete Ijarah disclosures</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <XCircle className="h-3 w-3 text-amber-500 mt-1" />
                        <span>Inconsistent Istisna'a revenue recognition</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Download Full Report</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
