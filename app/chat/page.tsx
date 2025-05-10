import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
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
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Islamic Finance Assistant</h1>
          <p className="text-gray-600">
            Chat with our AI assistant about Islamic finance concepts, AAOIFI standards, and accounting treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>

          <div>
            <Card className="border-emerald-100 shadow-sm sticky top-4">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                  <CardTitle className="text-emerald-800">Chat Assistant</CardTitle>
                </div>
                <CardDescription>Ask questions about Islamic finance and AAOIFI standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-2">Example Questions</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• What is the accounting treatment for Ijarah Muntahia Bittamleek?</li>
                      <li>• How do I calculate deferred profit in a Murabaha transaction?</li>
                      <li>• What are the key differences between FAS 28 and IFRS 16?</li>
                      <li>• How should I account for Istisna'a work-in-progress?</li>
                      <li>• What disclosures are required for Sukuk instruments?</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-md p-3">
                    <h3 className="font-medium text-emerald-800 mb-2">Features</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Instant answers to Islamic finance questions</li>
                      <li>• References to specific AAOIFI standards</li>
                      <li>• Accounting treatment guidance</li>
                      <li>• Shariah compliance explanations</li>
                    </ul>
                  </div>

                  <div className="flex justify-between">
                    <Link href="/use-cases">
                      <Button variant="outline">Use Case Analysis</Button>
                    </Link>
                   
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
