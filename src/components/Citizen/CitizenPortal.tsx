import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Megaphone, Car, Users, Shield, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTranslation } from 'react-i18next';

interface CitizenPortalProps {
  onBack: () => void;
}

export function CitizenPortal({ onBack }: CitizenPortalProps) {
  const { t } = useTranslation();

  const services = [
    {
      id: 'complaints',
      title: 'Submit Complaint',
      description: 'Report civic issues and track their resolution status',
      icon: FileText,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      id: 'schemes',
      title: 'Government Schemes',
      description: 'Apply for government schemes and check eligibility',
      icon: Megaphone,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'traffic',
      title: 'Traffic Issues',
      description: 'Report road problems and traffic-related concerns',
      icon: Car,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      id: 'elderly',
      title: 'Elderly Programs',
      description: 'Access work-from-home opportunities for senior citizens',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'scam',
      title: 'Report Scam',
      description: 'Report fraudulent activities and scam alerts',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 'feedback',
      title: 'Feedback',
      description: 'Share your feedback and suggestions for improvement',
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div>
                <h1 className="text-xl font-bold">Citizen Portal</h1>
                <p className="text-sm text-muted-foreground">Access civic services and submit requests</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Citizen Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access a comprehensive range of civic services designed to make your interaction with government more efficient and transparent.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <Button 
                        className="w-full"
                        variant="outline"
                        onClick={() => {
                          // For now, show a coming soon message
                          alert('This service will be available soon! Please use the Admin Portal to see the full system functionality.');
                        }}
                      >
                        Access Service
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6">How It Works</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Select Service</h4>
                  <p className="text-sm text-muted-foreground">Choose the civic service you need from our comprehensive list</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Submit Request</h4>
                  <p className="text-sm text-muted-foreground">Fill out the required information and submit your request</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Track Progress</h4>
                  <p className="text-sm text-muted-foreground">Monitor the status of your request and receive updates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Demo System</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                This is a demonstration of the Smart Civic Intelligence System. 
                To see the full administrative functionality, please access the <strong>Admin Portal</strong> using the demo credentials provided.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}