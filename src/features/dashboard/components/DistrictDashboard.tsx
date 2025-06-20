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

interface DistrictDashboardProps {
  district: string;
}

const sectionTitles = {
  dashboard: 'District Dashboard Overview',
  complaints: 'District Complaint Management',
  schemes: 'District Schemes Management',
  traffic: 'District Traffic & Infrastructure',
  elderly: 'District Elderly Skill Program',
  'scam-alerts': 'District Scam Reports & Alerts',
  'admin-tools': 'District Admin Tools'
};

export function DistrictDashboard({ district }: DistrictDashboardProps) {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview role="district" district={district} />;
      case 'complaints':
        return <ComplaintsPanel role="district" district={district} />;
      case 'schemes':
        return <SchemesPanel role="district" district={district} />;
      case 'traffic':
        return <TrafficPanel role="district" district={district} />;
      case 'elderly':
        return <ElderlyPanel role="district" district={district} />;
      case 'scam-alerts':
        return <ScamPanel role="district" district={district} />;
      case 'admin-tools':
        return <AdminToolsPanel role="district" district={district} />;
      default:
        return <DashboardOverview role="district" district={district} />;
    }
  };

  return (
    <>
      <DashboardLayout
        title={`${sectionTitles[activeSection as keyof typeof sectionTitles]} - ${district.toUpperCase()}`}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        role="district"
      >
        {renderContent()}
      </DashboardLayout>
      
      <AIAssistant role="district" />
    </>
  );
}