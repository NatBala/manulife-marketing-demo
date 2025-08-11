import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StreamingProgress } from "@/types/streaming";

interface SarahChenContentProps {
  isGenerating?: boolean;
  generatedContent?: string;
  streamingProgress?: StreamingProgress;
}

const STREAMING_SECTIONS = [
  {
    id: 'hero',
    type: 'hero' as const,
    title: 'ETF Tax Efficiency Explained',
    content: ['See how exchange‑traded mechanics—secondary‑market trading and in‑kind primary‑market flows—can help ETFs deliver tax‑aware outcomes.']
  },
  {
    id: 'overview',
    type: 'content' as const,
    title: 'How ETF Structure Drives Tax Efficiency',
    content: ['Most ETF shares change hands on the exchange through secondary‑market trading, so the fund typically doesn’t sell holdings to meet redemptions.', 'When creations/redemptions occur directly with the ETF, securities can be delivered in‑kind, allocating gains to the redeemer instead of remaining unitholders.', 'Managers can focus on portfolio construction rather than managing daily cash flows, potentially improving tax outcomes.']
  },
  {
    id: 'levers',
    type: 'content' as const,
    title: 'Two Structural Levers',
    content: [
      'No forced fund sales — most investor trades occur on‑exchange between buyers and sellers, so the fund typically doesn’t sell holdings to meet redemptions.',
      'Lower turnover — fewer fund‑level trades can mean fewer realized gains to distribute.',
      'Transparent pricing — live bids/asks aid price discovery, especially in bond ETFs.',
      'Liquidity buffer — reduces pressure on underlying markets during stress.',
      'Cap‑gains mitigation — when creations/redemptions occur directly with the ETF, securities can be delivered in‑kind, allocating gains to the redeemer instead of remaining unitholders.',
      'Cost efficiency — can help avoid commissions/market‑impact from selling positions.',
      'Portfolio housekeeping — managers may "hand off" low‑basis lots without triggering broad distributions.',
      'Active, too — the structure supports tax‑aware active ETFs as well as index ETFs.'
    ]
  },
  {
    id: 'myths',
    type: 'content' as const,
    title: 'Busting the Myths',
    content: [
      'Myth 1: Only passive ETFs are tax efficient - Reality: structure matters. Manulife notes that ETF operations can lead to lower taxable distributions than traditional mutual fund trusts, and this applies to both index and systematically managed active approaches.',
      'Myth 2: ETFs don’t belong in taxable accounts - Reality: many investors use ETFs effectively in taxable accounts. Fit depends on the mix of income types, holding period, and asset‑location strategy. Review distribution histories and consider loss‑harvesting where appropriate.'
    ]
  },
  {
    id: 'usecases',
    type: 'content' as const,
    title: 'Five Advisor Use Cases',
    content: ['ETF‑to‑ETF tax‑loss harvesting <a href="https://www.manulifeim.com/retail/ca/en/landing-page/etfs" target="_blank" rel="noopener noreferrer" class="underline">(scan lineup)</a>', 'Short‑term cash parking with <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term" target="_blank" rel="noopener noreferrer" class="underline">TERM</a>', 'Global bond sleeve via <a href="https://www.manulifeim.com/content/dam/mim-ca/landing-page/product/pdf/manulife-smart-global-bond-etf-en.pdf" target="_blank" rel="noopener noreferrer" class="underline">GBND</a>', 'Core‑satellite reallocations with <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt" target="_blank" rel="noopener noreferrer" class="underline">BSKT</a>', 'Year‑end distribution planning <a href="https://www.manulifeim.com/retail/ca/en/landing-page/distributions/exchange-traded-funds" target="_blank" rel="noopener noreferrer" class="underline">(distribution history)</a>']
  },
  {
    id: 'cta',
    type: 'cta' as const,
    title: 'Want to See Distribution Details?',
    content: ['Review Manulife’s ETF distribution breakdowns and recent cash distribution notices to plan tax‑aware portfolios.']
  }
];

const StreamingText = ({ text, progress }: { text: string; progress: number }) => {
  const words = text.split(' ');
  const visibleWords = words.slice(0, progress);
  const currentWord = words[progress];
  
  const renderContent = (content: string) => {
    if (content.includes('<a href=')) {
      return <span dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return content;
  };
  
  return (
    <span>
      {renderContent(visibleWords.join(' '))}
      {currentWord && (
        <>
          {visibleWords.length > 0 && ' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block"
          >
            {renderContent(currentWord)}
          </motion.span>
        </>
      )}
    </span>
  );
};

export const SarahChenContent = ({ isGenerating, generatedContent, streamingProgress }: SarahChenContentProps) => {
  if (isGenerating && !streamingProgress) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  // If no streaming progress, show completed content
  const { currentSection, textProgress, isComplete } = streamingProgress || { 
    currentSection: 5, 
    textProgress: Infinity, 
    isComplete: true 
  };
  const shouldShowSection = (sectionIndex: number) => currentSection >= sectionIndex;
  const getSectionTextProgress = (sectionIndex: number) => 
    currentSection === sectionIndex ? textProgress : (currentSection > sectionIndex ? Infinity : 0);

  return (
    <div className="flex flex-col w-full bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
      {/* Hero Section */}
      {shouldShowSection(0) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center h-[40vh] w-full bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-700"
        >
          <div className="text-center text-white px-4 md:px-0 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              ETF <span className="underline decoration-4">
                <StreamingText text="Tax Efficiency" progress={getSectionTextProgress(0)} />
              </span> Explained
            </h1>
            {getSectionTextProgress(0) > 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-lg font-light"
              >
                <StreamingText 
                  text={STREAMING_SECTIONS[0].content[0]} 
                  progress={getSectionTextProgress(0) - 3} 
                />
              </motion.p>
            )}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <a href="https://www.manulifeim.com/retail/ca/en/viewpoints/tax-planning/exchange-traded-funds-taxation-deja-vu-all-over-again" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                    Read the Explainer <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}

      {/* How ETF Structure Drives Tax Efficiency */}
      {shouldShowSection(1) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <StreamingText text={STREAMING_SECTIONS[1].title} progress={getSectionTextProgress(1)} />
          </h2>
          <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
            {STREAMING_SECTIONS[1].content.map((item, index) => {
              const wordProgress = getSectionTextProgress(1);
              let cumulativeWords = STREAMING_SECTIONS[1].title.split(' ').length;
              for (let i = 0; i < index; i++) {
                cumulativeWords += STREAMING_SECTIONS[1].content[i].split(' ').length;
              }
              const shouldShow = wordProgress > cumulativeWords;
              const itemProgress = Math.max(0, wordProgress - cumulativeWords);
              
              return shouldShow ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <StreamingText text={item} progress={itemProgress} />
                  </p>
                </motion.div>
              ) : null;
            })}
          </div>
        </motion.section>
      )}

      {/* Two Structural Levers */}
      {shouldShowSection(2) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-gray-50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Two Structural <span className="text-purple-600">Levers</span>
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            <Card className="shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      1. Secondary‑Market Trading
                    </h3>
                    <p className="text-gray-600 text-sm">Shareholder-to-shareholder trading</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {STREAMING_SECTIONS[2].content.slice(0, 4).map((item, index) => {
                    const wordProgress = getSectionTextProgress(2);
                    let cumulativeWords = 0;
                    for (let i = 0; i < index; i++) {
                      cumulativeWords += STREAMING_SECTIONS[2].content[i].split(' ').length;
                    }
                    const shouldShow = wordProgress > cumulativeWords;
                    const itemProgress = Math.max(0, wordProgress - cumulativeWords);
                    
                    return shouldShow ? (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-700 leading-relaxed">
                          <StreamingText text={item} progress={itemProgress} />
                        </div>
                      </motion.div>
                    ) : null;
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      2. In‑Kind Redemptions
                    </h3>
                    <p className="text-gray-600 text-sm">Securities-for-shares exchanges</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {STREAMING_SECTIONS[2].content.slice(4, 8).map((item, index) => {
                    const wordProgress = getSectionTextProgress(2);
                    let cumulativeWords = 0;
                    for (let i = 0; i < index + 4; i++) {
                      cumulativeWords += STREAMING_SECTIONS[2].content[i].split(' ').length;
                    }
                    const shouldShow = wordProgress > cumulativeWords;
                    const itemProgress = Math.max(0, wordProgress - cumulativeWords);
                    
                    return shouldShow ? (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg border border-pink-100 hover:bg-pink-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-700 leading-relaxed">
                          <StreamingText text={item} progress={itemProgress} />
                        </div>
                      </motion.div>
                    ) : null;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Myth Busting */}
      {shouldShowSection(3) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Busting the <span className="text-purple-600">Myths</span>
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {STREAMING_SECTIONS[3].content.map((item, index) => {
              const wordProgress = getSectionTextProgress(3);
              let cumulativeWords = 0;
              for (let i = 0; i < index; i++) {
                cumulativeWords += STREAMING_SECTIONS[3].content[i].split(' ').length;
              }
              const shouldShow = wordProgress > cumulativeWords;
              const itemProgress = Math.max(0, wordProgress - cumulativeWords);
              
              return shouldShow ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <Card className="shadow-lg rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-gray-700 leading-relaxed">
                        <StreamingText text={item} progress={itemProgress} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null;
            })}
          </div>
        </motion.section>
      )}

      {/* Five Advisor Use Cases */}
      {shouldShowSection(4) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-gray-50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Five <span className="text-purple-600">Advisor Use Cases</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {STREAMING_SECTIONS[4].content.map((item, index) => {
              const wordProgress = getSectionTextProgress(4);
              const shouldShow = wordProgress > index;
              
              return shouldShow ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="shadow-lg rounded-xl bg-white border border-indigo-200 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900 mb-1">
                            {item.includes('<a href=') ? (
                              <span dangerouslySetInnerHTML={{ __html: item }} />
                            ) : (
                              item
                            )}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Practical, step‑by‑step guidance to implement this tactic in client accounts.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null;
            })}
          </div>
        </motion.section>
      )}

      {/* CTA */}
      {shouldShowSection(5) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-emerald-700 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            <StreamingText text={STREAMING_SECTIONS[5].title} progress={getSectionTextProgress(5)} />
          </h3>
          {getSectionTextProgress(5) > STREAMING_SECTIONS[5].title.split(' ').length && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg max-w-2xl mx-auto"
            >
              <StreamingText 
                text={STREAMING_SECTIONS[5].content[0]} 
                progress={getSectionTextProgress(5) - STREAMING_SECTIONS[5].title.split(' ').length} 
              />
            </motion.p>
          )}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a href="https://www.manulifeim.com/retail/ca/en/landing-page/distributions/exchange-traded-funds" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-emerald-700 font-semibold bg-white rounded-2xl gap-2"
                >
                  ETF Distribution Center <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          )}
        </motion.section>
      )}
    </div>
  );
};