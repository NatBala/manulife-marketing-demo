import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StreamingProgress } from "@/types/streaming";

interface MichaelRodriguezContentProps {
  isGenerating?: boolean;
  generatedContent?: string;
  streamingProgress?: StreamingProgress;
}

const STREAMING_SECTIONS = [
  {
    id: 'hero',
    type: 'hero' as const,
    title: 'Why Lean into Manulife\'s Active Fixed‑Income ETFs',
    content: ['Explore how <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt" target="_blank" rel="noopener noreferrer" class="underline font-semibold">BSKT</a>, <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd" target="_blank" rel="noopener noreferrer" class="underline font-semibold">CBND</a> and <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term" target="_blank" rel="noopener noreferrer" class="underline font-semibold">TERM</a> combine the ETF structure with Manulife\'s active fixed‑income research to pursue tax‑aware income, competitive execution, and real‑time flexibility.'],
    hasLinks: true
  },
  {
    id: 'inkind',
    type: 'content' as const,
    title: 'In‑Kind Creation & Redemption',
    content: [
      'Potential tax efficiency — exchange‑level trading and primary‑market in‑kind activity can reduce fund‑level capital‑gains distributions.',
      'Lower trading frictions — authorized‑participant flows can help limit forced selling, supporting NAV.',
      'Cash‑flow management — portfolios can stay more fully invested, reducing cash drag.',
      'Tax‑aware outcomes — <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt" target="_blank" rel="noopener noreferrer" class="underline">BSKT</a>, <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd" target="_blank" rel="noopener noreferrer" class="underline">CBND</a>, <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term" target="_blank" rel="noopener noreferrer" class="underline">TERM</a> leverage ETF structure for tax‑efficient income.'
    ]
  },
  {
    id: 'liquidity',
    type: 'content' as const,
    title: 'Intraday Liquidity',
    content: [
      'Real‑Time Shifts — adjust duration/credit throughout the day, not just at 4 p.m.',
      'Price Discovery — live bids offer transparency in volatile bond markets.',
      'Flexible cash — park functional cash in <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term" target="_blank" rel="noopener noreferrer" class="underline">TERM</a> and redeploy as opportunities arise.',
      'Hedging Agility — enter/exit tactical positions around Fed announcements.',
      'Bid‑Ask Control — scale orders to capture tighter spreads.'
    ]
  },
  {
    id: 'research',
    type: 'content' as const,
    title: 'Research‑Driven Security Selection',
    content: [
      'Beyond the broad market — active mandates in <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt" target="_blank" rel="noopener noreferrer" class="underline">BSKT</a> and <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd" target="_blank" rel="noopener noreferrer" class="underline">CBND</a> enable sector rotation and selective credit exposure.',
      'Research insights — Manulife\'s fixed income research team informs sector rotation and credit selection.',
      'Risk Budgeting — disciplined use of duration, curve and sector tilts to pursue excess return.',
      'Portfolio construction — leverage Manulife\'s research capabilities for enhanced security selection.',
      'Active Management — combine the benefits of ETF structure with professional portfolio management.'
    ]
  },
  {
    id: 'cta',
    type: 'cta' as const,
    title: 'Ready to Bring Active Precision & Tax-Aware Efficiency to Your Bond Sleeve?',
    content: ['Explore <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-core-bond-etf-a-bskt" target="_blank" rel="noopener noreferrer" class="underline font-semibold">BSKT</a>, <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-corporate-bond-etf-a-cbnd" target="_blank" rel="noopener noreferrer" class="underline font-semibold">CBND</a> and <a href="https://www.manulifeim.com/retail/ca/en/investments/etf/manulife-smart-short-term-bond-etf-a-term" target="_blank" rel="noopener noreferrer" class="underline font-semibold">TERM</a> to see how they may fit in client portfolios.']
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

export const MichaelRodriguezContent = ({ isGenerating, generatedContent, streamingProgress }: MichaelRodriguezContentProps) => {
  if (isGenerating && !streamingProgress) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If no streaming progress, show completed content
  const { currentSection, textProgress, isComplete } = streamingProgress || { 
    currentSection: 4, 
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
          className="relative flex items-center justify-center h-[40vh] w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700"
        >
          <div className="text-center text-white px-4 md:px-0 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              <span className="underline decoration-4">
                <StreamingText text={STREAMING_SECTIONS[0].title} progress={getSectionTextProgress(0)} />
              </span>
            </h1>
            {getSectionTextProgress(0) > STREAMING_SECTIONS[0].title.split(' ').length && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-lg font-light"
              >
                <StreamingText 
                  text={STREAMING_SECTIONS[0].content[0]} 
                  progress={getSectionTextProgress(0) - STREAMING_SECTIONS[0].title.split(' ').length} 
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
                <a href="https://advisors.vanguard.com/investments/etfs?asset_class=Fixed+Income&mgmtstyle=Active" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-2xl text-lg font-semibold gap-2">
                    Explore the ETFs <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}

      {/* Content Sections */}
      {shouldShowSection(1) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-gray-50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Makes Manulife's Active Fixed‑Income ETFs{" "}
            <span className="text-emerald-600">Work</span>
          </h2>
          <div className="space-y-6">
            {/* In-Kind Creation & Redemption */}
            {shouldShowSection(1) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">🔄</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {STREAMING_SECTIONS[1].title}
                        </h3>
                        <p className="text-gray-600 text-sm">Key advantages for portfolio optimization</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {STREAMING_SECTIONS[1].content.map((item, index) => {
                        const wordProgress = getSectionTextProgress(1);
                        let cumulativeWords = 0;
                        for (let i = 0; i < index; i++) {
                          cumulativeWords += STREAMING_SECTIONS[1].content[i].split(' ').length;
                        }
                        const shouldShow = wordProgress > cumulativeWords;
                        const itemProgress = Math.max(0, wordProgress - cumulativeWords);
                        
                        return shouldShow ? (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div className="text-gray-700 leading-relaxed">
                              <StreamingText text={item} progress={itemProgress} />
                            </div>
                          </motion.div>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Intraday Liquidity */}
            {shouldShowSection(2) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-600"></div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {STREAMING_SECTIONS[2].title}
                        </h3>
                        <p className="text-gray-600 text-sm">Real-time trading flexibility</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {STREAMING_SECTIONS[2].content.map((item, index) => {
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
                            className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div className="text-gray-700 leading-relaxed">
                              <StreamingText text={item} progress={itemProgress} />
                            </div>
                          </motion.div>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Research-Driven Security Selection */}
            {shouldShowSection(3) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600"></div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl">🔍</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {STREAMING_SECTIONS[3].title}
                        </h3>
                        <p className="text-gray-600 text-sm">Advanced security analysis</p>
                      </div>
                    </div>
                    <div className="space-y-4">
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
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div className="text-gray-700 leading-relaxed">
                              <StreamingText text={item} progress={itemProgress} />
                            </div>
                          </motion.div>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}

      {/* CTA */}
      {shouldShowSection(4) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 px-4 md:px-8 bg-emerald-600 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            <StreamingText text={STREAMING_SECTIONS[4].title} progress={getSectionTextProgress(4)} />
          </h3>
          {getSectionTextProgress(4) > STREAMING_SECTIONS[4].title.split(' ').length && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg max-w-2xl mx-auto"
            >
              <StreamingText 
                text={STREAMING_SECTIONS[4].content[0]} 
                progress={getSectionTextProgress(4) - STREAMING_SECTIONS[4].title.split(' ').length} 
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
              <a href="https://www.manulifeim.com/content/dam/mim-ca/landing-page/product/pdf/ETF-product-guide-en.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-emerald-600 font-semibold bg-white rounded-2xl gap-2"
                >
                  Download ETF Product Guide <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          )}
        </motion.section>
      )}
    </div>
  );
};