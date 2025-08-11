"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VanguardActiveFixedIncomeETFsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* ───────────── Hero ───────────── */}
      <section className="relative flex items-center justify-center h-[60vh] w-full bg-gradient-to-r from-emerald-600 via-blue-700 to-sky-700">
        <div className="text-center text-white px-4 md:px-0 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Why&nbsp;Lean&nbsp;into{" "}
            <span className="underline decoration-4">Vanguard’s Active Fixed-Income ETFs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-light"
          >
            Discover how Vanguard’s{" "}
            <a
              href="https://investor.vanguard.com/investment-products/etfs/profile/vcrb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              VCRB
            </a>
            ,{" "}
            <a
              href="https://investor.vanguard.com/investment-products/etfs/profile/vpls"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              VPLS
            </a>{" "}
            and{" "}
            <a
              href="https://investor.vanguard.com/investment-products/etfs/profile/vusb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              VUSB
            </a>{" "}
            combine the ETF structure with research-driven active management to pursue
            tax-aware returns, tight execution and real-time flexibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="https://advisors.vanguard.com/investments/etfs?asset_class=Fixed+Income&mgmtstyle=Active"
              target="_blank"
            >
              <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                Explore the ETFs <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── What Makes Them Different ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What&nbsp;Makes&nbsp;Vanguard’s Active Fixed-Income ETFs{" "}
          <span className="text-emerald-700">Different</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Lever 1 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">
                In-Kind Creation & Redemption
              </h3>
              <p>• <strong>Potential tax efficiency</strong> — in-kind primary-market transactions can help reduce fund-level capital-gains distributions.</p>
              <p>• <strong>Lower trading frictions</strong> — authorized-participant activity can limit forced selling, helping preserve NAV.</p>
              <p>• <strong>Cash-flow management</strong> — portfolios can stay more fully invested, reducing cash drag.</p>
              <p className="text-sm text-gray-500">
                Learn more: ETF tax mechanics and capital-gains distributions (Vanguard).
              </p>
            </CardContent>
          </Card>

          {/* Lever 2 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">Intraday Liquidity</h3>
              <p>• <strong>Real-time shifts</strong> — adjust duration/credit during the trading day, not just at the 4 p.m. close.</p>
              <p>• <strong>Price discovery</strong> — live bids/offers improve transparency in fast markets.</p>
              <p>
                • <strong>Flexible cash management</strong> — park functional cash in{" "}
                <a
                  href="https://investor.vanguard.com/investment-products/etfs/profile/vusb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  VUSB
                </a>
                , then redeploy as opportunities arise.
              </p>
              <p>• <strong>Hedging agility</strong> — enter/exit tactical positions around macro events.</p>
              <p>• <strong>Bid-ask control</strong> — scale orders to capture tighter spreads.</p>
            </CardContent>
          </Card>

          {/* Lever 3 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">Research-Driven Security Selection</h3>
              <p>
                • <strong>Beyond the index</strong> — active mandates in{" "}
                <a
                  href="https://investor.vanguard.com/investment-products/etfs/profile/vpls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  VPLS
                </a>{" "}
                and{" "}
                <a
                  href="https://investor.vanguard.com/investment-products/etfs/profile/vcrb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  VCRB
                </a>{" "}
                enable sector rotation and selective out-of-benchmark exposures.
              </p>
              <p>• <strong>Credit insights</strong> — Vanguard Fixed Income Group’s global analyst bench informs issuer selection.</p>
              <p>• <strong>Risk budgeting</strong> — disciplined use of duration, curve and sector tilts to pursue excess return.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="py-20 px-4 md:px-12 bg-emerald-600 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Bring Active Precision & Tax-Aware Efficiency to Your Bond Sleeve?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Explore{" "}
          <a
            href="https://investor.vanguard.com/investment-products/etfs/profile/vcrb"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            VCRB
          </a>
          ,{" "}
          <a
            href="https://investor.vanguard.com/investment-products/etfs/profile/vpls"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            VPLS
          </a>{" "}
          and{" "}
          <a
            href="https://investor.vanguard.com/investment-products/etfs/profile/vusb"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            VUSB
          </a>{" "}
          to see how they may fit in client portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10"
        >
          <Link href="https://advisors.vanguard.com/strategies/fixed-income/active-fixed-income" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
            >
              Get the Active Fixed-Income Overview <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
