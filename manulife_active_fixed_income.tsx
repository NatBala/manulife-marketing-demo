"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ManulifeActiveFixedIncomeETFsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* ───────────── Hero ───────────── */}
      <section className="relative flex items-center justify-center h-[60vh] w-full bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-700">
        <div className="text-center text-white px-4 md:px-0 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Why&nbsp;Lean&nbsp;into{" "}
            <span className="underline decoration-4">Manulife’s Active&nbsp;Fixed‑Income&nbsp;ETFs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-light"
          >
            Explore how{" "}
            <a
              href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              BSKT
            </a>
            ,{" "}
            <a
              href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              CBND
            </a>{" "}
            and{" "}
            <a
              href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              TERM
            </a>{" "}
            combine the ETF structure with Manulife’s active fixed‑income research to pursue
            tax‑aware income, competitive execution, and real‑time flexibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="https://www.manulifeim.com/retail/ca/en/landing-page/etfs"
              target="_blank"
            >
              <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                Explore Manulife ETFs <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── What Makes Them Different ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What&nbsp;Makes&nbsp;Active Fixed‑Income ETFs{" "}
          <span className="text-emerald-700">Work</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Lever 1 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">
                In‑Kind Creation & Redemption
              </h3>
              <p>• <strong>Potential tax efficiency</strong> — exchange‑level trading and primary‑market in‑kind activity can reduce fund‑level capital‑gains distributions.</p>
              <p>• <strong>Lower trading frictions</strong> — authorized‑participant flows can help limit forced selling, supporting NAV.</p>
              <p>• <strong>Cash‑flow management</strong> — portfolios can stay more fully invested, reducing cash drag.</p>
              <p className="text-sm text-gray-500">
                Learn more: Manulife on ETF taxation & distributions.
              </p>
            </CardContent>
          </Card>

          {/* Lever 2 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">Intraday Liquidity</h3>
              <p>• <strong>Real‑time shifts</strong> — adjust duration/credit during the trading day, not just at the 4&nbsp;p.m. close.</p>
              <p>• <strong>Price discovery</strong> — live bids/offers aid transparency in fast markets.</p>
              <p>
                • <strong>Flexible cash</strong> — park functional cash in{" "}
                <a
                  href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  TERM
                </a>{" "}
                and redeploy as opportunities arise.
              </p>
              <p>• <strong>Hedging agility</strong> — enter/exit tactical positions around macro events.</p>
            </CardContent>
          </Card>

          {/* Lever 3 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">Research‑Driven Selection</h3>
              <p>• <strong>Beyond the broad market</strong> — active mandates in{" "}
                <a
                  href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  BSKT
                </a>{" "}
                and{" "}
                <a
                  href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  CBND
                </a>{" "}
                enable sector rotation and selective credit exposure.
              </p>
              <p>• <strong>Short‑duration toolkit</strong> — use{" "}
                <a
                  href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  TERM
                </a>{" "}
                when you need liquidity and rate‑sensitivity control.</p>
              <p>• <strong>Risk budgeting</strong> — apply duration, curve, and sector tilts with discipline.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="py-20 px-4 md:px-12 bg-emerald-700 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to apply active precision & tax‑aware efficiency to your bond sleeve?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Review Manulife’s active fixed‑income insights and ETF lineup to determine fit for client portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href="https://www.manulifeim.com/retail/ca/en/viewpoints/etf/adding-value-with-active-fixed-income-etfs" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
            >
              Active Fixed‑Income Overview <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://www.manulifeim.com/content/dam/mim-ca/landing-page/product/pdf/ETF-product-guide-en.pdf" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
            >
              Download ETF Product Guide <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
