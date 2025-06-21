import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useToast } from './use-toast';
import { AuthContextType } from '@/shared/types';
import { determineUserRole, validateAdminCode } from '@/shared/utils';
import { DEFAULT_PASSWORD } from '@/shared/constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCode, setAdminCode] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'state' | 'district' | 'mandal' | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const token = Cookies.get('authToken');
    const code = Cookies.get('adminCode');
    
    if (token && code) {
      setIsAuthenticated(true);
      setAdminCode(code);
      setUserRole(determineUserRole(code));
    }
  }, []);

  const login = async (codeOrEmail: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For the new email-based login, we need to handle both admin codes and emails
    let adminCodeToUse = codeOrEmail;
    
    // If it's an email, map it to the corresponding admin code
    if (codeOrEmail.includes('@')) {
      const emailToCodeMap: { [key: string]: string } = {
        'state@admin.gov': 's001',
        'district1@admin.gov': 'd1',
        'district2@admin.gov': 'd2',
        'district3@admin.gov': 'd3',
        'district4@admin.gov': 'd4',
        'mandal1@admin.gov': 'd1m1',
        'mandal2@admin.gov': 'd1m2',
        'mandal3@admin.gov': 'd2m1',
        'mandal4@admin.gov': 'd2m2'
      };
      
      adminCodeToUse = emailToCodeMap[codeOrEmail];
      if (!adminCodeToUse) {
        toast({
          title: "Login Failed",
          description: "Invalid email address. Please use a valid admin email.",
          variant: "destructive",
        });
        throw new Error('Invalid email address');
      }
    }
    
    if (validateAdminCode(adminCodeToUse) && password === DEFAULT_PASSWORD) {
      const token = `token_${adminCodeToUse}_${Date.now()}`;
      
      Cookies.set('authToken', token, { expires: 1 });
      Cookies.set('adminCode', adminCodeToUse, { expires: 1 });
      
      setIsAuthenticated(true);
      setAdminCode(adminCodeToUse);
      setUserRole(determineUserRole(adminCodeToUse));
      
      toast({
        title: "Login Successful",
        description: `Welcome, ${adminCodeToUse.toUpperCase()} Admin!`,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    Cookies.remove('authToken');
    Cookies.remove('adminCode');
    setIsAuthenticated(false);
    setAdminCode(null);
    setUserRole(null);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const value = {
    isAuthenticated,
    adminCode,
    userRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}