import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, BarChart3, FileText, Shield, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 to-white">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-800">IslamicFinanceAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Home
            </Link>
            <Link href="/use-cases" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Use Cases
            </Link>
            <Link href="/standards" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Standards
            </Link>
            <Link href="/chat" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Chat
            </Link>
            <Link href="/audit" className="text-sm font-medium text-emerald-900 hover:text-emerald-700">
              Audit Tool
            </Link>
          </nav>
          <Link href="/use-cases">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
              Strengthening Islamic Finance Standards with AI
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our AI-powered platform makes AAOIFI Financial Accounting Standards easier to implement, more
              comprehensive, and globally compatible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/use-cases">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">Try the Platform</Button>
              </Link>
             
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
              Our AI Solutions for Islamic Finance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-emerald-800">Use Case Analysis</CardTitle>
                  <CardDescription>
                    AI-powered analysis of Islamic finance use cases with accurate accounting guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get precise accounting entries for complex Islamic finance products like Ijarah MBT, Murabaha, and
                    more.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/use-cases">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center">
                      Explore Use Cases <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <FileText className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-emerald-800">Standards Identification</CardTitle>
                  <CardDescription>Identify applicable AAOIFI standards from financial transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our AI analyzes financial entries and identifies the relevant AAOIFI FAS with weighted
                    probabilities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/standards">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center">
                      Try Identification <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-emerald-800">AI Chat Assistant</CardTitle>
                  <CardDescription>Chat with our AI about Islamic finance concepts and standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get instant answers to your questions about AAOIFI standards, accounting treatments, and Shariah
                    compliance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/chat">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center">
                      Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-emerald-800">Audit & Compliance</CardTitle>
                  <CardDescription>
                    AI-powered audit and compliance tools for Islamic financial institutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Detect compliance issues, analyze financial statements, and ensure adherence to AAOIFI standards.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/audit">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center">
                      Explore Audit Tools <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-emerald-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Multi-Agent AI Architecture</h2>
                <p className="text-gray-600 mb-6">
                  Our platform uses a sophisticated multi-agent AI system to provide accurate, Shariah-compliant
                  guidance for Islamic finance professionals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-1 mt-1">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-800">Standards Analyzer</h3>
                      <p className="text-gray-600">Extracts and interprets key elements from AAOIFI standards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-1 mt-1">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-800">Enhancement Agent</h3>
                      <p className="text-gray-600">
                        Proposes improvements to standards based on industry best practices
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-1 mt-1">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-800">Shariah Validator</h3>
                      <p className="text-gray-600">Ensures all recommendations align with Shariah principles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-1 mt-1">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-800">Compliance Advisor</h3>
                      <p className="text-gray-600">
                        Provides cross-border compliance guidance for multiple jurisdictions
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Multi-agent AI architecture diagram"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-emerald-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">IslamicFinanceAI</h3>
              <p className="text-emerald-100">
                Strengthening the adoption of standards in Islamic Finance with Artificial Intelligence
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/use-cases" className="text-emerald-100 hover:text-white">
                    Use Case Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/standards" className="text-emerald-100 hover:text-white">
                    Standards Identification
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-emerald-100 hover:text-white">
                    Chat Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/audit" className="text-emerald-100 hover:text-white">
                    Audit & Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/api-setup" className="text-emerald-100 hover:text-white">
                    API Setup
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-100 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
            <p>© 2025 IslamicFinanceAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
