import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, ArrowRight, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useTranslation } from 'react-i18next';

interface LandingPageProps {
  onUserTypeSelect: (userType: 'citizen' | 'admin') => void;
}

export function LandingPage({ onUserTypeSelect }: LandingPageProps) {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<'citizen' | 'admin' | null>(null);

  const handleSelection = (userType: 'citizen' | 'admin') => {
    setSelectedType(userType);
    // Add a small delay for visual feedback
    setTimeout(() => {
      onUserTypeSelect(userType);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6"
          >
            <Globe className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
          >
            Smart Civic Intelligence System
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Empowering citizens and administrators with intelligent civic services and seamless governance solutions
          </motion.p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Citizen Portal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedType === 'citizen' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleSelection('citizen')}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Citizen Portal
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground mb-6">
                  Access civic services, submit complaints, apply for schemes, and track your requests
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Submit complaints and track status</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Apply for government schemes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Report traffic and infrastructure issues</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Access elderly skill programs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Report scams and fraud alerts</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  size="lg"
                >
                  Access Citizen Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Admin Portal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedType === 'admin' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleSelection('admin')}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Admin Portal
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground mb-6">
                  Manage civic operations, oversee complaints, administer schemes, and monitor system performance
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Manage complaints and assignments</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Oversee government schemes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Monitor traffic and infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Coordinate elderly programs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Verify scam reports and alerts</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  size="lg"
                >
                  Access Admin Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-3">Powered by Advanced AI Technology</h3>
            <p className="text-sm text-muted-foreground">
              Our system leverages cutting-edge artificial intelligence to provide intelligent insights, 
              automated processing, and enhanced user experiences across all civic services.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-4 text-xs text-muted-foreground">
              <span>🌐 Multi-language Support</span>
              <span>🤖 AI-Powered Analytics</span>
              <span>📱 Mobile Responsive</span>
              <span>🔒 Secure & Private</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}