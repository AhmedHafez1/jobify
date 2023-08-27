import { useContext } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';

const useDashboardContext = () => useContext(DashboardContext);

export default useDashboardContext;
