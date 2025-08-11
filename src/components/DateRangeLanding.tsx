import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Database, TrendingUp, BarChart3, FileText, Zap, CheckCircle, Loader2, Brain } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DateRangeLandingProps {
  onComplete: () => void;
}

interface ResearchStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{className?: string}>;
  duration: number;
  details: string[];
  color: string;
}

const researchSteps: ResearchStep[] = [
  {
    id: 'data-extraction',
    title: 'Data Extraction',
    description: 'Connecting to Adobe CDP and internal databases',
    icon: Database,
    duration: 12000,
    details: [
      'Connecting to Adobe CDP API...',
      'Extracting client portfolio data for date range',
      'Pulling advisor interaction logs',
      'Gathering product performance metrics',
      'Accessing risk assessment databases'
    ],
    color: 'blue'
  },
  {
    id: 'query-generation',
    title: 'Query Generation & Exploration',
    description: 'Generating intelligent search queries using the Knowledge Graph',
    icon: Zap,
    duration: 15000,
    details: [
      'Generating intelligent search queries using the Knowledge Graph...',
      'Expanding queries based on semantic relationships and ontologies...',
      'Mapping entities to related concepts and subdomains...',
      'Identifying relevant nodes and edges for contextual exploration...',
      'Running exploratory passes to discover adjacent knowledge areas...'
    ],
    color: 'yellow'
  },
  {
    id: 'classification',
    title: '🧠 Classification & Structuring',
    description: 'Classifying retrieved insights by domain and relevance',
    icon: TrendingUp,
    duration: 14000,
    details: [
      'Classifying retrieved insights by domain and relevance...',
      'Clustering topics into high-level themes and nested subtopics...',
      'Identifying key personas, sectors, and strategic focus areas...',
      'Ranking topics by importance, recency, and depth of discussion...',
      'Organizing graph segments into structured knowledge layers...'
    ],
    color: 'green'
  },
  {
    id: 'theme-extraction',
    title: '📚 Theme & Subtopic Extraction',
    description: 'Extracting dominant themes from connected knowledge paths',
    icon: BarChart3,
    duration: 13000,
    details: [
      'Extracting dominant themes from connected knowledge paths...',
      'Detecting underlying narratives and evolving storylines...',
      'Linking subtopics to their parent themes via semantic reasoning...',
      'Synthesizing multi-hop relationships into coherent knowledge clusters...',
      'Tracing conceptual flows and topic interdependencies...'
    ],
    color: 'purple'
  },
  {
    id: 'consolidation',
    title: 'Consolidating Analysis',
    description: 'Synthesizing insights and creating recommendations',
    icon: FileText,
    duration: 11000,
    details: [
      'Consolidating findings across all data sources',
      'Generating actionable insights',
      'Creating advisor-specific recommendations',
      'Formatting charts and visualizations',
      'Preparing executive summary'
    ],
    color: 'indigo'
  },
  {
    id: 'report-generation',
    title: 'Report Generation',
    description: 'Creating comprehensive research report',
    icon: CheckCircle,
    duration: 10000,
    details: [
      'Generating market outlook sections',
      'Creating advisor comparison matrices',
      'Building interactive dashboards',
      'Finalizing research methodology notes',
      'Preparing presentation materials'
    ],
    color: 'emerald'
  }
];

export function DateRangeLanding({ onComplete }: DateRangeLandingProps) {
  const [fromDate, setFromDate] = useState<Date | undefined>(new Date(2025, 0, 1));
  const [toDate, setToDate] = useState<Date | undefined>(new Date(2025, 6, 27));
  const [isResearching, setIsResearching] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentDetail, setCurrentDetail] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [deepThinkMode, setDeepThinkMode] = useState(false);

  const handleStartResearch = async () => {
    setIsResearching(true);
    
    for (let i = 0; i < researchSteps.length; i++) {
      setCurrentStep(i);
      setCurrentDetail(0);
      
      const step = researchSteps[i];
      const detailDuration = step.duration / step.details.length;
      
      // Show each detail progressively
      for (let j = 0; j < step.details.length; j++) {
        setCurrentDetail(j);
        await new Promise(resolve => setTimeout(resolve, detailDuration));
      }
      
      // Mark step as completed
      setCompletedSteps(prev => [...prev, step.id]);
      
      // Small pause before next step
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // Complete research
    await new Promise(resolve => setTimeout(resolve, 1000));
    onComplete();
  };

  const getStepStatus = (stepIndex: number) => {
    if (completedSteps.includes(researchSteps[stepIndex].id)) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  if (isResearching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-start justify-center p-4 pt-16">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Market Industry Research in Progress
            </h1>
            <p className="text-blue-200 text-lg">
              Analyzing data from {fromDate ? format(fromDate, 'MMM dd, yyyy') : 'Jan 01, 2024'} to {toDate ? format(toDate, 'MMM dd, yyyy') : 'Jul 27, 2024'} • Processing 49k records
            </p>
          </motion.div>

          {/* Current Step Card */}
          <div className="mb-8">
            {(() => {
              const step = researchSteps[currentStep];
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl mx-auto"
                >
                  <Card className="bg-white/10 backdrop-blur-sm border border-yellow-400 shadow-yellow-400/20 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-yellow-500">
                          <Loader2 className="w-6 h-6 text-white animate-spin" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-blue-200 mb-3">{step.description}</p>
                          
                          {/* Active step details */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-2"
                          >
                            {step.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: detailIndex <= currentDetail ? 1 : 0.3,
                                  x: 0 
                                }}
                                className={`flex items-center gap-2 text-sm ${
                                  detailIndex <= currentDetail ? 'text-yellow-300' : 'text-gray-400'
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  detailIndex <= currentDetail ? 'bg-yellow-400' : 'bg-gray-600'
                                }`} />
                                {detail}
                                {detailIndex === currentDetail && (
                                  <Loader2 className="w-3 h-3 animate-spin ml-2" />
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })()}
          </div>

          {/* Research Timeline Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                <span className="text-white font-medium text-lg">
                  Market Industry Research Timeline
                </span>
              </div>
              
              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-white/20 rounded-full">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / (researchSteps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
                  />
                </div>
                
                {/* Timeline Steps */}
                <div className="relative flex justify-between items-start">
                  {researchSteps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;
                    const isPending = index > currentStep;
                    
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center flex-1 min-w-0"
                      >
                        {/* Step Icon */}
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ 
                            scale: isActive ? 1.2 : 1,
                            backgroundColor: isCompleted ? "#10b981" : isActive ? "#3b82f6" : "rgba(255,255,255,0.2)"
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-3 border-2 border-white/30"
                        >
                          {isCompleted ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              ✓
                            </motion.div>
                          ) : (
                            <step.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/70'}`} />
                          )}
                          
                          {/* Active step pulse effect */}
                          {isActive && (
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full bg-blue-400"
                            />
                          )}
                        </motion.div>
                        
                        {/* Step Title */}
                        <motion.div
                          animate={{ 
                            color: isCompleted ? "#10b981" : isActive ? "#ffffff" : "#9ca3af"
                          }}
                          className="text-center px-2"
                        >
                          <div className="text-sm font-semibold mb-1 leading-tight">
                            {step.title.replace(/[🧠📚]/g, '')}
                          </div>
                          <div className="text-xs opacity-80 leading-tight hidden sm:block">
                            {step.description.split(' ').slice(0, 3).join(' ')}...
                          </div>
                        </motion.div>
                        
                        {/* Active step indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Progress Summary */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  <div className="text-white/90 text-sm">
                    <span className="font-semibold text-blue-300">{currentStep + 1}</span> of{' '}
                    <span className="font-semibold text-blue-300">{researchSteps.length}</span> steps completed
                  </div>
                  <div className="text-white/70 text-xs mt-1">
                    {Math.round(((currentStep + 1) / researchSteps.length) * 100)}% progress
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Market Industry <span className="text-blue-600">Research</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Select your date range to generate comprehensive market insights and advisor performance analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Analysis Period</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-semibold text-gray-700 mb-2 block">
                      From Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 text-base border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 justify-start text-left font-normal",
                            !fromDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[9999]" align="start">
                        <Calendar
                          mode="single"
                          selected={fromDate}
                          onSelect={setFromDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold text-gray-700 mb-2 block">
                      To Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 text-base border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 justify-start text-left font-normal",
                            !toDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[9999]" align="start">
                        <Calendar
                          mode="single"
                          selected={toDate}
                          onSelect={setToDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <div>
                        <h3 className="font-semibold text-purple-900">Deep Think Mode</h3>
                        <p className="text-sm text-purple-700">Advanced AI reasoning and comprehensive analysis</p>
                      </div>
                    </div>
                    <Switch
                      checked={deepThinkMode}
                      onCheckedChange={setDeepThinkMode}
                      className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-300 [&>*]:bg-white [&>*]:border [&>*]:border-gray-300"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleStartResearch}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Researching
                  <TrendingUp className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Research typically processes 100k+ data points and takes a few minutes to complete
          </p>
        </motion.div>
      </div>
    </div>
  );
}