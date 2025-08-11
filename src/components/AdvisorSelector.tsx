import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface AdvisorSelectorProps {
  selectedAdvisors: string[];
  onAdvisorToggle: (advisor: string) => void;
  onProceed: () => void;
}

const advisors = [
  'Michael Rodriguez',
  'Sarah Chen',
  'David Thompson',
  'Emily Johnson',
  'Robert Williams',
  'Lisa Anderson'
];

export function AdvisorSelector({ selectedAdvisors, onAdvisorToggle, onProceed }: AdvisorSelectorProps) {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Select ETF Advisors</h2>
        <p className="text-gray-600">Choose 2 advisors to compare their profiles and generate marketing content</p>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mb-8">
        {advisors.map((advisor, index) => {
          const isSelected = selectedAdvisors.includes(advisor);
          return (
            <motion.div
              key={advisor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className={`p-6 cursor-pointer min-w-[220px] text-center transition-all duration-300 relative ${
                  isSelected 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-600 shadow-lg text-white' 
                    : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg'
                }`}
                onClick={() => onAdvisorToggle(advisor)}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                )}
                <div className="text-2xl mb-3">👤</div>
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  isSelected ? 'text-white' : 'text-gray-900'
                }`}>
                  {advisor}
                </h3>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedAdvisors.length === 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Button 
            onClick={onProceed}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg text-white font-semibold px-8 py-3 text-lg transition-all duration-300"
          >
            Compare Selected Advisors
          </Button>
        </motion.div>
      )}
    </div>
  );
}