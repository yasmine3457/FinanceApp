import { Bot, ArrowRight, CheckCircle2 } from "lucide-react"

export function StandardsIdentifier() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-md p-4">
        <div className="flex items-start gap-3 mb-3">
          <Bot className="h-5 w-5 text-emerald-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-800">AI Analysis</h3>
            <p className="text-gray-600 text-sm">Analyzing transaction to identify applicable AAOIFI standards</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
            <h4 className="text-emerald-800 font-medium mb-2">Transaction Summary:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-600 mt-1" />
                <div>
                  <span className="font-medium">Transaction Type:</span> Equity buyout
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-600 mt-1" />
                <div>
                  <span className="font-medium">Parties:</span> Al Baraka Bank and GreenTech
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-600 mt-1" />
                <div>
                  <span className="font-medium">Transaction Value:</span> $1,750,000
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-600 mt-1" />
                <div>
                  <span className="font-medium">Ownership Change:</span> Bank ownership increases to 100%
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-600 mt-1" />
                <div>
                  <span className="font-medium">Journal Entry:</span>
                  <br />
                  Dr. GreenTech Equity $1,750,000
                  <br />
                  Cr. Cash $1,750,000
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
            <h4 className="text-blue-800 font-medium mb-2">Standards Analysis:</h4>
            <p className="text-gray-700 mb-3">
              Based on the transaction details, I've analyzed the applicable AAOIFI Financial Accounting Standards:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded border border-gray-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h5 className="text-gray-800 font-medium">FAS 4: Murabaha and Other Deferred Payment Sales</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs font-medium">
                        85% Probability
                      </div>
                      <span className="text-gray-500 text-xs">Primary Standard</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      While FAS 4 primarily deals with Murabaha transactions, it contains principles applicable to
                      equity investments and partnership arrangements. The transaction involves a full buyout of equity
                      stake, which aligns with ownership transfer principles in FAS 4.
                    </p>
                    <div className="mt-2 text-sm">
                      <p className="text-gray-700 font-medium">Key Matching Factors:</p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1 text-xs">
                        <li>Ownership transfer structure</li>
                        <li>Cash-based settlement</li>
                        <li>Equity investment principles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-gray-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h5 className="text-gray-800 font-medium">FAS 20: Sale and Traditional Sale-Leaseback</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-medium">
                        10% Probability
                      </div>
                      <span className="text-gray-500 text-xs">Secondary Standard</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      FAS 20 has limited applicability as the transaction does not involve a sale-leaseback arrangement.
                      However, some principles regarding asset transfer and valuation may be relevant if the equity
                      stake includes underlying assets that will be used by the bank.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-gray-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h5 className="text-gray-800 font-medium">FAS 32: Ijarah and Ijarah Muntahia Bittamleek</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-medium">
                        5% Probability
                      </div>
                      <span className="text-gray-500 text-xs">Minimal Relevance</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      FAS 32 has minimal relevance as the transaction does not involve a leasing arrangement. The only
                      potential connection would be if the equity stake includes assets that were previously under
                      Ijarah arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
            <h4 className="text-emerald-800 font-medium mb-2">Conclusion:</h4>
            <p className="text-gray-700">
              The transaction should primarily be accounted for under the principles of <strong>FAS 4</strong>, with
              consideration of equity investment accounting. The journal entry is appropriate for recording the
              acquisition of the remaining equity stake in GreenTech.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
