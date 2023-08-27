import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow rowName="name" labelText="Name" type="text" />
        <FormRow rowName="lastName" labelText="Last Name" type="text" />
        <FormRow rowName="location" labelText="Location" type="text" />
        <FormRow rowName="email" labelText="Email" type="email" />
        <FormRow rowName="password" labelText="Password" type="password" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?{' '}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
