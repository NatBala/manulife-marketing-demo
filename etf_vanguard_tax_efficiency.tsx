"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VanguardETFTaxEfficiencyPage() {
  return (
    <div className="flex flex-col w-full bg-white text-gray-900">
      {/* ───────────── Hero ───────────── */}
      <section className="relative flex items-center justify-center h-[60vh] w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
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
            See why secondary‑market trading and in‑kind redemptions can give both
            active and passive ETFs a structural edge over traditional vehicles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8"
          >
            {/* Vanguard explainer with video */}
            <Link
              href="https://investor.vanguard.com/investor-resources-education/article/all-about-etfs"
              target="_blank"
            >
              <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                Watch the Video <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── Structural Advantages ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Two Structural <span className="text-purple-600">Levers</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Lever 1 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-700">
                1.&nbsp;Secondary‑Market&nbsp;Trading
              </h3>
              <p>• <strong>No Forced Sales</strong> — most investor trades occur shareholder‑to‑shareholder, sparing the fund from realizing gains.</p>
              <p>• <strong>Lower Turnover</strong> — managers aren’t raising cash for daily redemptions, reducing taxable events.</p>
              <p>• <strong>Transparent Pricing</strong> — live bids/asks aid price discovery, especially in bond markets.</p>
              <p>• <strong>Liquidity Buffer</strong> — reduces pressure on underlying markets during stress events.</p>
              <p className="text-sm text-gray-500">Note: Bond ETF tax benefits can be more muted versus equities because most return comes from income.</p>
            </CardContent>
          </Card>

          {/* Lever 2 */}
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-700">
                2.&nbsp;In‑Kind&nbsp;Redemptions
              </h3>
              <p>• <strong>Cap‑Gains Mitigation</strong> — redeeming APs take securities, not cash, exporting low‑basis lots.</p>
              <p>• <strong>Cost Efficiency</strong> — helps avoid commissions/market‑impact from selling positions.</p>
              <p>• <strong>Portfolio Purification</strong> — managers can “hand off” bonds or stocks they’d like to exit without distributing gains to remaining shareholders.</p>
              <p>• <strong>Active, Too</strong> — the same mechanism supports tax‑aware active ETFs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────── Myth Busting ───────── */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Busting the <span className="text-purple-600">Myths</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-purple-700">
                Myth 1: Only Passive ETFs Are Tax Efficient
              </h3>
              <p>
                Reality — vehicle structure matters. Thanks to in‑kind creation/redemption,
                ETFs—<em>including</em> active ones—can reduce fund‑level capital‑gains distributions.
                Vanguard reports that the vast majority of its ETFs paid <em>no</em> capital‑gains
                distribution in recent years.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-purple-700">
                Myth 2: ETFs Don’t Belong in Taxable Accounts
              </h3>
              <p>
                Reality — many investors use ETFs effectively in taxable accounts.
                Whether they fit depends on your asset location, time horizon and income.
                Consider pairing ETFs with thoughtful asset‑location and loss‑harvesting practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-gray-500 mt-6 text-center">
          This information is for educational purposes and is not tax advice. Tax treatment depends on individual circumstances and may change.
        </p>
      </section>

      {/* ───────── Advisor Use Cases ───────── */}
      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Five <span className="text-purple-600">Advisor Use Cases</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            <span key="TLH">
              ETF‑to‑ETF tax‑loss harvesting{" "}
              <a
                href="https://investor.vanguard.com/tools-calculators/etf-fund-comparison-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (compare candidates)
              </a>
            </span>,
            "Gifting appreciated positions",
            <span key="VTEB">
              Muni roll‑downs in{" "}
              <a
                href="https://advisors.vanguard.com/investments/products/vteb/vanguard-tax-exempt-bond-etf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                VTEB
              </a>
            </span>,
            "Core‑satellite reallocations",
            "Year‑end distribution management",
          ].map((item) => (
            <Card
              key={typeof item === "string" ? item : (item as any).key}
              className="shadow-xl rounded-2xl"
            >
              <CardContent className="p-6 md:p-8 space-y-3">
                <h3 className="text-lg font-semibold text-purple-700">{item}</h3>
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
      <section className="py-20 px-4 md:px-12 bg-purple-700 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Want&nbsp;to&nbsp;See&nbsp;the&nbsp;Numbers?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Explore dividend calendars, qualified dividend income figures, and
          distribution details to plan tax‑aware portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10"
        >
          {/* Vanguard Tax Center for advisors */}
          <Link href="https://advisors.vanguard.com/tax-center" target="_blank">
            <Button
              size="lg"
              variant="secondary"
              className="text-purple-700 font-semibold bg-white rounded-2xl gap-2"
            >
              Go to Vanguard Tax Center <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
