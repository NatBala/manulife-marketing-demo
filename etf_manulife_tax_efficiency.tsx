"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ManulifeETFTaxEfficiencyPage() {
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
            ETF&nbsp;Tax&nbsp;Efficiency&nbsp;Explained
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl font-light"
          >
            See how exchange‑traded mechanics—secondary‑market trading and
            in‑kind primary‑market flows—can help ETFs deliver tax‑aware outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            {/* Manulife ETF taxation explainer */}
            <Link
              href="https://www.manulifeim.com/retail/ca/en/viewpoints/tax-planning/exchange-traded-funds-taxation-deja-vu-all-over-again"
              target="_blank"
            >
              <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                Read the Explainer <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── Structural Advantages ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Two Structural <span className="text-emerald-700">Levers</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Lever 1 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">
                1.&nbsp;Secondary‑Market&nbsp;Trading
              </h3>
              <p>• <strong>No forced fund sales</strong> — most investor trades occur on‑exchange between buyers and sellers, so the fund typically doesn’t sell holdings to meet redemptions.</p>
              <p>• <strong>Lower turnover</strong> — fewer fund‑level trades can mean fewer realized gains to distribute.</p>
              <p>• <strong>Transparent pricing</strong> — live bids/asks aid price discovery, especially in bond ETFs.</p>
              <p>• <strong>Liquidity buffer</strong> — reduces pressure on underlying markets during stress.</p>
              <p className="text-sm text-gray-500">Mechanics summarized from Manulife’s ETF taxation article.</p>
            </CardContent>
          </Card>

          {/* Lever 2 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-700">
                2.&nbsp;In‑Kind&nbsp;Redemptions
              </h3>
              <p>• <strong>Cap‑gains mitigation</strong> — when creations/redemptions occur directly with the ETF, securities can be delivered in‑kind, allocating gains to the redeemer instead of remaining unitholders.</p>
              <p>• <strong>Cost efficiency</strong> — can help avoid commissions/market‑impact from selling positions.</p>
              <p>• <strong>Portfolio housekeeping</strong> — managers may “hand off” low‑basis lots without triggering broad distributions.</p>
              <p>• <strong>Active, too</strong> — the structure supports tax‑aware active ETFs as well as index ETFs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────── Myth Busting ───────── */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Busting the <span className="text-emerald-700">Myths</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-emerald-700">
                Myth 1: Only passive ETFs are tax efficient
              </h3>
              <p>
                Reality — structure matters. Manulife notes that ETF operations can lead to
                lower taxable distributions than traditional mutual fund trusts, and this applies to both index and systematically managed active approaches.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-emerald-700">
                Myth 2: ETFs don’t belong in taxable accounts
              </h3>
              <p>
                Reality — many investors use ETFs effectively in taxable accounts. Fit depends on the mix of income types, holding period, and asset‑location strategy.
                Review distribution histories and consider loss‑harvesting where appropriate.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Educational only — not tax advice. Tax treatment depends on individual circumstances and may change.
        </p>
      </section>

      {/* ───────── Advisor Use Cases ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Five <span className="text-emerald-700">Advisor Use Cases</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            <span key="TLH">
              ETF‑to‑ETF tax‑loss harvesting{" "}
              <a
                href="https://www.manulifeim.com/retail/ca/en/landing-page/etfs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (scan lineup)
              </a>
            </span>,
            <span key="TERM">
              Short‑term cash parking with{" "}
              <a
                href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                TERM
              </a>
            </span>,
            <span key="GBND">
              Global bond sleeve via{" "}
              <a
                href="https://www.manulifeim.com/content/dam/mim-ca/landing-page/product/pdf/manulife-smart-global-bond-etf-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GBND
              </a>
            </span>,
            <span key="BSKT">
              Core‑satellite reallocations with{" "}
              <a
                href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                BSKT
              </a>
            </span>,
            <span key="Distros">
              Year‑end distribution planning{" "}
              <a
                href="https://www.manulifeim.com/retail/ca/en/landing-page/distributions/exchange-traded-funds"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (distribution history)
              </a>
            </span>,
          ].map((item) => (
            <Card
              key={typeof item === "string" ? item : (item as any).key}
              className="shadow-xl rounded-2xl"
            >
              <CardContent className="p-6 md:p-8 space-y-3">
                <h3 className="text-lg font-semibold text-emerald-700">{item}</h3>
                <p className="text-gray-700">
                  Practical, step‑by‑step guidance to implement this tactic in client
                  accounts.
                </p>
              </CardContent>
            </Card>
          ))}
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
          Want&nbsp;to&nbsp;See&nbsp;Distribution&nbsp;Details?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Review Manulife’s ETF distribution breakdowns and recent cash distribution notices to plan tax‑aware portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href="https://www.manulifeim.com/retail/ca/en/landing-page/distributions/exchange-traded-funds" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
            >
              ETF Distribution Center <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://www.manulifeim.com/retail/ca/en/in-the-media/manulife-investment-management-announces-may-2025-cash-distributions-for-manulife-exchange-traded-funds-and-etf-series-of-manulife-funds" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
            >
              Latest Cash Distributions <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
