import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Info, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { StandardsIdentifier } from "@/components/standards-identifier"

export default function StandardsPage() {
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
            <Button className="bg-emerald-600 hover:bg-emerald-700">Save Analysis</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Standards Identification</h1>
          <p className="text-gray-600">
            Our AI analyzes financial transactions and identifies the applicable AAOIFI Financial Accounting Standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-emerald-800">Reverse Transaction Analysis</CardTitle>
                  </div>
                  <Button variant="outline" className="text-emerald-600 border-emerald-200">
                    <Info className="h-4 w-4 mr-2" /> View Standards List
                  </Button>
                </div>
                <CardDescription>Enter financial transactions to identify applicable AAOIFI standards</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="transaction" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="transaction">Transaction Input</TabsTrigger>
                    <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
                    <TabsTrigger value="standards">Identified Standards</TabsTrigger>
                  </TabsList>
                  <TabsContent value="transaction">
                    <div className="space-y-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-amber-800">Example Transaction</h3>
                          <p className="text-amber-700 text-sm">
                            Context: GreenTech exits in Year 3, and Al Baraka Bank buys out its stake.
                            <br />
                            Adjustments: Buyout Price: $1,750,000, Bank Ownership: 100%
                            <br />
                            Journal Entry for Buyout:
                            <br />
                            Dr. GreenTech Equity $1,750,000
                            <br />
                            Cr. Cash $1,750,000
                          </p>
                        </div>
                      </div>
                      <Textarea
                        placeholder="Enter your financial transaction details here..."
                        className="min-h-[300px]"
                      />
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Identify Standards</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="analysis">
                    <StandardsIdentifier />
                  </TabsContent>
                  <TabsContent value="standards">
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                          Identified Standards with Probability
                        </h3>
                        <div className="space-y-4">
                          <div className="border border-gray-100 rounded-md p-3 bg-emerald-50">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-emerald-800">
                                FAS 4: Murabaha and Other Deferred Payment Sales
                              </h4>
                              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm font-medium">
                                85% Probability
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                              This standard is most applicable as it deals with equity investments and partnership
                              arrangements similar to the buyout transaction described.
                            </p>
                            <div className="mt-2 pt-2 border-t border-emerald-100">
                              <h5 className="text-sm font-medium text-emerald-700 mb-1">Key Matching Factors:</h5>
                              <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                                <li>Equity transaction structure</li>
                                <li>Full ownership acquisition</li>
                                <li>Cash settlement method</li>
                              </ul>
                            </div>
                          </div>

                          <div className="border border-gray-100 rounded-md p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-700">FAS 20: Sale and Traditional Sale-Leaseback</h4>
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                                10% Probability
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                              This standard has limited applicability as the transaction does not involve a
                              sale-leaseback arrangement, though some principles may be relevant.
                            </p>
                          </div>

                          <div className="border border-gray-100 rounded-md p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-gray-700">
                                FAS 32: Ijarah and Ijarah Muntahia Bittamleek
                              </h4>
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                                5% Probability
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                              This standard has minimal relevance as the transaction does not involve a leasing
                              arrangement.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <h3 className="font-medium text-emerald-800 mb-3">Recommended Accounting Treatment</h3>
                        <p className="text-gray-600 mb-3">
                          Based on the identified standards, the following accounting treatment is recommended:
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-gray-800 font-medium">Journal Entry:</p>
                          <p className="text-gray-700">Dr. Investment in GreenTech (Equity) $1,750,000</p>
                          <p className="text-gray-700 pl-5">Cr. Cash $1,750,000</p>
                          <p className="text-gray-600 text-sm mt-2">
                            Note: The investment should be subsequently measured according to FAS 4 guidelines for
                            equity investments.
                          </p>
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
                <CardTitle className="text-emerald-800">AAOIFI Standards Reference</CardTitle>
                <CardDescription>Quick reference to key AAOIFI standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 4</h3>
                    <p className="text-gray-600 text-sm">Murabaha and Other Deferred Payment Sales</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 7</h3>
                    <p className="text-gray-600 text-sm">Salam and Parallel Salam</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 10</h3>
                    <p className="text-gray-600 text-sm">Istisna'a and Parallel Istisna'a</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 28</h3>
                    <p className="text-gray-600 text-sm">Ijarah</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 32</h3>
                    <p className="text-gray-600 text-sm">Ijarah and Ijarah Muntahia Bittamleek</p>
                  </div>
                  <Button variant="outline" className="w-full text-emerald-600 border-emerald-200">
                    View All Standards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
