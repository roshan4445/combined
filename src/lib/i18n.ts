import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        dashboard: 'Dashboard',
        complaints: 'Complaints',
        schemes: 'Schemes',
        traffic: 'Traffic',
        elderly: 'Elderly Program',
        scamAlerts: 'Scam Alerts',
        adminTools: 'Admin Tools'
      },
      // Login
      login: {
        title: 'Government Admin Portal',
        subtitle: 'Smart Civic Intelligence System',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        signIn: 'Sign In',
        emailHint: 'Use demo emails: state@admin.gov, district1@admin.gov, mandal1@admin.gov',
        demoAccounts: 'Demo Accounts'
      },
      // Dashboard
      dashboard: {
        overview: 'Dashboard Overview',
        stateOverview: 'State Dashboard Overview',
        districtOverview: 'District Dashboard Overview',
        mandalOverview: 'Mandal Dashboard Overview',
        realTimeInsights: 'Real-time insights and analytics',
        weeklyTrends: 'Weekly Trends',
        complaintCategories: 'Complaint Categories'
      },
      // Stats
      stats: {
        complaintsToday: 'Complaints Today',
        activeSchemes: 'Active Schemes',
        registeredElderly: 'Registered Elderly',
        scamAlertsWeek: 'Scam Alerts This Week',
        issuesResolvedMonth: 'Issues Resolved This Month'
      },
      // Complaints
      complaints: {
        management: 'Complaint Management',
        stateManagement: 'State Complaint Management',
        districtManagement: 'District Complaint Management',
        mandalManagement: 'Mandal Complaint Management',
        manageRespond: 'Manage and respond to citizen complaints',
        searchPlaceholder: 'Search complaints...',
        exportReport: 'Export Report',
        allStatus: 'All Status',
        allCategories: 'All Categories',
        pending: 'Pending',
        inProgress: 'In Progress',
        resolved: 'Resolved',
        total: 'Total'
      },
      // AI
      ai: {
        inputPlaceholder: 'Ask me anything about civic administration...'
      },
      // Common
      common: {
        loading: 'Loading...'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        dashboard: 'डैशबोर्ड',
        complaints: 'शिकायतें',
        schemes: 'योजनाएं',
        traffic: 'यातायात',
        elderly: 'बुजुर्ग कार्यक्रम',
        scamAlerts: 'धोखाधड़ी अलर्ट',
        adminTools: 'प्रशासन उपकरण'
      },
      login: {
        title: 'सरकारी प्रशासन पोर्टल',
        subtitle: 'स्मार्ट नागरिक बुद्धिमत्ता प्रणाली',
        email: 'ईमेल पता',
        emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
        password: 'पासवर्ड',
        passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
        signIn: 'साइन इन',
        emailHint: 'डेमो ईमेल का उपयोग करें: state@admin.gov, district1@admin.gov, mandal1@admin.gov',
        demoAccounts: 'डेमो खाते'
      },
      dashboard: {
        overview: 'डैशबोर्ड अवलोकन',
        stateOverview: 'राज्य डैशबोर्ड अवलोकन',
        districtOverview: 'जिला डैशबोर्ड अवलोकन',
        mandalOverview: 'मंडल डैशबोर्ड अवलोकन',
        realTimeInsights: 'वास्तविक समय की जानकारी और विश्लेषण',
        weeklyTrends: 'साप्ताहिक रुझान',
        complaintCategories: 'शिकायत श्रेणियां'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;