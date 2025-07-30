import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMaintenanceStore } from '../stores/maintenanceStore';

const MaintenanceRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isInMaintenance } = useMaintenanceStore();

  useEffect(() => {
    if (isInMaintenance && location.pathname !== '/maintenance') {
      navigate('/maintenance');
    }
  }, [isInMaintenance, location.pathname, navigate]);

  return null;
};

export default MaintenanceRedirect;