import Wrapper from '../assets/wrappers/SmallSidebar';
import useDashboardContext from '../hooks/useDashboardContext';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

export default function SmallSideBar() {
  const { showSidebar, toggleShowSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          toggleShowSidebar
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={toggleShowSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className={'nav-link'}
                  onClick={toggleShowSidebar}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
