import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Info, AlertCircle } from "lucide-react"
import Link from "next/link"
import { UseCaseAnalyzer } from "@/components/use-case-analyzer"

export default function UseCasesPage() {
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
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Use Case Analysis</h1>
          <p className="text-gray-600">
            Our AI analyzes Islamic finance use cases and provides accurate accounting guidance based on AAOIFI
            standards using OpenAI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-emerald-800">Islamic Finance Analysis</CardTitle>
                  </div>
                  <Button variant="outline" className="text-emerald-600 border-emerald-200">
                    <Info className="h-4 w-4 mr-2" /> View Standards
                  </Button>
                </div>
                <CardDescription>
                  Enter your Islamic finance scenario for AI analysis and accounting guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="input" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="input">Input Scenario</TabsTrigger>
                    <TabsTrigger value="example">Example Scenario</TabsTrigger>
                  </TabsList>
                  <TabsContent value="input">
                    <UseCaseAnalyzer />
                  </TabsContent>
                  <TabsContent value="example">
                    <div className="space-y-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-amber-800">Example Scenario: Ijarah MBT</h3>
                          <p className="text-amber-700 text-sm mt-2">
                            On 1 January 2019 Alpha Islamic bank (Lessee) entered into an Ijarah MBT arrangement with
                            Super Generators for Ijarah of a heavy-duty generator purchase by Super Generators at a
                            price of USD 450,000. Super Generators has also paid USD 12,000 as import tax and US 30,000
                            for freight charges. The Ijarah Term is 02 years and expected residual value at the end USD
                            5,000. At the end of Ijarah Term, it is highly likely that the option of transfer of
                            ownership of the underlying asset to the lessee shall be exercised through purchase at a
                            price of USD 3,000. Alpha Islamic Bank will amortize the 'right of use' on yearly basis and
                            it is required to pay yearly rental of USD 300,000.
                          </p>
                          <p className="text-amber-700 font-medium text-sm mt-3">
                            Question: Provide the accounting entry in the books of Alpha Islamic Bank for initial
                            recognition at the time of commencement of Ijarah (using Underlying Asset Cost Method).
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Use This Example</Button>
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
                <CardTitle className="text-emerald-800">AAOIFI FAS Reference</CardTitle>
                <CardDescription>Relevant standards for Islamic finance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 28: Ijarah</h3>
                    <p className="text-gray-600 text-sm">
                      This standard sets out the principles for classification, recognition, measurement, presentation
                      and disclosure for Ijarah transactions, including different forms of Ijarah Muntahia Bittamleek.
                    </p>
                    <Button variant="link" className="text-emerald-600 p-0 h-auto mt-1">
                      View Full Standard
                    </Button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">
                      FAS 4: Murabaha and Other Deferred Payment Sales
                    </h3>
                    <p className="text-gray-600 text-sm">
                      This standard covers the accounting rules for Murabaha and other deferred payment sales for both
                      the seller and purchaser.
                    </p>
                    <Button variant="link" className="text-emerald-600 p-0 h-auto mt-1">
                      View Full Standard
                    </Button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-1">FAS 10: Istisna'a</h3>
                    <p className="text-gray-600 text-sm">
                      This standard prescribes the accounting rules for Istisna'a and parallel Istisna'a for Islamic
                      financial institutions.
                    </p>
                    <Button variant="link" className="text-emerald-600 p-0 h-auto mt-1">
                      View Full Standard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
