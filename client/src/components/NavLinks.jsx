import useDashboardContext from '../hooks/useDashboardContext';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

export default function NavLinks() {
  const { toggleShowSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={'nav-link'}
            onClick={toggleShowSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
