import { useState } from 'react';
import { motion } from 'framer-motion';
import { DateRangeLanding } from '@/components/DateRangeLanding';
import { IndustryResearch } from '@/components/IndustryResearch';
import { TopicSelector } from '@/components/TopicSelector';
import { AdvisorSelector } from '@/components/AdvisorSelector';
import { AdvisorProfile } from '@/components/AdvisorProfile';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { StreamingProgress } from '@/types/streaming';

type AppStep = 'daterange' | 'research' | 'topics' | 'advisors' | 'profiles';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('daterange');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedAdvisors, setSelectedAdvisors] = useState<string[]>([]);
  const [generatingContent, setGeneratingContent] = useState<Record<string, boolean>>({});
  const [generatedContent, setGeneratedContent] = useState<Record<string, string>>({});
  const [streamingProgress, setStreamingProgress] = useState<Record<string, StreamingProgress>>({});
  const [researchProgress, setResearchProgress] = useState<{ step: number; message: string; isActive: boolean }>({
    step: 0,
    message: '',
    isActive: false
  });

  const handleDateRangeComplete = () => {
    setCurrentStep('research');
  };

  const handleResearchProceed = () => {
    setCurrentStep('topics');
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentStep('advisors');
  };

  const handleAdvisorToggle = (advisor: string) => {
    setSelectedAdvisors(prev => {
      if (prev.includes(advisor)) {
        return prev.filter(a => a !== advisor);
      } else if (prev.length < 2) {
        return [...prev, advisor];
      }
      return prev;
    });
  };

  const handleProceedToProfiles = () => {
    setCurrentStep('profiles');
  };

  // Define section counts for each advisor
  const SECTION_COUNTS = {
    'Michael Rodriguez': 5, // hero, inkind, liquidity, research, cta
    'Sarah Chen': 6 // hero, overview, levers, myths, usecases, cta
  };

  const simulateStreamingContent = async () => {
    // Start generating for both advisors simultaneously
    const advisorList = selectedAdvisors;
    
    // Set generating state for both
    const generatingState = advisorList.reduce((acc, advisor) => {
      acc[advisor] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setGeneratingContent(generatingState);
    
    // Clear existing content and initialize streaming progress
    const emptyContent = advisorList.reduce((acc, advisor) => {
      acc[advisor] = '';
      return acc;
    }, {} as Record<string, string>);
    setGeneratedContent(emptyContent);

    const initialProgress = advisorList.reduce((acc, advisor) => {
      acc[advisor] = { currentSection: 0, textProgress: 0, isComplete: false };
      return acc;
    }, {} as Record<string, StreamingProgress>);
    setStreamingProgress(initialProgress);

    // Research progress simulation
    setResearchProgress({ step: 1, message: 'Connecting to manulifeim.com...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setResearchProgress({ step: 2, message: 'Fetching content from manulifeim.com/advisors...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setResearchProgress({ step: 3, message: 'Analyzing advisor profiles and performance data...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResearchProgress({ step: 4, message: 'Accessing Internal Knowledge Base...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResearchProgress({ step: 5, message: 'Retrieving content templates from Seismic...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setResearchProgress({ step: 6, message: 'Generating personalized marketing content...', isActive: true });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Hide research progress to allow content streaming to begin
    setResearchProgress({ step: 0, message: '', isActive: false });

    // Generate content for both advisors in parallel
    const contentPromises = advisorList.map(async (advisor) => {
      const content = generateMarketingContent(advisor);
      const sectionCount = SECTION_COUNTS[advisor as keyof typeof SECTION_COUNTS] || 5;
      
      // Stream through each section
      for (let section = 0; section < sectionCount; section++) {
        // Update to show this section
        setStreamingProgress(prev => ({
          ...prev,
          [advisor]: { currentSection: section, textProgress: 0, isComplete: false }
        }));
        
        // Simulate text streaming within the section (50-150 words per section)
        const wordsInSection = Math.floor(Math.random() * 100) + 50;
        for (let word = 1; word <= wordsInSection; word++) {
          await new Promise(resolve => setTimeout(resolve, 80));
          setStreamingProgress(prev => ({
            ...prev,
            [advisor]: { currentSection: section, textProgress: word, isComplete: false }
          }));
        }
        
        // Pause between sections
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // Mark as complete
      setStreamingProgress(prev => ({
        ...prev,
        [advisor]: { currentSection: sectionCount - 1, textProgress: Infinity, isComplete: true }
      }));
      setGeneratedContent(prev => ({ ...prev, [advisor]: content }));
      setGeneratingContent(prev => ({ ...prev, [advisor]: false }));
    });

    await Promise.all(contentPromises);
  };

  const generateMarketingContent = (advisor: string) => {
    // Return a simple marker that content should be displayed
    // The actual content is now rendered by the respective components
    return `Content generated for ${advisor}`;
  };

  const handleGenerateContent = () => {
    simulateStreamingContent();
  };

  const handleDownloadContent = () => {
    const content = selectedAdvisors.map(advisor => {
      const advisorName = advisor;
      const profileData = advisor === 'Michael Rodriguez' 
        ? 'Active Fixed-Income ETFs Marketing Content' 
        : 'ETF Tax Efficiency Marketing Content';
      
      return `
=== ${advisorName} - ${profileData} ===

${advisor === 'Michael Rodriguez' ? `
WHY LEAN INTO ACTIVE FIXED-INCOME ETFS

Discover how Capital Group's CGCB, CGCP and CGMU harness in-kind mechanics and active research to pursue higher after-tax returns, tighter spreads and real-time flexibility.

WHAT MAKES ACTIVE FIXED-INCOME ETFS DIFFERENT:

In-Kind Creation & Redemption:
• Tax Shielding — low-basis bonds exit with redeeming shareholders instead of triggering fund-wide gains
• Lower Friction Costs — avoids bid/ask spreads from forced sales, preserving NAV
• Year-End Discipline — CGCB, CGCP, CGMU historically pay little-to-no cap-gain distributions
• Portfolio Migration — seamless mutual-fund-to-ETF conversions without a tax bill
• Cash-Flow Efficiency — less cash drag; portfolios stay fully invested

Intraday Liquidity:
• Real-Time Shifts — adjust duration/credit throughout the day, not just at 4 p.m.
• Price Discovery — live bids offer transparency in volatile bond markets
• Flexible Cash Management — park idle cash in CGMU, redeploy at will
• Hedging Agility — enter/exit tactical positions around Fed announcements
• Bid-Ask Control — scale orders to capture tighter spreads

Research-Driven Security Selection:
• Beyond the Index — avoid concentration in the most indebted issuers
• Dynamic Alpha — rotate sectors as valuations change
• Integrated ESG — fundamental + sustainability analysis informs bond picks
• Tactical Yield — overweight curve segments to exploit anomalies
• Risk Budgeting — allocate tracking error to high-conviction ideas

Ready to Bring Active Precision & Tax Efficiency to Your Bond Sleeve? Connect with Michael Rodriguez to map the role of CGCB, CGCP and CGMU in client portfolios.
` : `
ETF TAX EFFICIENCY EXPLAINED

See why secondary-market trading and in-kind redemptions give both active and passive ETFs a structural edge over traditional vehicles.

HOW ETF STRUCTURE DRIVES TAX EFFICIENCY:

Two Structural Levers:

1. Secondary-Market Trading:
• No Forced Sales — most investor trades occur shareholder-to-shareholder, sparing the fund from realizing gains
• Lower Turnover — managers aren't raising cash for daily redemptions, reducing taxable events
• Transparent Pricing — live bids/asks help advisers see true cost of reallocation
• Liquidity Buffer — reduces pressure on underlying bond or stock markets in stress events

2. In-Kind Redemptions:
• Cap-Gains Mitigation — redeeming APs take securities, not cash, exporting low-basis lots
• Cost Efficiency — eliminates commissions/market-impact of selling positions
• Portfolio Purification — managers can "hand off" bonds or stocks they'd like to exit without hitting remaining shareholders
• Equal Footing for Active — same mechanism fuels tax efficiency in research-driven ETFs

Busting the Myths:

Myth 1: Only Passive ETFs Are Tax Efficient
Reality — turnover influences distributions, but vehicle structure matters more. Many active ETFs distribute 80% fewer gains than comparable active mutual funds.

Myth 2: ETFs Don't Belong in Taxable Accounts
Reality — studies show ETFs, active and passive, delivered the highest after-tax returns versus mutual funds and SMAs across most asset classes.

Five Advisor Use Cases:
• Tax-loss harvesting swaps
• Gifting appreciated positions
• Muni roll-downs in CGMU
• Core-satellite reallocations
• Year-round cap-gain avoidance

Want to See the Numbers? Download our tax-efficiency white paper or book a one-on-one walkthrough with Sarah Chen, your Capital Group ETF specialist.
`}

Generated on: ${new Date().toLocaleDateString()}
      `;
    }).join('\n\n' + '='.repeat(80) + '\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Marketing_Content_${selectedAdvisors.join('_and_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleBack = () => {
    if (currentStep === 'research') {
      setCurrentStep('daterange');
    } else if (currentStep === 'topics') {
      setCurrentStep('research');
    } else if (currentStep === 'advisors') {
      setCurrentStep('topics');
      setSelectedTopic('');
    } else if (currentStep === 'profiles') {
      setCurrentStep('advisors');
      setSelectedAdvisors([]);
      setGeneratedContent({});
      setGeneratingContent({});
      setStreamingProgress({});
      setResearchProgress({ step: 0, message: '', isActive: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === 'daterange' ? (
        <DateRangeLanding onComplete={handleDateRangeComplete} />
      ) : currentStep === 'research' ? (
        <IndustryResearch onProceed={handleResearchProceed} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <div 
              onClick={handleBack}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer h-10 px-4 py-2 shadow-sm bg-white text-gray-700 border-gray-300"
              style={{ 
                backgroundColor: 'white !important',
                color: '#374151 !important',
                border: '1px solid #d1d5db !important',
                transition: 'all 0.2s !important'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
                e.currentTarget.style.setProperty('border-color', '#9ca3af', 'important');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('background-color', 'white', 'important');
                e.currentTarget.style.setProperty('border-color', '#d1d5db', 'important');
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
            {currentStep === 'topics' && (
              <TopicSelector onTopicSelect={handleTopicSelect} />
            )}

            {currentStep === 'advisors' && (
              <AdvisorSelector
                selectedAdvisors={selectedAdvisors}
                onAdvisorToggle={handleAdvisorToggle}
                onProceed={handleProceedToProfiles}
              />
            )}

            {currentStep === 'profiles' && (
              <div className="w-full max-w-7xl">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-center mb-8 text-gray-900"
                >
                  Advisor Comparison & Marketing Content Generation
                </motion.h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {selectedAdvisors.map((advisor, index) => (
                    <AdvisorProfile
                      key={advisor}
                      advisor={advisor}
                      isGenerating={generatingContent[advisor] || false}
                      generatedContent={generatedContent[advisor] || ''}
                      streamingProgress={streamingProgress[advisor]}
                      showContent={!researchProgress.isActive}
                    />
                  ))}
                </div>
                
                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mt-8 space-y-6"
                >
                  <Button 
                    onClick={handleGenerateContent}
                    disabled={Object.values(generatingContent).some(Boolean) || researchProgress.isActive}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg text-white font-semibold px-12 py-4 text-lg transition-all duration-300"
                  >
                    {Object.values(generatingContent).some(Boolean) || researchProgress.isActive ? 'Generating Marketing Content...' : 'Generate Marketing Content for Both Advisors'}
                  </Button>

                  {/* Research Progress Indicator - moved below button */}
                  {researchProgress.isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 max-w-2xl mx-auto"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">AI Research in Progress</h4>
                          <p className="text-blue-600 font-medium">{researchProgress.message}</p>
                          <div className="mt-2 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(researchProgress.step / 6) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Step {researchProgress.step} of 6</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Download Button - only show after content is generated */}
                  {Object.values(generatedContent).some(content => content) && !researchProgress.isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button 
                        onClick={handleDownloadContent}
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg transition-all duration-300"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Marketing Content
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
