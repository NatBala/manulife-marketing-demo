import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Award, Target, TrendingUp, Download, Mail, Calendar } from 'lucide-react';
import { MichaelRodriguezContent } from './MichaelRodriguezContent';
import { SarahChenContent } from './SarahChenContent';
import { StreamingProgress } from '@/types/streaming';

interface AdvisorProfileProps {
  advisor: string;
  isGenerating: boolean;
  generatedContent: string;
  streamingProgress?: StreamingProgress;
  showContent?: boolean;
}

interface AdvisorData {
  firm: string;
  licenses: string[];
  productInterest: string;
  investmentStrategy: string;
  experience: string;
  specialization: string;
}

const advisorData: Record<string, AdvisorData> = {
  'Michael Rodriguez': {
    firm: 'Morgan Stanley',
    licenses: ['Series 7', 'Series 66', 'CFP'],
    productInterest: 'Active ETFs',
    investmentStrategy: 'Dynamic asset allocation with focus on sector rotation and momentum investing',
    experience: '12 years',
    specialization: 'High-net-worth clients'
  },
  'Sarah Chen': {
    firm: 'UBS',
    licenses: ['Series 7', 'Series 63', 'CFA'],
    productInterest: 'ETF Tax Efficiency',
    investmentStrategy: 'Tax-optimized portfolio construction with emphasis on low-cost indexing and tax-loss harvesting',
    experience: '15 years',
    specialization: 'Tax-efficient investing'
  }
};

export function AdvisorProfile({ advisor, isGenerating, generatedContent, streamingProgress, showContent = false }: AdvisorProfileProps) {
  const profile = advisorData[advisor] || advisorData['Michael Rodriguez'];
  
  const handleDownload = () => {
    const advisorName = advisor.replace(' ', '_');
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const contentHtml = advisor === 'Michael Rodriguez' ? `
    <div class="content-section">
      <h2 class="section-title">ACTIVE FIXED-INCOME ETFs: BRINGING PRECISION TO YOUR BOND SLEEVE</h2>
      
      <div class="subsection">
        <h3>Why Active Bond Management Via ETF Structure?</h3>
        <p>Traditional bond ladders and index funds address portfolio construction, but miss the dynamic nature of credit markets. Capital Group's active fixed-income ETFs merge research-driven security selection with the tax efficiency and liquidity of ETF structure.</p>
      </div>

      <div class="subsection">
        <h3>Three Core Solutions:</h3>
        <div class="product-grid">
          <div class="product-card">
            <h4>CGCB (Core Bond)</h4>
            <p>Intermediate duration, investment-grade focus with active sector allocation and security selection</p>
          </div>
          <div class="product-card">
            <h4>CGCP (Core Plus)</h4>
            <p>Flexible mandate to capture opportunities across credit spectrum, including high yield and emerging markets</p>
          </div>
          <div class="product-card">
            <h4>CGMU (Municipal ETF)</h4>
            <p>Tax-efficient active management of investment-grade municipal bonds</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>The Active Advantage in Fixed Income:</h3>
        
        <div class="advantage-section">
          <h4>Duration Management:</h4>
          <ul>
            <li><strong>Dynamic Positioning</strong> — adjust duration based on Fed expectations, not static index rules</li>
            <li><strong>Curve Strategy</strong> — overweight specific maturity segments to exploit yield opportunities</li>
            <li><strong>Interest-Rate Hedging</strong> — reduce duration risk during tightening cycles</li>
            <li><strong>Cash-Flow Efficiency</strong> — less cash drag; portfolios stay fully invested</li>
          </ul>
        </div>

        <div class="advantage-section">
          <h4>Intraday Liquidity:</h4>
          <ul>
            <li><strong>Real-Time Shifts</strong> — adjust duration/credit throughout the day, not just at 4 p.m.</li>
            <li><strong>Price Discovery</strong> — live bids offer transparency in volatile bond markets</li>
            <li><strong>Flexible Cash Management</strong> — park idle cash in CGMU, redeploy at will</li>
            <li><strong>Hedging Agility</strong> — enter/exit tactical positions around Fed announcements</li>
            <li><strong>Bid-Ask Control</strong> — scale orders to capture tighter spreads</li>
          </ul>
        </div>

        <div class="advantage-section">
          <h4>Research-Driven Security Selection:</h4>
          <ul>
            <li><strong>Beyond the Index</strong> — avoid concentration in the most indebted issuers</li>
            <li><strong>Dynamic Alpha</strong> — rotate sectors as valuations change</li>
            <li><strong>Integrated ESG</strong> — fundamental + sustainability analysis informs bond picks</li>
            <li><strong>Tactical Yield</strong> — overweight curve segments to exploit anomalies</li>
            <li><strong>Risk Budgeting</strong> — allocate tracking error to high-conviction ideas</li>
          </ul>
        </div>
      </div>

      <div class="cta-section">
        <h3>Ready to Bring Active Precision & Tax Efficiency to Your Bond Sleeve?</h3>
        <p>Connect with Michael Rodriguez to map the role of CGCB, CGCP and CGMU in client portfolios.</p>
      </div>
    </div>
    ` : `
    <div class="content-section">
      <h2 class="section-title">ETF TAX EFFICIENCY EXPLAINED</h2>
      <p class="subtitle">See why secondary-market trading and in-kind redemptions give both active and passive ETFs a structural edge over traditional vehicles.</p>

      <div class="subsection">
        <h3>HOW ETF STRUCTURE DRIVES TAX EFFICIENCY:</h3>
        
        <div class="two-column">
          <div class="column">
            <h4>1. Secondary-Market Trading:</h4>
            <ul>
              <li><strong>No Forced Sales</strong> — most investor trades occur shareholder-to-shareholder, sparing the fund from realizing gains</li>
              <li><strong>Lower Turnover</strong> — managers aren't raising cash for daily redemptions, reducing taxable events</li>
              <li><strong>Transparent Pricing</strong> — live bids/asks help advisers see true cost of reallocation</li>
              <li><strong>Liquidity Buffer</strong> — reduces pressure on underlying bond or stock markets in stress events</li>
            </ul>
          </div>
          
          <div class="column">
            <h4>2. In-Kind Redemptions:</h4>
            <ul>
              <li><strong>Cap-Gains Mitigation</strong> — redeeming APs take securities, not cash, exporting low-basis lots</li>
              <li><strong>Cost Efficiency</strong> — eliminates commissions/market-impact of selling positions</li>
              <li><strong>Portfolio Purification</strong> — managers can "hand off" bonds or stocks they'd like to exit without hitting remaining shareholders</li>
              <li><strong>Equal Footing for Active</strong> — same mechanism fuels tax efficiency in research-driven ETFs</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>Busting the Myths:</h3>
        <div class="myth-section">
          <div class="myth">
            <h4>Myth 1: Only Passive ETFs Are Tax Efficient</h4>
            <p><strong>Reality</strong> — turnover influences distributions, but vehicle structure matters more. Many active ETFs distribute 80% fewer gains than comparable active mutual funds.</p>
          </div>
          <div class="myth">
            <h4>Myth 2: ETFs Don't Belong in Taxable Accounts</h4>
            <p><strong>Reality</strong> — studies show ETFs, active and passive, delivered the highest after-tax returns versus mutual funds and SMAs across most asset classes.</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>Five Advisor Use Cases:</h3>
        <div class="use-cases">
          <div class="use-case">Tax-loss harvesting swaps</div>
          <div class="use-case">Gifting appreciated positions</div>
          <div class="use-case">Muni roll-downs in CGMU</div>
          <div class="use-case">Core-satellite reallocations</div>
          <div class="use-case">Year-round cap-gain avoidance</div>
        </div>
      </div>

      <div class="cta-section">
        <h3>Want to See the Numbers?</h3>
        <p>Download our tax-efficiency white paper or book a one-on-one walkthrough with Sarah Chen, your Capital Group ETF specialist.</p>
      </div>
    </div>
    `;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketing Content - ${advisor}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .header .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .advisor-info {
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
        }
        
        .advisor-info h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        
        .firm-badge {
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            display: inline-block;
            font-weight: 600;
        }
        
        .content {
            padding: 40px;
        }
        
        .section-title {
            color: #3b82f6;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.1rem;
            color: #6b7280;
            text-align: center;
            margin-bottom: 30px;
            font-style: italic;
        }
        
        .subsection {
            margin-bottom: 35px;
        }
        
        .subsection h3 {
            color: #1f2937;
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 15px;
            border-left: 4px solid #8b5cf6;
            padding-left: 15px;
        }
        
        .subsection h4 {
            color: #374151;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
            margin-top: 20px;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .product-card {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #d1d5db;
            transition: transform 0.2s ease;
        }
        
        .product-card:hover {
            transform: translateY(-2px);
        }
        
        .product-card h4 {
            color: #3b82f6;
            font-size: 1.1rem;
            margin-bottom: 8px;
        }
        
        .advantage-section {
            background: #f8fafc;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #10b981;
        }
        
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }
        
        .column {
            background: #f8fafc;
            border-radius: 10px;
            padding: 20px;
        }
        
        .myth-section {
            display: grid;
            gap: 20px;
            margin: 20px 0;
        }
        
        .myth {
            background: #fef3c7;
            border-radius: 10px;
            padding: 20px;
            border-left: 4px solid #f59e0b;
        }
        
        .use-cases {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .use-case {
            background: #dbeafe;
            color: #1e40af;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            border: 2px solid #3b82f6;
        }
        
        .cta-section {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin-top: 30px;
        }
        
        .cta-section h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }
        
        ul {
            list-style: none;
            padding-left: 0;
        }
        
        li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        
        li:before {
            content: "▶";
            color: #3b82f6;
            font-size: 0.8rem;
            position: absolute;
            left: 0;
            top: 2px;
        }
        
        strong {
            color: #1f2937;
        }
        
        .footer {
            background: #f3f4f6;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            .container {
                box-shadow: none;
                max-width: none;
            }
        }
        
        @media (max-width: 768px) {
            .two-column {
                grid-template-columns: 1fr;
            }
            .header h1 {
                font-size: 2rem;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Marketing Content</h1>
            <p class="subtitle">Professional Investment Advisory Materials</p>
            <div class="advisor-info">
                <h2>${advisor}</h2>
                <div class="firm-badge">${profile.firm}</div>
            </div>
        </div>
        
        <div class="content">
            ${contentHtml}
        </div>
        
        <div class="footer">
            <p>Generated on ${currentDate} | Professional Marketing Materials</p>
            <p>This document contains proprietary content for licensed financial advisors</p>
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${advisorName}_Marketing_Content_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleEmailAdvisor = () => {
    const subject = `Marketing Content for ${advisor}`;
    const body = `Hi ${advisor},%0A%0AI've generated some marketing content that might be helpful for your practice. Please review the attached content and let me know if you'd like to discuss further.%0A%0ABest regards`;
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const handleAddToAgenda = () => {
    const title = `Review Marketing Content with ${advisor}`;
    const details = `Discuss generated marketing content for ${advisor === 'Michael Rodriguez' ? 'Active Fixed-Income ETFs' : 'ETF Tax Efficiency'}`;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Tomorrow
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // 1 hour meeting
    
    const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(details)}`;
    window.open(calendarUrl, '_blank');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: advisor === 'Michael Rodriguez' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="flex-1"
    >
      <Card className="p-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-gray-200 shadow-lg h-full">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white shadow-lg">
              👤
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{advisor}</h3>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Building className="h-4 w-4 text-blue-600" />
              <span className="text-lg font-semibold text-blue-600">{profile.firm}</span>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Licenses & Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.licenses.map((license) => (
                  <Badge key={license} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md">
                    {license}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Product Interest</span>
              </div>
              <p className="text-gray-600">{profile.productInterest}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Investment Strategy</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {profile.investmentStrategy}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <span className="text-sm font-semibold text-gray-900">Experience</span>
                <p className="text-gray-600">{profile.experience}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Specialization</span>
                <p className="text-gray-600">{profile.specialization}</p>
              </div>
            </div>
          </div>

          {/* Generated Content */}
          {showContent && (generatedContent || streamingProgress) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-center">Generated Marketing Content:</h4>
              
              {/* Action Buttons - Only show when streaming is complete */}
              {streamingProgress?.isComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 justify-center mb-6"
                >
                  <Button
                    onClick={handleDownload}
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={handleEmailAdvisor}
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Advisor
                  </Button>
                  <Button
                    onClick={handleAddToAgenda}
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Meeting Agenda
                  </Button>
                </motion.div>
              )}
              
              {advisor === 'Michael Rodriguez' ? (
                <MichaelRodriguezContent 
                  isGenerating={isGenerating} 
                  generatedContent={generatedContent}
                  streamingProgress={streamingProgress}
                />
              ) : (
                <SarahChenContent 
                  isGenerating={isGenerating} 
                  generatedContent={generatedContent}
                  streamingProgress={streamingProgress}
                />
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}