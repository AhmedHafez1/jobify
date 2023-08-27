import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSideBar, NavBar, SmallSideBar } from '../components';
import { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'Ahmed' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleShowSidebar = () => setShowSidebar(!showSidebar);
  const logoutUser = async () => console.log('Log out user');

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleShowSidebar,
        logoutUser,
      }}
    >
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
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
