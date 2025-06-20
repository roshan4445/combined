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
import { VoiceComplaintAssistant } from '@/components/Voice/VoiceComplaintAssistant';

interface MandalDashboardProps {
  mandal: string;
}

const sectionTitles = {
  dashboard: 'Mandal Dashboard Overview',
  complaints: 'Mandal Complaint Management',
  schemes: 'Mandal Schemes Management',
  traffic: 'Mandal Traffic & Infrastructure',
  elderly: 'Mandal Elderly Skill Program',
  'scam-alerts': 'Mandal Scam Reports & Alerts',
  'admin-tools': 'Mandal Admin Tools'
};

export function MandalDashboard({ mandal }: MandalDashboardProps) {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview role="mandal" mandal={mandal} />;
      case 'complaints':
        return <ComplaintsPanel role="mandal" mandal={mandal} />;
      case 'schemes':
        return <SchemesPanel role="mandal" mandal={mandal} />;
      case 'traffic':
        return <TrafficPanel role="mandal" mandal={mandal} />;
      case 'elderly':
        return <ElderlyPanel role="mandal" mandal={mandal} />;
      case 'scam-alerts':
        return <ScamPanel role="mandal" mandal={mandal} />;
      case 'admin-tools':
        return <AdminToolsPanel role="mandal" mandal={mandal} />;
      default:
        return <DashboardOverview role="mandal" mandal={mandal} />;
    }
  };

  return (
    <>
      <DashboardLayout
        title={`${sectionTitles[activeSection as keyof typeof sectionTitles]} - ${mandal.toUpperCase()}`}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        role="mandal"
      >
        {renderContent()}
      </DashboardLayout>
      
      <AIAssistant role="mandal" />
      <VoiceComplaintAssistant />
    </>
  );
}