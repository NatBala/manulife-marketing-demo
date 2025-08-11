import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendingUp, Target, Briefcase, PieChart, DollarSign, BarChart3 } from 'lucide-react';

interface TopicSelectorProps {
  onTopicSelect: (topic: string) => void;
}

const topics = [
  { name: 'ETF', icon: TrendingUp, color: 'blue' },
  { name: 'SMA', icon: Target, color: 'purple' },
  { name: 'Model Portfolios', icon: Briefcase, color: 'green' },
  { name: 'Portfolio Construction', icon: PieChart, color: 'orange' },
  { name: 'Fixed Income', icon: DollarSign, color: 'emerald' },
  { name: 'Growth', icon: BarChart3, color: 'indigo' }
];

export function TopicSelector({ onTopicSelect }: TopicSelectorProps) {
  return (
    <div className="w-full">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-gray-900"
      >
        Financial Advisory Platform
      </motion.h1>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {topics.map((topic, index) => {
          const IconComponent = topic.icon;
          const colorClasses = {
            blue: 'bg-blue-500 hover:bg-blue-600 group-hover:border-blue-400',
            purple: 'bg-purple-500 hover:bg-purple-600 group-hover:border-purple-400',
            green: 'bg-green-500 hover:bg-green-600 group-hover:border-green-400',
            orange: 'bg-orange-500 hover:bg-orange-600 group-hover:border-orange-400',
            emerald: 'bg-emerald-500 hover:bg-emerald-600 group-hover:border-emerald-400',
            indigo: 'bg-indigo-500 hover:bg-indigo-600 group-hover:border-indigo-400'
          };
          
          return (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className={`p-6 cursor-pointer bg-white border-gray-200 hover:shadow-xl transition-all duration-300 min-w-[200px] text-center group ${colorClasses[topic.color as keyof typeof colorClasses].split(' ')[2]}`}
                onClick={() => onTopicSelect(topic.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorClasses[topic.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} group-hover:scale-110 group-hover:shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {topic.name}
                </h3>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}