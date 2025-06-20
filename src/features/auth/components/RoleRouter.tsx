import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/hooks';
import { StateDashboard } from '@/features/dashboard/components/StateDashboard';
import { DistrictDashboard } from '@/features/dashboard/components/DistrictDashboard';
import { MandalDashboard } from '@/features/dashboard/components/MandalDashboard';

export function RoleRouter() {
  const { adminCode, userRole } = useAuth();

  const getDashboardComponent = () => {
    if (!adminCode) return <Navigate to="/login" />;

    switch (userRole) {
      case 'state':
        return <StateDashboard />;
      case 'district':
        return <DistrictDashboard district={adminCode} />;
      case 'mandal':
        return <MandalDashboard mandal={adminCode} />;
      default:
        return <Navigate to="/login" />;
    }
  };

  return (
    <Routes>
      <Route path="/*" element={getDashboardComponent()} />
    </Routes>
  );
}