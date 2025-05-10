import { Bot, Shield, ArrowRight, MessageSquare } from "lucide-react"

export function MultiAgentSystem() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-md p-4">
        <h3 className="font-medium text-emerald-800 mb-4">Multi-Agent System Architecture</h3>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-md p-3 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium text-blue-800">Standards Analyzer</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Extracts key elements from AAOIFI standards and identifies areas for improvement
              </p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-blue-500 mt-0.5" />
                  <span>Extract definitions and principles</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-blue-500 mt-0.5" />
                  <span>Identify gaps and ambiguities</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-blue-500 mt-0.5" />
                  <span>Compare with industry practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-md p-3 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-purple-600" />
                <h4 className="font-medium text-purple-800">Enhancement Agent</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Proposes specific enhancements to standards based on modern practices and technologies
              </p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-purple-500 mt-0.5" />
                  <span>Draft new clauses and sections</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-purple-500 mt-0.5" />
                  <span>Modernize language and examples</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-purple-500 mt-0.5" />
                  <span>Address emerging technologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <h4 className="font-medium text-emerald-800">Shariah Validator</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Ensures all proposed changes align with Shariah principles and Islamic finance fundamentals
              </p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-emerald-500 mt-0.5" />
                  <span>Verify Shariah compliance</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-emerald-500 mt-0.5" />
                  <span>Reference relevant Shariah standards</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-emerald-500 mt-0.5" />
                  <span>Suggest modifications if needed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Connector lines */}
          <div className="hidden md:block absolute top-1/2 left-[33%] w-[33%] h-0.5 bg-gray-300 z-0"></div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mx-16">
            <div className="bg-amber-50 border border-amber-100 rounded-md p-3 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-amber-600" />
                <h4 className="font-medium text-amber-800">Compliance Advisor</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Assesses regulatory implications and cross-border compatibility of proposed changes
              </p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-amber-500 mt-0.5" />
                  <span>Evaluate regulatory alignment</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-amber-500 mt-0.5" />
                  <span>Identify jurisdictional variations</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-amber-500 mt-0.5" />
                  <span>Suggest compliance enhancements</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-md p-3 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <h4 className="font-medium text-indigo-800">Integration Coordinator</h4>
              </div>
              <p className="text-gray-700 text-sm">Coordinates between agents and synthesizes final recommendations</p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-indigo-500 mt-0.5" />
                  <span>Resolve conflicting suggestions</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-indigo-500 mt-0.5" />
                  <span>Compile final recommendations</span>
                </li>
                <li className="flex items-start gap-1">
                  <ArrowRight className="h-3 w-3 text-indigo-500 mt-0.5" />
                  <span>Generate implementation guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Connector lines */}
          <div className="hidden md:block absolute top-[60%] left-1/4 h-[15%] w-0.5 bg-gray-300 z-0"></div>
          <div className="hidden md:block absolute top-[60%] right-1/4 h-[15%] w-0.5 bg-gray-300 z-0"></div>

          <div className="mt-8">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 relative z-10">
              <h4 className="font-medium text-gray-800 text-center mb-2">Enhancement Workflow</h4>
              <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <div className="text-center p-2">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    1
                  </div>
                  <p>Standard Review</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center p-2">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    2
                  </div>
                  <p>Gap Identification</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center p-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    3
                  </div>
                  <p>Enhancement Drafting</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center p-2">
                  <div className="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    4
                  </div>
                  <p>Shariah Validation</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center p-2">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    5
                  </div>
                  <p>Compliance Review</p>
                </div>
                <div className="hidden md:block text-gray-400">→</div>
                <div className="text-center p-2">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    6
                  </div>
                  <p>Final Proposal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
