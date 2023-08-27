import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h3>Oh! Page not found!</h3>
          <p>We can not find the page you are looking for! </p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <h3>Something went wrong!</h3>
          <p>Please try again.</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
};

export default Error;
