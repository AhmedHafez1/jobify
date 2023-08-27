import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSideBar, NavBar, SmallSideBar } from '../components';

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
