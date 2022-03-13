import { useLocation, useNavigate } from 'react-router-dom';

const withLocation = (MyComponent) => {
  return (props) => (
    <MyComponent {...props} location={useLocation()} navigate={useNavigate()} />
  );
};

export default withLocation;
