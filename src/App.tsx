import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { LandingPage } from '@/components/Landing/LandingPage';
import { CitizenPortal } from '@/components/Citizen/CitizenPortal';
import { LoginPage } from '@/features/auth';
import { RoleRouter } from '@/features/auth';
import { AuthProvider, useAuth } from '@/shared/hooks';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import './App.css';

type UserType = 'citizen' | 'admin' | null;

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [userType, setUserType] = useState<UserType>(null);

  const handleUserTypeSelect = (type: 'citizen' | 'admin') => {
    setUserType(type);
  };

  const handleBackToLanding = () => {
    setUserType(null);
  };

  // If no user type is selected, show landing page
  if (!userType) {
    return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
  }

  // If citizen is selected, show citizen portal
  if (userType === 'citizen') {
    return <CitizenPortal onBack={handleBackToLanding} />;
  }

  // If admin is selected, show admin authentication flow
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard/*" 
            element={isAuthenticated ? <RoleRouter /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;