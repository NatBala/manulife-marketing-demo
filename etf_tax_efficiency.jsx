import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ETFTaxEfficiencyPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative flex items-center justify-center h-[60vh] w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
        <div className="text-center text-white px-4 md:px-0 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            ETF Tax Efficiency Explained
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-light"
          >
            See why secondary‑market trading and in‑kind redemptions give both
            active and passive ETFs a structural edge over traditional vehicles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
              Watch the Video <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ───── Structural Advantages ───── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Two Structural <span className="text-purple-600">Levers</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-700">
                1. Secondary‑Market Trading
              </h3>
              <p>• <strong>No Forced Sales</strong> — most investor trades occur shareholder‑to‑shareholder, sparing the fund from realizing gains.</p>
              <p>• <strong>Lower Turnover</strong> — managers aren’t raising cash for daily redemptions, reducing taxable events.</p>
              <p>• <strong>Transparent Pricing</strong> — live bids/asks help advisers see true cost of reallocation.</p>
              <p>• <strong>Liquidity Buffer</strong> — reduces pressure on underlying bond or stock markets in stress events.</p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-700">
                2. In‑Kind Redemptions
              </h3>
              <p>• <strong>Cap‑Gains Mitigation</strong> — redeeming APs take securities, not cash, exporting low‑basis lots.</p>
              <p>• <strong>Cost Efficiency</strong> — eliminates commissions/market‑impact of selling positions.</p>
              <p>• <strong>Portfolio Purification</strong> — managers can “hand off” bonds or stocks they’d like to exit without hitting remaining shareholders.</p>
              <p>• <strong>Equal Footing for Active</strong> — same mechanism fuels tax efficiency in research‑driven ETFs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───── Myth Busting ───── */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Busting the <span className="text-purple-600">Myths</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-purple-700">
                Myth 1: Only Passive ETFs Are Tax Efficient
              </h3>
              <p>
                Reality — turnover influences distributions, but vehicle
                structure matters more. Many active ETFs distribute{" "}
                <strong>80 % fewer gains</strong> than comparable active mutual
                funds.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-purple-700">
                Myth 2: ETFs Don’t Belong in Taxable Accounts
              </h3>
              <p>
                Reality — studies show ETFs, active <em>and</em> passive,
                delivered the highest after‑tax returns versus mutual funds and
                SMAs across most asset classes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───── Advisor Use Cases ───── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Five <span className="text-purple-600">Advisor Use Cases</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Tax‑loss harvesting swaps",
            "Gifting appreciated positions",
            "Muni roll‑downs in CGMU",
            "Core‑satellite reallocations",
            "Year‑round cap‑gain avoidance"
          ].map((item) => (
            <Card key={item} className="shadow-xl rounded-2xl">
              <CardContent className="p-6 md:p-8 space-y-3">
                <h3 className="text-lg font-semibold text-purple-700">{item}</h3>
                <p className="text-gray-700">
                  Practical, step‑by‑step guidance to implement this tactic in
                  client accounts.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section className="py-20 px-4 md:px-12 bg-purple-700 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Want to See the Numbers?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Download our tax‑efficiency white paper or book a one‑on‑one walkthrough
          with a Capital Group ETF specialist.
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
            className="text-purple-700 font-semibold bg-white rounded-2xl gap-2"
          >
            Get the Paper <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
