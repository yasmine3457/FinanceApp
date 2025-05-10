import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Lightbulb, Bot, Shield, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { MultiAgentSystem } from "@/components/multi-agent-system"

export default function StandardsEnhancementPage() {
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
            <Button className="bg-emerald-600 hover:bg-emerald-700">Save Enhancement</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Standards Enhancement</h1>
          <p className="text-gray-600">
            Our multi-agent AI system reviews, suggests, and validates updates to AAOIFI standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Card className="border-emerald-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-emerald-800">Multi-Agent Enhancement System</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="fas10">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Standard" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fas4">FAS 4: Murabaha</SelectItem>
                        <SelectItem value="fas10">FAS 10: Istisna'a</SelectItem>
                        <SelectItem value="fas32">FAS 32: Ijarah</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <CardDescription>Our AI agents collaborate to review and enhance AAOIFI standards</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="agents" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="agents">Agent System</TabsTrigger>
                    <TabsTrigger value="review">Review</TabsTrigger>
                    <TabsTrigger value="enhance">Enhancement</TabsTrigger>
                    <TabsTrigger value="validate">Validation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="agents">
                    <MultiAgentSystem />
                  </TabsContent>
                  <TabsContent value="review">
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Bot className="h-5 w-5 text-blue-500 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-800">Standards Analyzer Agent</h3>
                            <p className="text-gray-600 text-sm">
                              Extracting key elements from FAS 10: Istisna'a and Parallel Istisna'a
                            </p>
                          </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                          <h4 className="text-blue-800 font-medium mb-2">Key Elements Extracted:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                <strong>Definition:</strong> Istisna'a is a sale contract between al-mustasni' (ultimate
                                purchaser) and al-sani' (seller) whereby al-sani' undertakes to manufacture or acquire
                                al-masnoo' (subject matter of the contract) according to specifications.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                <strong>Recognition:</strong> Istisna'a revenue is recognized using either percentage of
                                completion or completed contract method.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                <strong>Measurement:</strong> Istisna'a work-in-progress is measured at historical cost
                                plus recognized profit minus recognized losses.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                <strong>Parallel Istisna'a:</strong> The standard treats Istisna'a and Parallel
                                Istisna'a as separate transactions, each with its own accounting treatment.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Bot className="h-5 w-5 text-blue-500 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-800">Standards Analyzer Agent</h3>
                            <p className="text-gray-600 text-sm">Identifying potential areas for improvement</p>
                          </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                          <h4 className="text-blue-800 font-medium mb-2">Improvement Areas:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-amber-500 mt-1" />
                              <span>
                                <strong>Digital Contracts:</strong> The standard lacks guidance on digital/smart
                                contract implementation of Istisna'a.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-amber-500 mt-1" />
                              <span>
                                <strong>Cross-Border Transactions:</strong> Limited guidance on multi-jurisdictional
                                Istisna'a contracts.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-amber-500 mt-1" />
                              <span>
                                <strong>Modern Manufacturing:</strong> The standard does not address modern
                                manufacturing methods like 3D printing or AI-designed products.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="enhance">
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Bot className="h-5 w-5 text-purple-500 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-800">Enhancement Agent</h3>
                            <p className="text-gray-600 text-sm">
                              Proposing enhancements to FAS 10: Istisna'a and Parallel Istisna'a
                            </p>
                          </div>
                        </div>
                        <div className="bg-purple-50 border border-purple-100 rounded-md p-3">
                          <h4 className="text-purple-800 font-medium mb-2">Proposed Enhancements:</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-gray-800 font-medium">1. Digital Istisna'a Contracts</h5>
                              <div className="pl-4 border-l-2 border-purple-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  Add a new section 4.5 to address digital implementation of Istisna'a contracts:
                                </p>
                                <p className="text-gray-700 text-sm mt-1 bg-white p-2 rounded border border-gray-100">
                                  "4.5 Digital Istisna'a Contracts: When Istisna'a contracts are implemented through
                                  digital means or smart contracts, the same recognition and measurement principles
                                  apply. The digital contract must still contain all essential elements of a valid
                                  Istisna'a. Institutions shall maintain appropriate digital records that satisfy
                                  Shariah and regulatory requirements."
                                </p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-gray-800 font-medium">2. Cross-Border Istisna'a</h5>
                              <div className="pl-4 border-l-2 border-purple-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  Add section 7.3 to address multi-jurisdictional considerations:
                                </p>
                                <p className="text-gray-700 text-sm mt-1 bg-white p-2 rounded border border-gray-100">
                                  "7.3 Cross-Border Istisna'a: For Istisna'a contracts spanning multiple jurisdictions,
                                  institutions shall clearly document which jurisdiction's laws govern the contract.
                                  Foreign currency denominated Istisna'a contracts shall be accounted for in accordance
                                  with FAS 16 (Foreign Currency Transactions) in addition to this standard."
                                </p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-gray-800 font-medium">3. Modern Manufacturing Methods</h5>
                              <div className="pl-4 border-l-2 border-purple-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  Expand section 2.1 to include modern manufacturing methods:
                                </p>
                                <p className="text-gray-700 text-sm mt-1 bg-white p-2 rounded border border-gray-100">
                                  "2.1.4 The definition of 'manufacturing' in Istisna'a encompasses all forms of
                                  production, including but not limited to traditional manufacturing, digital
                                  production, 3D printing, AI-assisted design, and other emerging technologies, provided
                                  the end product meets the specifications agreed upon in the contract."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="validate">
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Shield className="h-5 w-5 text-emerald-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-800">Shariah Validator Agent</h3>
                            <p className="text-gray-600 text-sm">
                              Validating proposed enhancements against Shariah principles
                            </p>
                          </div>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
                          <h4 className="text-emerald-800 font-medium mb-2">Shariah Validation:</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-gray-800 font-medium flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                Digital Istisna'a Contracts
                              </h5>
                              <div className="pl-4 border-l-2 border-emerald-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  <strong>Validation:</strong> Approved with modifications
                                </p>
                                <p className="text-gray-700 text-sm mt-1">
                                  The digital implementation of Istisna'a is permissible as long as all essential
                                  elements of a valid Istisna'a contract are present. However, the enhancement should
                                  specify that digital signatures must be verifiable and the contract terms must be
                                  clear and accessible to all parties.
                                </p>
                                <p className="text-gray-700 text-sm mt-1 bg-white p-2 rounded border border-gray-100">
                                  <strong>Recommended Addition:</strong> "Digital implementations must ensure that all
                                  parties have clear understanding of and access to the complete contract terms, and
                                  that digital signatures or authentication methods are verifiable and comply with
                                  Shariah requirements for contract formation."
                                </p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-gray-800 font-medium flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                Cross-Border Istisna'a
                              </h5>
                              <div className="pl-4 border-l-2 border-emerald-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  <strong>Validation:</strong> Approved
                                </p>
                                <p className="text-gray-700 text-sm mt-1">
                                  The proposed enhancement aligns with Shariah principles as it promotes clarity and
                                  transparency in cross-border transactions. The reference to FAS 16 is appropriate for
                                  handling currency considerations.
                                </p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-gray-800 font-medium flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                Modern Manufacturing Methods
                              </h5>
                              <div className="pl-4 border-l-2 border-red-200 mt-1">
                                <p className="text-gray-700 text-sm">
                                  <strong>Validation:</strong> Requires revision
                                </p>
                                <p className="text-gray-700 text-sm mt-1">
                                  While modern manufacturing methods can be included, the enhancement needs to specify
                                  that the manufacturing process must not involve prohibited (haram) elements.
                                  Additionally, the ownership and intellectual property rights in AI-assisted design
                                  need clarification.
                                </p>
                                <p className="text-gray-700 text-sm mt-1 bg-white p-2 rounded border border-gray-100">
                                  <strong>Recommended Revision:</strong> "2.1.4 The definition of 'manufacturing' in
                                  Istisna'a encompasses all forms of production that comply with Shariah principles,
                                  including but not limited to traditional manufacturing, digital production, 3D
                                  printing, and AI-assisted design. The manufacturing process must not involve
                                  prohibited materials or methods, and ownership of intellectual property rights must be
                                  clearly defined in the contract."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-md p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Bot className="h-5 w-5 text-blue-500 mt-1" />
                          <div>
                            <h3 className="font-medium text-gray-800">Compliance Advisor Agent</h3>
                            <p className="text-gray-600 text-sm">
                              Assessing regulatory compliance of proposed enhancements
                            </p>
                          </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                          <h4 className="text-blue-800 font-medium mb-2">Compliance Assessment:</h4>
                          <p className="text-gray-700 mb-3">
                            The proposed enhancements are generally compliant with global regulatory frameworks, with
                            the following considerations:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                Digital contract implementations should reference compliance with electronic signature
                                laws in relevant jurisdictions.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1" />
                              <span>
                                Cross-border guidance aligns with international accounting standards and trade
                                regulations.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-amber-500 mt-1" />
                              <span>
                                Modern manufacturing section should include reference to product safety and quality
                                standards that vary by jurisdiction.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-4">
            <Card className="border-emerald-100 shadow-sm sticky top-4">
              <CardHeader>
                <CardTitle className="text-emerald-800">Enhancement Summary</CardTitle>
                <CardDescription>Final recommendations for FAS 10 enhancement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-2">Digital Istisna'a Contracts</h3>
                    <div className="bg-emerald-50 p-2 rounded text-sm text-gray-700 border border-emerald-100">
                      <p>
                        "4.5 Digital Istisna'a Contracts: When Istisna'a contracts are implemented through digital means
                        or smart contracts, the same recognition and measurement principles apply. The digital contract
                        must still contain all essential elements of a valid Istisna'a. Digital implementations must
                        ensure that all parties have clear understanding of and access to the complete contract terms,
                        and that digital signatures or authentication methods are verifiable and comply with Shariah
                        requirements for contract formation."
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-emerald-600 text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Approved by all agents</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-2">Cross-Border Istisna'a</h3>
                    <div className="bg-emerald-50 p-2 rounded text-sm text-gray-700 border border-emerald-100">
                      <p>
                        "7.3 Cross-Border Istisna'a: For Istisna'a contracts spanning multiple jurisdictions,
                        institutions shall clearly document which jurisdiction's laws govern the contract. Foreign
                        currency denominated Istisna'a contracts shall be accounted for in accordance with FAS 16
                        (Foreign Currency Transactions) in addition to this standard."
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-emerald-600 text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Approved by all agents</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-2">Modern Manufacturing Methods</h3>
                    <div className="bg-amber-50 p-2 rounded text-sm text-gray-700 border border-amber-100">
                      <p>
                        "2.1.4 The definition of 'manufacturing' in Istisna'a encompasses all forms of production that
                        comply with Shariah principles, including but not limited to traditional manufacturing, digital
                        production, 3D printing, and AI-assisted design. The manufacturing process must not involve
                        prohibited materials or methods, and ownership of intellectual property rights must be clearly
                        defined in the contract. Products must comply with relevant safety and quality standards in the
                        applicable jurisdictions."
                      </p>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-amber-600 text-sm">
                      <XCircle className="h-4 w-4" />
                      <span>Pending final approval</span>
                    </div>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Submit Enhancement Proposal</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
