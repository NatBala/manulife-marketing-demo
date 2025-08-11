import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ActiveFixedIncomeETFsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative flex items-center justify-center h-[60vh] w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="text-center text-white px-4 md:px-0 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Why Lean into{" "}
            <span className="underline decoration-4">Active Fixed‑Income ETFs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-light"
          >
            Discover how Capital Group’s CGCB, CGCP and CGMU harness in‑kind
            mechanics and active research to pursue higher after‑tax returns,
            tighter spreads and real‑time flexibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
              Explore the ETFs <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ───── What Makes Them Different ───── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Makes Active Fixed‑Income ETFs{" "}
          <span className="text-indigo-600">Different</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Lever 1 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-700">
                In‑Kind Creation & Redemption
              </h3>
              <p>• <strong>Tax Shielding</strong> — low‑basis bonds exit with redeeming shareholders instead of triggering fund‑wide gains.</p>
              <p>• <strong>Lower Friction Costs</strong> — avoids bid/ask spreads from forced sales, preserving NAV.</p>
              <p>• <strong>Year‑End Discipline</strong> — CGCB, CGCP, CGMU historically pay little‑to‑no cap‑gain distributions.</p>
              <p>• <strong>Portfolio Migration</strong> — seamless mutual‑fund‑to‑ETF conversions without a tax bill.</p>
              <p>• <strong>Cash‑Flow Efficiency</strong> — less cash drag; portfolios stay fully invested.</p>
            </CardContent>
          </Card>

          {/* Lever 2 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-700">Intraday Liquidity</h3>
              <p>• <strong>Real‑Time Shifts</strong> — adjust duration/credit throughout the day, not just at 4 p.m.</p>
              <p>• <strong>Price Discovery</strong> — live bids offer transparency in volatile bond markets.</p>
              <p>• <strong>Flexible Cash Management</strong> — park idle cash in CGMU, redeploy at will.</p>
              <p>• <strong>Hedging Agility</strong> — enter/exit tactical positions around Fed announcements.</p>
              <p>• <strong>Bid‑Ask Control</strong> — scale orders to capture tighter spreads.</p>
            </CardContent>
          </Card>

          {/* Lever 3 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Research‑Driven Security Selection
              </h3>
              <p>• <strong>Beyond the Index</strong> — avoid concentration in the most indebted issuers.</p>
              <p>• <strong>Dynamic Alpha</strong> — rotate sectors as valuations change.</p>
              <p>• <strong>Integrated ESG</strong> — fundamental + sustainability analysis informs bond picks.</p>
              <p>• <strong>Tactical Yield</strong> — overweight curve segments to exploit anomalies.</p>
              <p>• <strong>Risk Budgeting</strong> — allocate tracking error to high‑conviction ideas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section className="py-20 px-4 md:px-12 bg-indigo-600 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Bring Active Precision & Tax Efficiency to Your Bond Sleeve?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Download our playbook or connect with a Capital Group ETF specialist to
          map the role of CGCB, CGCP and CGMU in client portfolios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10"
        >
          <Button
            size="lg"
            variant="secondary"
            className="text-indigo-600 font-semibold bg-white rounded-2xl gap-2"
          >
            Get the Playbook <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
