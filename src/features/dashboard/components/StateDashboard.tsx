import { useState } from 'react';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { DashboardOverview } from '@/components/Dashboard/DashboardOverview';
import { ComplaintsPanel } from '@/components/Complaints/ComplaintsPanel';
import { SchemesPanel } from '@/components/Schemes/SchemesPanel';
import { TrafficPanel } from '@/components/Traffic/TrafficPanel';
import { ElderlyPanel } from '@/components/Elderly/ElderlyPanel';
import { ScamPanel } from '@/components/Scam/ScamPanel';
import { AdminToolsPanel } from '@/components/AdminTools/AdminToolsPanel';
import { AIAssistant } from '@/components/AI/AIAssistant';

const sectionTitles = {
  dashboard: 'State Dashboard Overview',
  complaints: 'State Complaint Management',
  schemes: 'State Schemes Management',
  traffic: 'State Traffic & Infrastructure',
  elderly: 'State Elderly Skill Program',
  'scam-alerts': 'State Scam Reports & Alerts',
  'admin-tools': 'State Admin Tools'
};

export function StateDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview role="state" />;
      case 'complaints':
        return <ComplaintsPanel role="state" />;
      case 'schemes':
        return <SchemesPanel role="state" />;
      case 'traffic':
        return <TrafficPanel role="state" />;
      case 'elderly':
        return <ElderlyPanel role="state" />;
      case 'scam-alerts':
        return <ScamPanel role="state" />;
      case 'admin-tools':
        return <AdminToolsPanel role="state" />;
      default:
        return <DashboardOverview role="state" />;
    }
  };

  return (
    <>
      <DashboardLayout
        title={sectionTitles[activeSection as keyof typeof sectionTitles]}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        role="state"
      >
        {renderContent()}
      </DashboardLayout>
      
      <AIAssistant role="state" />
    </>
  );
}