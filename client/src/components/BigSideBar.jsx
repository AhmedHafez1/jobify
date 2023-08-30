import Wrapper from '../assets/wrappers/BigSidebar';
import useDashboardContext from '../hooks/useDashboardContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function BigSideBar() {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks BigSideBar />
        </div>
      </div>
    </Wrapper>
  );
}
