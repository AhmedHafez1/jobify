import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow rowName="email" labelText="Email" type="email" />
        <FormRow rowName="password" labelText="Password" type="password" />
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a member?{' '}
          <Link to="/register" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
