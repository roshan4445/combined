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

  const login = async (code: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (validateAdminCode(code) && password === DEFAULT_PASSWORD) {
      const token = `token_${code}_${Date.now()}`;
      
      Cookies.set('authToken', token, { expires: 1 });
      Cookies.set('adminCode', code, { expires: 1 });
      
      setIsAuthenticated(true);
      setAdminCode(code);
      setUserRole(determineUserRole(code));
      
      toast({
        title: "Login Successful",
        description: `Welcome, ${code.toUpperCase()} Admin!`,
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