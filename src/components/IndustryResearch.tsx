import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, ArrowLeft, TrendingUp, DollarSign, Users, BarChart3, Target, Zap, MessageCircle, Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface IndustryResearchProps {
  onProceed: () => void;
}

interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  frequency: number;
  themes: Theme[];
}

interface Theme {
  id: string;
  name: string;
  description: string;
  subThemes: SubTheme[];
}

interface SubTheme {
  id: string;
  name: string;
  description: string;
  examples: string[];
}

interface ExampleWithVisitId {
  text: string;
  visitId: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Function to generate 18-digit alphanumeric visit IDs
const generateVisitId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 18; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const topics: Topic[] = [
  {
    id: 'etf-models',
    name: 'ETFs & ETF Models',
    icon: '📈',
    frequency: 80,
    description: 'ETFs and ETF models are the most frequently discussed topic (~80%), reflecting a strong industry shift toward these vehicles for both core and tactical allocations',
    themes: [
      {
        id: 'scalability-efficiency',
        name: 'Scalability & Operational Efficiency',
        description: 'Model portfolios built entirely with ETFs allow one-to-many implementation and dramatically reduce time spent on manual rebalancing',
        subThemes: [
          {
            id: 'portfolio-automation',
            name: 'Portfolio Assistant & Rebalancing Tools',
            description: 'Advanced automation tools for ETF portfolio management',
            examples: [
              'Portfolio assistant and rebalancer tools let advisors apply "paper models" across hundreds of accounts in minutes',
              'Freeing advisors to focus on planning and relationship work instead of manual rebalancing',
              'One-to-many implementation across diverse client portfolios',
              'Automated rebalancing triggers based on drift thresholds',
              'Real-time portfolio monitoring and alert systems',
              'Batch processing for multiple account updates',
              'Integration with custodial platforms for seamless execution',
              'Performance attribution tracking at the model level'
            ]
          },
          {
            id: 'cost-transparency',
            name: 'Cost Transparency & Fee Savings',
            description: 'Clear cost structure advantages of ETFs over traditional mutual funds',
            examples: [
              'No loads, no 12b-1 fees providing complete cost transparency',
              'Measurable fee savings demonstrated in client comparisons',
              'Proof points when transitioning households away from legacy mutual-fund-only line-ups',
              'Lower expense ratios compared to actively managed mutual funds',
              'Elimination of hidden distribution fees and marketing charges',
              'Real-time pricing with no fair value adjustments',
              'Transparent holdings disclosed daily',
              'Competitive bidding through exchange trading mechanisms'
            ]
          }
        ]
      },
      {
        id: 'platform-integration',
        name: 'Platform Integration & Structure',
        description: 'ETF structure, comparisons to mutual funds, and integration into platforms like MWP and Freedom',
        subThemes: [
          {
            id: 'trading-mechanics',
            name: 'Intraday Trading & Spread Management',
            description: 'Technical aspects of ETF trading and liquidity management',
            examples: [
              'Intraday trading capabilities for tactical allocation adjustments',
              'Bid-ask spread optimization through market maker competition',
              'In-kind creation/redemption mechanism that "washes out" low-basis lots',
              'Capital-gains distribution mitigation through tax-efficient structure',
              'Real-time NAV pricing for accurate execution',
              'Arbitrage mechanisms ensuring price-to-NAV alignment',
              'Market maker liquidity provision during volatile periods',
              'Extended trading hours for international ETF exposure'
            ]
          },
          {
            id: 'platform-adoption',
            name: 'Platform Adoption & Integration',
            description: 'ETF adoption across major advisory platforms',
            examples: [
              'Highest adoption where platforms (LPL MWP, Wells Fargo UMA/Freedom) removed ticket charges',
              'Auto-rebalancing capabilities eliminating operational friction',
              'Seamless integration with existing advisory technology stacks',
              'Reduced operational friction that once favored mutual funds',
              'Enhanced portfolio construction tools within platform ecosystems',
              'Streamlined onboarding processes for ETF-based models',
              'Consolidated reporting across ETF holdings',
              'Risk management overlays for multi-ETF portfolios'
            ]
          }
        ]
      },
      {
        id: 'thematic-active',
        name: 'Thematic & Active ETFs',
        description: 'Growing traction in thematic and active ETFs with advisors seeking sector-specific and strategy-driven solutions',
        subThemes: [
          {
            id: 'sector-tilts',
            name: 'Precise Sector Tilts',
            description: 'Targeted sector exposure for portfolio optimization',
            examples: [
              'Technology, industrials, financials, healthcare sector tilts',
              'Correction of portfolio imbalances through targeted exposure',
              'Forward-looking story development in client reviews',
              'Sector rotation strategies based on economic cycles',
              'Thematic exposures including CGDV, CGIE, and CGGR',
              'Regional focus adjustments for global diversification',
              'Industry-specific expertise through specialized ETFs',
              'Tactical overlays for market timing opportunities'
            ]
          },
          {
            id: 'megatrend-sleeves',
            name: 'Megatrend Investment Sleeves',
            description: 'Long-term thematic investment opportunities',
            examples: [
              'AI and automation technology trends',
              'Cybersecurity infrastructure development',
              'Clean energy transition investments',
              'Healthcare innovation and biotechnology',
              'Manufacturing renaissance and reshoring',
              'Demographic shifts and aging population trends',
              'Digital transformation and cloud computing',
              'Sustainable investing and ESG integration'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'market-outlook',
    name: 'Market Outlook & Volatility',
    icon: '📊',
    frequency: 75,
    description: 'Market outlook, volatility, and macroeconomic updates are core parts of nearly every advisor conversation (~75%)',
    themes: [
      {
        id: 'communication-tools',
        name: 'Communication Tools & Client Education',
        description: 'Quarterly "Outlook/IM Deck" slides and ICA Guide materials for framing volatility discussions',
        subThemes: [
          {
            id: 'volatility-frameworks',
            name: 'Volatility Communication Frameworks',
            description: 'Tools and materials for explaining market volatility to clients',
            examples: [
              'Mountain and Yo-Yo charts to frame volatility as "normal, natural, necessary"',
              'Five-to-seven-minute market update videos embedded into virtual client events',
              'Recordings emailed with timestamped topic links for asynchronous viewing',
              'Scenario analyses comparing short-term blips vs. prolonged disruption',
              'Portfolio analytics software modeling potential drawdowns and recoveries',
              'Stress-test outputs (2008 replay, pandemic crash) for risk budget validation',
              'Quality-tilt frameworks: "Dividends, Duration, Don\'t Abandon International"',
              'Client education materials explaining market cycle patterns'
            ]
          },
          {
            id: 'economic-indicators',
            name: 'Key Economic Indicators',
            description: 'Top economic metrics referenced in advisor conversations',
            examples: [
              'Fed policy and yield-curve shape analysis',
              'CPI/PCE "sticky" inflation prints and trends',
              'Tariff headline risk and trade policy impacts',
              'Sector concentration concerns ("Mag 7" dominance)',
              'Global PMIs and international economic indicators',
              'Employment data and wage growth trends',
              'Consumer spending patterns and confidence metrics',
              'Corporate earnings growth and margin pressures'
            ]
          }
        ]
      },
      {
        id: 'portfolio-positioning',
        name: 'Portfolio Positioning Strategies',
        description: 'Guidance on navigating current market conditions including volatility, inflation, and economic uncertainty',
        subThemes: [
          {
            id: 'quality-focus',
            name: 'Quality Investment Focus',
            description: 'Emphasis on higher-quality investments during uncertain periods',
            examples: [
              'Rebalancing into higher-quality bonds with strong credit ratings',
              'Dividend growers with sustainable payout ratios',
              'Non-US equities for geographic diversification',
              'Companies with strong balance sheets and low debt levels',
              'Defensive sectors with stable cash flows',
              'Quality factor tilts in equity allocations',
              'Investment-grade corporate bonds over high-yield',
              'Large-cap bias over small-cap in volatile periods'
            ]
          },
          {
            id: 'risk-management',
            name: 'Risk Management Approaches',
            description: 'Strategies for managing portfolio risk during market uncertainty',
            examples: [
              'Proposed model-portfolio mixes within client risk budgets',
              'Diversification across asset classes and geographies',
              'Hedging strategies for tail risk protection',
              'Cash positioning for opportunistic rebalancing',
              'Volatility management through low-vol factor exposure',
              'Currency hedging for international exposures',
              'Duration management in fixed income allocations',
              'Alternative investments for return enhancement'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sma',
    name: 'SMAs (Separately Managed Accounts)',
    icon: '🎯',
    frequency: 40,
    description: 'SMAs are frequently discussed (~40%), especially for high-net-worth clients seeking customization, tax optimization, or direct indexing',
    themes: [
      {
        id: 'customization-features',
        name: 'Key Customization Features',
        description: 'Primary customization levers available through SMA structures',
        subThemes: [
          {
            id: 'screening-restrictions',
            name: 'ESG/Values Screens & Restrictions',
            description: 'Values-based investing and security restriction capabilities',
            examples: [
              'ESG/values screens for socially responsible investing',
              'Sector/stock restrictions (e.g., exclude employer stock)',
              'Religious and faith-based screening criteria',
              'Environmental sustainability requirements',
              'Tobacco, weapons, and fossil fuel exclusions',
              'Corporate governance standards and voting policies',
              'Social impact investing criteria',
              'Custom screening based on client values and beliefs'
            ]
          },
          {
            id: 'tax-strategies',
            name: 'Tax Optimization Strategies',
            description: 'Advanced tax planning through SMA customization',
            examples: [
              'State-specific muni ladders for tax-efficient income',
              'Dividend-yield targets for income-focused portfolios',
              'Tax-alpha generation via loss-harvesting techniques',
              'In-kind transitions of low-basis stock positions',
              'Glidepath sale schedules to unwind concentration over multiple tax years',
              'Tax-loss harvesting with individual security holdings',
              'Roth conversion optimization strategies',
              'Generation-skipping trust planning integration'
            ]
          }
        ]
      },
      {
        id: 'platform-availability',
        name: 'Platform Availability & Integration',
        description: 'SMA availability on platforms like MWP and UMA, and pairing with ETF models',
        subThemes: [
          {
            id: 'platform-challenges',
            name: 'Platform Integration Challenges',
            description: 'Current limitations and approval processes for SMA access',
            examples: [
              'Certain SMAs (e.g., muni strategies) not yet approved on all fee-based platforms',
              'Advisors lobbying for expedited due-diligence reviews',
              'Platform-specific restrictions on SMA minimums',
              'Integration complexity with existing advisory technology',
              'Custody and settlement considerations across platforms',
              'Reporting standardization across different SMA providers',
              'Performance attribution challenges in multi-manager accounts',
              'Fee transparency and billing integration requirements'
            ]
          },
          {
            id: 'hybrid-construction',
            name: 'Hybrid Portfolio Construction',
            description: 'Best-of-both-worlds approach combining ETFs and SMAs',
            examples: [
              'ETF core plus SMA satellite positioning',
              'Best-of-both-worlds for clients needing customization and tax-efficiency',
              'Cost optimization through strategic ETF/SMA allocation',
              'Liquidity management across different vehicle types',
              'Risk budgeting between passive ETF core and active SMA satellites',
              'Tax coordination between ETF and SMA holdings',
              'Rebalancing strategies across hybrid structures',
              'Performance monitoring and attribution across vehicle types'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'fixed-income',
    name: 'Fixed Income & Bond Strategies',
    icon: '💰',
    frequency: 35,
    description: 'Fixed income and bond strategies are major focus areas (~35%), especially regarding market volatility and rising rates',
    themes: [
      {
        id: 'duration-strategies',
        name: 'Duration & Yield Curve Strategies',
        description: 'Tactical approaches to interest rate risk and yield optimization',
        subThemes: [
          {
            id: 'sweet-spot-duration',
            name: 'Intermediate-Term Sweet Spot',
            description: 'Optimal duration positioning for yield-to-duration efficiency',
            examples: [
              'Intermediate-term "sweet-spot" duration (3-7 years) for yield-to-duration efficiency',
              'Analytics showing favorable starting yields without excessive interest-rate risk',
              'Short-duration and multisector bond ETFs/funds (CGSD, CGCP) as cash alternatives',
              'Barbell complements when laddering treasuries feels operationally burdensome',
              'Duration hedging strategies using Treasury futures',
              'Curve positioning based on Fed policy expectations',
              'Roll-down strategies for total return enhancement',
              'Active duration management versus static approaches'
            ]
          },
          {
            id: 'muni-strategies',
            name: 'Municipal Bond Strategies',
            description: 'Tax-aware fixed income through municipal securities',
            examples: [
              'Muni SMAs and funds positioned for tax-aware accounts',
              'Customized state ladders and duration buckets',
              'Sample proposals and tax-equivalent yield worksheets',
              'State-specific strategies for high-tax jurisdictions',
              'Credit quality analysis for municipal issuers',
              'Revenue bond vs. general obligation considerations',
              'AMT implications for high-income clients',
              'Build America Bonds and taxable muni opportunities'
            ]
          }
        ]
      },
      {
        id: 'active-management',
        name: 'Active Fixed Income Management',
        description: 'Active management approaches in fixed income investing',
        subThemes: [
          {
            id: 'active-etfs',
            name: 'Active Fixed Income ETFs',
            description: 'Professional management within ETF structures for bonds',
            examples: [
              'Active fixed-income ETFs gaining attention for "actively managing the curve"',
              'Addressing reinvestment risk versus static ladders',
              'Professional credit selection and sector rotation',
              'Duration and yield curve positioning flexibility',
              'Corporate credit analysis and security selection',
              'Opportunistic trading during market dislocations',
              'Risk management through professional oversight',
              'Transparent daily holdings with active management benefits'
            ]
          },
          {
            id: 'specialized-solutions',
            name: 'Core & Specialized Solutions',
            description: 'Range of fixed income solutions for different client needs',
            examples: [
              'Core and specialized fixed income solutions',
              'Intermediate-term strategies for balanced risk/return',
              'Tax-aware models (Conservative Growth & Income, Tax-Aware Core)',
              'Integration of muni, core, and short-duration sleeves',
              'Yield/SEC yield factsheets displaying after-tax benefits',
              'Portfolio analytics comparing bond-fund Sharpe ratios',
              'Downside capture and credit-quality tilt analysis',
              'Overlay strategies on client IPS targets'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'thematic-themes',
    name: 'Thematic & Key Investment Themes',
    icon: '🎲',
    frequency: 30,
    description: '"Key Themes to Investing in 2025" and similar frameworks are widely used (~30%) to structure conversations and presentations',
    themes: [
      {
        id: 'megatrend-themes',
        name: 'Megatrend Investment Themes',
        description: 'Long-term structural themes driving investment opportunities',
        subThemes: [
          {
            id: 'technology-innovation',
            name: 'AI & Technology Innovation',
            description: 'Artificial intelligence and technological advancement opportunities',
            examples: [
              'AI CAPEX cycles and infrastructure investment requirements',
              'Semiconductor and chip manufacturing supply chain investments',
              'Cloud computing and data center expansion trends',
              'Cybersecurity infrastructure and software solutions',
              'Automation and robotics across industries',
              'Machine learning and data analytics applications',
              'Digital transformation across traditional industries',
              'Edge computing and 5G network infrastructure development'
            ]
          },
          {
            id: 'manufacturing-healthcare',
            name: 'Manufacturing Renaissance & Healthcare',
            description: 'Industrial reshoring and healthcare innovation themes',
            examples: [
              'Manufacturing renaissance and reshoring beneficiaries',
              'Supply chain diversification away from single-source dependencies',
              'Healthcare/biotech innovation driven by demographic trends',
              'Aging population creating sustained healthcare demand',
              'Biotechnology and pharmaceutical research advancement',
              'Medical device innovation and minimally invasive procedures',
              'Digital health and telemedicine adoption',
              'Personalized medicine and genomic therapies'
            ]
          }
        ]
      },
      {
        id: 'implementation-tools',
        name: 'Implementation Tools & Frameworks',
        description: 'Practical tools for communicating themes and managing client relationships',
        subThemes: [
          {
            id: 'presentation-tools',
            name: 'Presentation & Education Tools',
            description: 'Materials and frameworks for client communication',
            examples: [
              '30-minute investor events (often hybrid) with PDF send-outs',
              'Engagement measured via attendance, poll responses, and post-event meeting requests',
              'Supplementary slides on AI CAPEX cycles, reshoring beneficiaries',
              'Demographic drivers of healthcare/biotech demand analysis',
              'Implementation vehicles compared on cost, track record, and liquidity',
              'Thematic ETFs vs. active PM solutions comparison',
              'Concise, actionable frameworks to communicate with clients',
              '5-Keys brochure prized for one-page summaries and sticky phrases'
            ]
          },
          {
            id: 'behavioral-coaching',
            name: 'Behavioral Coaching Integration',
            description: 'Combining thematic investing with behavioral finance principles',
            examples: [
              'Keys to Prevailing behavioral coaching framework',
              'Four-Step Action Plan for disciplined investing',
              'Market-volatility classics cross-referenced with thematic stories',
              'Reinforcement of discipline through thematic narratives',
              'Desk reference materials during volatility calls',
              'Sticky phrases and memorable analogies for client retention',
              'Long-term perspective maintenance during market stress',
              'Education on patience and conviction in thematic investing'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tariffs-macro',
    name: 'Tariffs & Macroeconomic Issues',
    icon: '🌍',
    frequency: 20,
    description: 'Tariffs, trade policy, and macroeconomic uncertainty are recurring topics (~20%), often linked to market volatility and client anxiety',
    themes: [
      {
        id: 'policy-frameworks',
        name: 'Trade Policy Analysis Frameworks',
        description: 'Tools and frameworks for understanding trade policy impacts',
        subThemes: [
          {
            id: 'four-box-framework',
            name: 'Four-Box Trade Policy Framework',
            description: 'Structured approach to analyzing trade policy scenarios',
            examples: [
              'Guide to Tariffs featuring Four-Box framework (Decoupling, Rebalancing, Negotiating, Funding)',
              'Contextualization of headline risk and market path scenarios',
              'Decoupling: Complete economic separation scenarios',
              'Rebalancing: Gradual supply chain diversification',
              'Negotiating: Trade deal frameworks and compromise solutions',
              'Funding: Revenue generation through tariff mechanisms',
              'Historical precedent analysis for trade policy outcomes',
              'Probability-weighted scenario planning for portfolio positioning'
            ]
          },
          {
            id: 'client-education',
            name: 'Client Education & Communication',
            description: 'Resources for educating clients about macroeconomic risks',
            examples: [
              'Client events and webinars pairing tariff guides with Keys to Prevailing',
              'Volatility charts to reassure investors during noisy news cycles',
              '"Tariffs in 5 Charts" follow-up materials',
              'Election-year tariff history slides for historical context',
              'Talking-point one-pagers for technical questions from engineer/business-owner clients',
              'Simplified explanations of complex trade policy implications',
              'Risk/opportunity balance in trade policy discussions',
              'Long-term perspective on temporary policy disruptions'
            ]
          }
        ]
      },
      {
        id: 'portfolio-implications',
        name: 'Portfolio Positioning Implications',
        description: 'Investment strategy adjustments for trade policy uncertainty',
        subThemes: [
          {
            id: 'diversification-strategies',
            name: 'Diversification & Risk Management',
            description: 'Portfolio adjustments for trade policy risks',
            examples: [
              'Diversify supply-chain exposure across geographic regions',
              'Add quality dividend payers for defensive characteristics',
              'Maintain global diversification despite trade tensions',
              'Consider active fixed-income for flexibility during policy changes',
              'Sector rotation away from trade-sensitive industries',
              'Currency hedging for international exposure management',
              'Domestic vs. international allocation adjustments',
              'Supply chain resilience as investment criteria'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'practice-management',
    name: 'Practice Management & Client Conversations',
    icon: '💼',
    frequency: 15,
    description: 'Advisors seek support for client conversations (~15%), especially around market volatility, portfolio construction, and behavioral coaching',
    themes: [
      {
        id: 'conversation-tools',
        name: 'Client Conversation Tools',
        description: 'Frameworks and tools for effective client communication',
        subThemes: [
          {
            id: 'behavioral-frameworks',
            name: 'Behavioral Coaching Frameworks',
            description: 'Structured approaches for managing client emotions and expectations',
            examples: [
              'Four-Box framework for structured decision making',
              'Four-Step Action Plan for systematic portfolio management',
              'Keys to Prevailing for maintaining long-term perspective',
              'Scripting integration to reduce panic calls',
              'Increased proactive outreach metrics tracking',
              'Client anxiety management during volatile periods',
              'Storytelling analogies (man walking the hill, 7-up 3-down can)',
              'Compliance-approved slides featuring behavioral stories for webinars'
            ]
          },
          {
            id: 'digital-resources',
            name: 'Digital Resources & Brand Building',
            description: 'Technology and marketing tools for practice growth',
            examples: [
              'Turbocharge Your Brand workbook for consistent messaging',
              'LinkedIn marketing one-pager for social media presence',
              'Multi-week workshops for brand consistency development',
              'COI engagement strategies and materials',
              'Digital resource libraries for client education',
              'Social media content calendars and posting strategies',
              'Professional photography and brand imaging guidance',
              'Website optimization and content strategy development'
            ]
          }
        ]
      },
      {
        id: 'success-measurement',
        name: 'Success Measurement & Impact Tracking',
        description: 'Methods for measuring the effectiveness of client communication strategies',
        subThemes: [
          {
            id: 'engagement-metrics',
            name: 'Client Engagement Metrics',
            description: 'Quantitative measures of client communication effectiveness',
            examples: [
              'Client feedback collection and analysis',
              'Event attendance tracking and follow-up rates',
              'New-business follow-ups logged in CRM systems',
              'Reduced panic call frequency during market stress',
              'Increased proactive client outreach metrics',
              'Client retention rates and satisfaction scores',
              'Referral generation and tracking systems',
              'Meeting frequency and agenda effectiveness measurement'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'active-passive',
    name: 'Active vs. Passive & Model Portfolios',
    icon: '⚖️',
    frequency: 15,
    description: 'Ongoing discussion about active vs. passive management merits (~15%), with many advisors using model portfolios blending both approaches',
    themes: [
      {
        id: 'cost-considerations',
        name: 'Cost & Performance Analysis',
        description: 'Framework for evaluating active vs. passive investment approaches',
        subThemes: [
          {
            id: 'evaluation-criteria',
            name: 'Manager Evaluation Criteria',
            description: 'Systematic approaches for assessing investment managers',
            examples: [
              'Fi360 scores for fiduciary evaluation standards',
              'Morningstar quartile rankings for peer comparison',
              'In-house composite data for performance validation',
              'Cost considerations: passive ETFs as default core holdings',
              'Active SMAs/ETFs justified by alpha potential, risk management, or tax customization',
              'Performance attribution analysis across time periods',
              'Risk-adjusted return metrics (Sharpe ratio, Sortino ratio)',
              'Downside capture and upside participation measurement'
            ]
          },
          {
            id: 'hybrid-models',
            name: 'Hybrid Model Portfolio Construction',
            description: 'Combining active and passive strategies in unified portfolios',
            examples: [
              'Active-passive hybrid models (American Funds/Vanguard combinations)',
              'Tax-aware ETF models with active overlay strategies',
              'Brochures and composite fact-sheets explaining methodology',
              'Core-satellite approaches with passive core and active satellites',
              'Strategic asset allocation with tactical active overlays',
              'Factor-based passive exposure with active security selection',
              'Cost optimization through strategic active/passive allocation',
              'Risk budgeting between active and passive components'
            ]
          }
        ]
      },
      {
        id: 'platform-adoption',
        name: 'Platform Adoption & Implementation',
        description: 'Technology and platform considerations for model portfolio implementation',
        subThemes: [
          {
            id: 'fee-based-platforms',
            name: 'Fee-Based Platform Integration',
            description: 'Technology platforms enabling effective model portfolio management',
            examples: [
              'Fee-based platforms (MWP, UMA) facilitating vehicle mixing',
              'Highest adoption where platform fees are low and rebalancing is automated',
              'Seamless integration across multiple investment vehicles',
              'Automated rebalancing reducing operational burden',
              'Consolidated reporting across active and passive holdings',
              'Risk management overlays for complete portfolio monitoring',
              'Performance attribution at the vehicle and strategy level',
              'Compliance monitoring across complex model structures'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'thematic-etfs',
    name: 'Thematic & Active ETFs',
    icon: '🎨',
    frequency: 12,
    description: 'Thematic ETFs and sector-specific strategies are of growing interest (~12%) for portfolio differentiation',
    themes: [
      {
        id: 'sector-specific',
        name: 'Sector-Specific ETF Strategies',
        description: 'Targeted sector exposure for portfolio optimization and client differentiation',
        subThemes: [
          {
            id: 'portfolio-analysis',
            name: 'Portfolio Analysis & Allocation',
            description: 'Systematic approach to identifying and addressing sector underallocations',
            examples: [
              'Review client portfolios to identify underallocations (e.g., to financials)',
              'Suggest ETFs to boost exposure and realign with stated objectives',
              'Show clients differentiated portfolios through targeted sector exposure',
              'Sector rotation strategies based on economic cycle analysis',
              'Tactical overweights in attractive sectors',
              'Risk management through sector diversification',
              'Performance attribution at the sector level',
              'Benchmark comparison and relative positioning analysis'
            ]
          },
          {
            id: 'implementation-approach',
            name: 'Implementation vs. Diversified Strategies',
            description: 'Balancing thematic exposure with overall portfolio diversification',
            examples: [
              'Thematic ETFs as tactical overlays rather than core holdings',
              'Diversified active approach as portfolio foundation',
              'Sector-specific ETFs for targeted exposure enhancement',
              'Risk budgeting for thematic and sector-specific allocations',
              'Portfolio construction balancing conviction and diversification',
              'Thematic implementation within overall risk parameters',
              'Active management overlay for thematic position sizing',
              'Regular review and rebalancing of thematic exposures'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'retirement-plans',
    name: 'Retirement Plans & 401(k)',
    icon: '🏦',
    frequency: 10,
    description: 'Retirement plan solutions and 401(k) prospecting (~10%) focus on fee-based business and participant engagement',
    themes: [
      {
        id: 'plan-metrics',
        name: 'Plan Metrics & Benchmarking',
        description: 'Tools and strategies for winning retirement plan mandates',
        subThemes: [
          {
            id: 'benchmarking-tools',
            name: 'Benchmarking & Analysis Tools',
            description: 'Comprehensive tools for retirement plan evaluation and competitive positioning',
            examples: [
              'Track plan metrics (AUM, participant count, deferral rates)',
              'Benchmarking tools (Larkspur, John Hancock Score, Planalyzer) to win mandates',
              'SECURE 2.0 tax credits and state auto-IRA mandates as catalysts',
              'RecordkeeperDirect plus digital onboarding for streamlined adoption',
              'Fee benchmarking across plan sizes and industries',
              'Investment option analysis and optimization',
              'Participant behavior analysis and engagement measurement',
              'Compliance monitoring and fiduciary oversight tools'
            ]
          },
          {
            id: 'plan-design',
            name: 'Plan Design & Features',
            description: 'Optimal plan structure and feature implementation',
            examples: [
              'Safe-Harbor match formulas for compliance simplification',
              'Automatic enrollment/escalation for participation improvement',
              'Profit-sharing "new comparability" for targeted benefits',
              'Robust payroll integration for operational efficiency',
              'Roth option implementation and education',
              'Loan and hardship withdrawal provisions',
              'Vesting schedules and forfeiture allocation strategies',
              'Target-date fund selection and monitoring'
            ]
          }
        ]
      },
      {
        id: 'participant-engagement',
        name: 'Digital Engagement & Education',
        description: 'Technology solutions for improving participant outcomes',
        subThemes: [
          {
            id: 'digital-tools',
            name: 'Digital Participant Tools',
            description: 'Technology platforms for participant education and engagement',
            examples: [
              'Digital participant portals (ICanRetire.com) for enhanced engagement',
              'Online enrollment processes for improved accessibility',
              'Participation-rate lifts and plan-flow growth measurement',
              'Mobile applications for account access and management',
              'Educational content libraries and interactive tools',
              'Retirement planning calculators and projection tools',
              'Video education and webinar platforms',
              'Personalized communication and notification systems'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'digital-tools',
    name: 'Digital Tools & Portfolio Analytics',
    icon: '💻',
    frequency: 7,
    description: 'Portfolio analytics tools and digital onboarding (~7%) serve as value-adds for streamlining processes and enhancing client service',
    themes: [
      {
        id: 'analytics-features',
        name: 'High-Value Analytics Features',
        description: 'Core capabilities of portfolio analytics and digital tools',
        subThemes: [
          {
            id: 'portfolio-tools',
            name: 'Portfolio Construction & Analysis',
            description: 'Advanced tools for portfolio management and optimization',
            examples: [
              'Model-portfolio comparison across multiple strategies',
              'Fund-screening by Fi360 and Morningstar metrics',
              'Stress testing for various market scenarios',
              'Tax-aware optimization for after-tax return enhancement',
              'Customizable client reports for personalized communication',
              'Risk attribution and factor exposure analysis',
              'Performance attribution across time periods and asset classes',
              'Rebalancing optimization and trade execution tools'
            ]
          },
          {
            id: 'training-support',
            name: 'Training & Implementation Support',
            description: 'Educational resources and ongoing support for tool utilization',
            examples: [
              'Training on Portfolio Assistant "family preference" settings',
              'Periodic refreshers on new features and capabilities',
              'Live demos and interactive training sessions',
              'One-pagers and quick reference guides',
              'Implementation checklists for systematic adoption',
              'Best practices sharing across advisor networks',
              'User community forums and knowledge sharing',
              'Technical support and troubleshooting resources'
            ]
          }
        ]
      },
      {
        id: 'efficiency-measurement',
        name: 'Efficiency & Engagement Measurement',
        description: 'Metrics for evaluating digital tool effectiveness and advisor productivity',
        subThemes: [
          {
            id: 'productivity-metrics',
            name: 'Advisor Productivity Metrics',
            description: 'Quantitative measures of digital tool impact on advisor efficiency',
            examples: [
              'Report downloads and client distribution tracking',
              'Meeting follow-ups and client engagement measurement',
              'Reduced manual rebalancing hours through automation',
              'Digital onboarding (RecordkeeperDirect, e-signature workflows) efficiency gains',
              'Client acquisition and retention metrics',
              'Revenue per client improvements through enhanced service',
              'Time allocation optimization between administrative and relationship work',
              'Client satisfaction improvements through enhanced reporting and communication'
            ]
          }
        ]
      }
    ]
  }
];

type ViewState = 'topics' | 'themes' | 'subthemes';

export function IndustryResearch({ onProceed }: IndustryResearchProps) {
  const [currentView, setCurrentView] = useState<ViewState>('topics');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  
  // Chat functionality state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  
  // Debug: Log topics count and verify all topics
  console.log('=== INDUSTRY RESEARCH DEBUG ===');
  console.log('Total topics loaded:', topics.length);
  console.log('Expected: 11 topics');
  console.log('Topics list:');
  topics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic.name} (ID: ${topic.id})`);
  });
  console.log('=== END DEBUG ===');

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentView('themes');
  };

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    setCurrentView('subthemes');
  };

  const handleBack = () => {
    if (currentView === 'subthemes') {
      setCurrentView('themes');
      setSelectedTheme(null);
    } else if (currentView === 'themes') {
      setCurrentView('topics');
      setSelectedTopic(null);
    }
  };

  const handleProceedToAdvisors = () => {
    // We can pass the selected topic/theme data to the next step
    onProceed();
  };

  // Chat functionality
  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const initializeChat = () => {
    if (chatMessages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: generateVisitId(),
        role: 'assistant',
        content: "Hi! I'm your investment research assistant. I can help you understand investment topics, market trends, and advisor strategies. Try asking me about ETF adoption trends, market volatility strategies, or SMA customization options!",
        timestamp: new Date()
      };
      setChatMessages([welcomeMessage]);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: generateVisitId(),
      role: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    const messageToSend = currentMessage;
    setCurrentMessage('');
    setIsLoading(true);

    try {
      // Get OpenAI API key from environment variable
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        throw new Error('OpenAI API key not configured');
      }

      const knowledgeBase = `
      You are an investment research assistant with access to comprehensive market data and advisor insights. Use the following knowledge base to answer questions about investment topics, market trends, and advisor strategies.

      Key Investment Topics:

      1. ETFs & ETF Models (80% discussion frequency)
      - Scalability and operational efficiency through model portfolios
      - Cost transparency (no loads, no 12b-1 fees)
      - Platform integration (MWP, Freedom)
      - Thematic and active ETFs gaining traction
      - Sector tilts: technology, industrials, financials, healthcare

      2. Market Outlook & Volatility (75% frequency)
      - Quarterly outlook presentations and volatility frameworks
      - Economic indicators: Fed policy, CPI/PCE, tariffs
      - Quality-tilt strategies: "Dividends, Duration, Don't Abandon International"
      - Stress testing and scenario analysis

      3. SMAs - Separately Managed Accounts (40% frequency)
      - Customization for high-net-worth clients
      - ESG/values screens, sector restrictions
      - Tax optimization through loss-harvesting
      - Hybrid ETF core + SMA satellite strategies

      4. Fixed Income & Bond Strategies (35% frequency)
      - Intermediate-term "sweet-spot" duration (3-7 years)
      - Municipal bond strategies for tax-aware accounts
      - Active fixed-income ETFs for curve management

      5. Thematic Investment Themes (30% frequency)
      - AI, manufacturing renaissance, healthcare innovation
      - Implementation through thematic ETFs vs active management
      - Client communication frameworks and behavioral coaching

      Provide helpful, accurate, and professional responses based on this knowledge.
      `;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: knowledgeBase
            },
            {
              role: 'user',
              content: messageToSend
            }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantResponse = data.choices[0]?.message?.content;

      if (!assistantResponse) {
        throw new Error('No response from OpenAI');
      }

      const assistantMessage: ChatMessage = {
        id: generateVisitId(),
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: generateVisitId(),
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting to the AI service right now. Please check your API key configuration and try again later.",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What are the key benefits of ETF models over mutual funds?",
    "How do advisors handle market volatility with clients?",
    "What customization options do SMAs provide?",
    "What are the current fixed income strategies?",
    "How are thematic ETFs being used in portfolios?"
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 overflow-visible">
      <div className="max-w-7xl mx-auto min-h-full overflow-visible">
        {/* Back Button */}
        {currentView !== 'topics' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <div 
              onClick={handleBack}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer h-10 px-4 py-2 shadow-sm bg-white text-blue-700 border-blue-300"
              style={{ 
                backgroundColor: 'white !important',
                color: '#1d4ed8 !important',
                border: '1px solid #93c5fd !important',
                transition: 'all 0.2s !important'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('background-color', '#dbeafe', 'important');
                e.currentTarget.style.setProperty('border-color', '#60a5fa', 'important');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('background-color', 'white', 'important');
                e.currentTarget.style.setProperty('border-color', '#93c5fd', 'important');
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </div>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {currentView === 'topics' && (
            <>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Investment <span className="text-blue-600">Topics</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose a topic to explore related themes, strategies, and specific examples for your practice.
              </p>
            </>
          )}
          {currentView === 'themes' && selectedTopic && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedTopic.icon} {selectedTopic.name} <span className="text-blue-600">Themes</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {selectedTopic.description}
              </p>
            </>
          )}
          {currentView === 'subthemes' && selectedTheme && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedTheme.name} <span className="text-blue-600">Examples</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {selectedTheme.description}
              </p>
            </>
          )}
        </motion.div>

        {/* Topics View */}
        {currentView === 'topics' && (
          <>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500">Showing {topics.length} investment topics</p>
              <p className="text-xs text-gray-400">Topic IDs: {topics.map(t => t.id).join(', ')}</p>
              
              {/* Chat with Report Button */}
              <div className="mt-4">
                <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={initializeChat}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat with Investment Research Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[80vh] flex flex-col bg-white">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Bot className="w-6 h-6 text-blue-600" />
                        Investment Research Assistant
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="flex-1 flex flex-col overflow-hidden">
                      {/* Chat Messages */}
                      <ScrollArea className="flex-1 pr-4 bg-gray-50 rounded-lg p-4" ref={chatScrollRef}>
                        <div className="space-y-4 py-2">
                          {chatMessages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex items-start gap-3 ${
                                message.role === 'user' ? 'justify-end' : 'justify-start'
                              }`}
                            >
                              {message.role === 'assistant' && (
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Bot className="w-4 h-4 text-white" />
                                </div>
                              )}
                              <div
                                className={`max-w-[70%] rounded-lg px-4 py-3 shadow-sm ${
                                  message.role === 'user'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-800 border border-gray-200'
                                }`}
                              >
                                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                              {message.role === 'user' && (
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                  <User className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                          ))}
                          {isLoading && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <div className="bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>

                      {/* Suggested Questions */}
                      {chatMessages.length <= 1 && (
                        <div className="mb-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-sm text-gray-700 mb-2 font-medium">Try asking about:</p>
                          <div className="flex flex-wrap gap-2">
                            {suggestedQuestions.map((question, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentMessage(question)}
                                className="text-xs"
                              >
                                {question}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Message Input */}
                      <div className="flex items-center gap-2 pt-4 border-t border-gray-200 bg-white">
                        <Input
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Ask about investment topics, market trends, or advisor strategies..."
                          className="flex-1"
                          disabled={isLoading}
                        />
                        <Button
                          onClick={sendMessage}
                          disabled={!currentMessage.trim() || isLoading}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="w-full overflow-visible">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 auto-rows-fr">
                {topics.map((topic, index) => {
                  console.log(`Rendering topic ${index + 1}:`, topic.name);
                  return (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Card 
                        className="p-6 cursor-pointer bg-white border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col min-h-[300px]"
                        onClick={() => handleTopicSelect(topic)}
                      >
                        <div className="text-center flex-1 flex flex-col">
                          <div className="text-4xl mb-4">{topic.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.name}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed flex-1">{topic.description}</p>
                          
                          {/* Frequency Progress Bar */}
                          <div className="mt-4 mb-3">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                              <span>Discussion Frequency</span>
                              <span>{topic.frequency}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                              <div 
                                className={`h-2.5 rounded-full transition-all duration-1000 ${
                                  topic.frequency >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                                  topic.frequency >= 40 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                  topic.frequency >= 20 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                                  'bg-gradient-to-r from-gray-500 to-gray-600'
                                }`}
                                style={{ width: `${topic.frequency}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="text-blue-600 text-sm font-medium">
                            {topic.themes.length} theme{topic.themes.length !== 1 ? 's' : ''} available →
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Themes View */}
        {currentView === 'themes' && selectedTopic && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {selectedTopic.themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="p-6 cursor-pointer bg-white border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full"
                  onClick={() => handleThemeSelect(theme)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{theme.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{theme.description}</p>
                    <div className="space-y-2">
                      {theme.subThemes.map((subTheme) => (
                        <div key={subTheme.id} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {subTheme.name}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-blue-600 text-sm font-medium">
                      {theme.subThemes.length} sub-theme{theme.subThemes.length !== 1 ? 's' : ''} available →
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Sub-themes View */}
        {currentView === 'subthemes' && selectedTheme && (
          <div className="space-y-8 mb-12">
            {selectedTheme.subThemes.map((subTheme, index) => {
              // Generate visit IDs for all examples
              const examplesWithVisitIds: ExampleWithVisitId[] = subTheme.examples.map(example => ({
                text: example,
                visitId: generateVisitId()
              }));

              return (
                <motion.div
                  key={subTheme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-lg border-0 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{subTheme.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-base">{subTheme.description}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Sub themes:</h4>
                      <div className="space-y-2 mb-8">
                        {subTheme.examples.slice(0, 6).map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">{example}</p>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Examples:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(() => {
                          // Generate realistic sales notes based on the subTheme
                          const salesNotes = [
                            `Client meeting with Johnson Portfolio - discussed ${subTheme.name.toLowerCase()} strategy. Showed portfolio efficiency gains of 45% time savings through automated rebalancing. Client very interested in transitioning $2.3M from manual mutual funds to ETF models. Follow-up scheduled to review implementation timeline.`,
                            `Prospect call with Martinez Family Office regarding ${subTheme.name.toLowerCase()}. Presented case study showing 80% reduction in operational overhead. Client concerned about transition costs but impressed with tax efficiency benefits. Sending proposal for gradual 6-month transition plan.`
                          ];
                          
                          return salesNotes.map((note, exampleIndex) => (
                            <motion.div
                              key={exampleIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (index * 0.1) + (exampleIndex * 0.05) }}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-5 hover:shadow-md transition-shadow duration-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {exampleIndex + 1}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-800 text-sm leading-relaxed mb-3">{note}</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500">Visit ID:</span>
                                    <code className="bg-white px-2 py-1 rounded text-xs font-mono text-gray-700 border border-blue-300">
                                      {generateVisitId()}
                                    </code>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ));
                        })()}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        {currentView === 'subthemes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Create Marketing Content?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based on these examples, let's create personalized marketing content with our expert advisors.
              </p>
              <Button 
                onClick={handleProceedToAdvisors}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Proceed to Advisor Selection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}