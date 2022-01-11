import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = (props) => {
  useEffect(() => {
    document.getElementById("root").style.height = "100%";
  }, []);
  return (
    <>
      <div
        className='error404 text-center'
        style={{ height: "100%", paddingTop: "80px" }}>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <Link to='/' className='text-center'>
              <img
                alt='image-404'
                src='assets/img/logo2.svg'
                className='theme-logo'
              />
            </Link>
          </div>
        </div>
        <div className='container-fluid error-content'>
          <div className=''>
            <h1 className='error-number'>{props.code}</h1>
            <p className='mini-text'>Ooops!</p>
            <p className='error-text mb-4 mt-1'>{props.message}</p>
            <Link to='/' className='btn btn-primary mt-5'>
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
