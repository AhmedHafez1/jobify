import Wrapper from '../assets/wrappers/LandingPage';

import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ducimus ad quod asperiores? Sequi dolore accusantium repellat
            eveniet, omnis, magni laboriosam ipsam possimus sit perspiciatis
            dolorum necessitatibus nam. Consectetur, iure!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="main img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
