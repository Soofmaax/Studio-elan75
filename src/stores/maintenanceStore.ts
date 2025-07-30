import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MaintenanceState {
  isInMaintenance: boolean;
  setMaintenanceMode: (status: boolean) => void;
}

export const useMaintenanceStore = create<MaintenanceState>()(
  persist(
    (set) => ({
      isInMaintenance: false,
      setMaintenanceMode: (status) => set({ isInMaintenance: status }),
    }),
    {
      name: 'maintenance-storage',
    }
  )
);