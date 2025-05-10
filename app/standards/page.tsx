"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Info, AlertCircle } from "lucide-react"
import Link from "next/link"
import { StandardsIdentifier } from "@/components/standards-identifier"
import { useToast } from "@/components/ui/use-toast"

export default function StandardsPage() {
  const [activeTab, setActiveTab] = useState("transaction")
  const [exampleTransaction, setExampleTransaction] = useState("")
  const { toast } = useToast()

  const buyoutExample = `Context: GreenTech exits in Year 3, and Al Baraka Bank buys out its stake.
Adjustments:
Buyout Price: $1,750,000
Bank Ownership: 100%
Accounting Treatment:
Derecognition of GreenTech's equity
Recognition of acquisition expense
Journal Entry for Buyout:
Dr. GreenTech Equity $1,750,000
Cr. Cash $1,750,000`

  const handleUseExample = () => {
    setExampleTransaction(buyoutExample)
    setActiveTab("transaction")
  }

  const handleSaveAnalysis = () => {
    toast({
      title: "Analysis Saved",
      description: "Your standards identification has been saved to your account.",
      duration: 3000,
    })
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
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSaveAnalysis}>
              Save Analysis
            </Button>
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
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="transaction">Transaction Input</TabsTrigger>
                    <TabsTrigger value="example">Example Transaction</TabsTrigger>
                  </TabsList>
                  <TabsContent value="transaction">
                    <StandardsIdentifier exampleTransaction={exampleTransaction} />
                  </TabsContent>
                  <TabsContent value="example">
                    <div className="space-y-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-amber-800">Example Transaction: Equity Buyout</h3>
                          <p className="text-amber-700 text-sm mt-2">{buyoutExample}</p>
                          <p className="text-amber-700 font-medium text-sm mt-3">
                            Challenge: Can you identify the AAOIFI FAS applicable to these entries? If more than one is
                            possible, include weighted probability and reason.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleUseExample}>
                          Use This Example
                        </Button>
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
