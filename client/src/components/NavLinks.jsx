import useDashboardContext from '../hooks/useDashboardContext';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { PropTypes } from 'prop-types';

export default function NavLinks({ BigSideBar }) {
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
            onClick={!BigSideBar && toggleShowSidebar}
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

NavLinks.propTypes = {
  BigSideBar: PropTypes.bool,
};
