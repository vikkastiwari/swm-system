import { useLocation } from 'react-router-dom';

const withLocation = (MyComponent) => {
  return (props) => <MyComponent {...props} location={useLocation()} />;
};

export default withLocation;
