import { Bot, AlertTriangle, CheckCircle2 } from "lucide-react"

export function AuditTool() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-md p-4">
        <div className="flex items-start gap-3 mb-3">
          <Bot className="h-5 w-5 text-emerald-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800">AI Analysis</h3>
            <p className="text-gray-600 text-sm">Analyzing financial statements for AAOIFI compliance</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
            <h4 className="text-emerald-800 font-medium mb-2">Financial Statement Overview:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-100">
                    <th className="border border-emerald-200 p-2 text-left text-emerald-800">Category</th>
                    <th className="border border-emerald-200 p-2 text-right text-emerald-800">Amount (USD)</th>
                    <th className="border border-emerald-200 p-2 text-left text-emerald-800">AAOIFI Standard</th>
                    <th className="border border-emerald-200 p-2 text-center text-emerald-800">Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Murabaha Receivables</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">12,500,000</td>
                    <td className="border border-gray-200 p-2 text-gray-700">FAS 4</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Istisna'a Work-in-Progress</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">8,750,000</td>
                    <td className="border border-gray-200 p-2 text-gray-700">FAS 10</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Ijarah Assets</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">15,300,000</td>
                    <td className="border border-gray-200 p-2 text-gray-700">FAS 28</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <AlertTriangle className="h-4 w-4 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Sukuk Investments</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">7,200,000</td>
                    <td className="border border-gray-200 p-2 text-gray-700">FAS 33</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-md p-3">
            <h4 className="text-red-800 font-medium mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Critical Compliance Issues:
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-gray-800 font-medium">Ijarah Asset Classification (FAS 28)</h5>
                <p className="text-gray-700 text-sm mt-1">
                  The financial statements classify several Ijarah arrangements as operating leases when they should be
                  classified as Ijarah Muntahia Bittamleek based on the contract terms. This misclassification affects:
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mt-1">
                  <li>Asset valuation (understated by approximately USD 2.3 million)</li>
                  <li>Liability recognition (understated by approximately USD 2.5 million)</li>
                  <li>Depreciation/amortization expenses (understated by approximately USD 450,000)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-md p-3">
            <h4 className="text-amber-800 font-medium mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Moderate Compliance Issues:
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-gray-800 font-medium">Istisna'a Revenue Recognition (FAS 10)</h5>
                <p className="text-gray-700 text-sm mt-1">
                  The institution is using inconsistent methods for revenue recognition across different Istisna'a
                  projects:
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mt-1">
                  <li>Project A uses percentage of completion method</li>
                  <li>Project B uses completed contract method</li>
                  <li>Project C uses a hybrid approach</li>
                </ul>
                <p className="text-gray-700 text-sm mt-1">
                  FAS 10 requires consistent application of the chosen method across similar contracts.
                </p>
              </div>

              <div>
                <h5 className="text-gray-800 font-medium">Disclosure Inadequacy</h5>
                <p className="text-gray-700 text-sm mt-1">
                  The notes to the financial statements lack adequate disclosures regarding:
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mt-1">
                  <li>Nature and terms of Ijarah arrangements</li>
                  <li>Contingent rental provisions</li>
                  <li>Future minimum Ijarah payments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
            <h4 className="text-blue-800 font-medium mb-2">Financial Impact Assessment:</h4>
            <p className="text-gray-700 mb-3">
              The identified compliance issues have the following estimated financial impact:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-2 text-left text-blue-800">Issue</th>
                    <th className="border border-blue-200 p-2 text-right text-blue-800">Asset Impact</th>
                    <th className="border border-blue-200 p-2 text-right text-blue-800">Liability Impact</th>
                    <th className="border border-blue-200 p-2 text-right text-blue-800">Profit Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Ijarah Misclassification</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">+$2,300,000</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">+$2,500,000</td>
                    <td className="border border-gray-200 p-2 text-right text-red-600">-$200,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-gray-700">Istisna'a Revenue Recognition</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">+$750,000</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-700">+$320,000</td>
                    <td className="border border-gray-200 p-2 text-right text-emerald-600">+$430,000</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="border border-gray-200 p-2 text-gray-800">Net Impact</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-800">+$3,050,000</td>
                    <td className="border border-gray-200 p-2 text-right text-gray-800">+$2,820,000</td>
                    <td className="border border-gray-200 p-2 text-right text-emerald-600">+$230,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
