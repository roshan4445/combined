import { ReactNode } from 'react';
import { Header } from '@/shared/components/Layout/Header';
import { Sidebar } from '@/shared/components/Layout/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
  role: 'state' | 'district' | 'mandal';
}

export function DashboardLayout({ 
  children, 
  title, 
  activeSection, 
  onSectionChange, 
  role 
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={onSectionChange}
        role={role}
      />
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={onSectionChange}
        role={role}
        isMobile={true}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}