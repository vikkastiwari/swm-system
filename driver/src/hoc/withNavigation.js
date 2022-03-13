import { useNavigate } from 'react-router-dom';

const withNavigation = (MyComponent) => {
  return (props) => <MyComponent {...props} navigate={useNavigate()} />;
};

export default withNavigation;
