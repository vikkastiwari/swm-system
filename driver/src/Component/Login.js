import React from 'react'

const Login =()=>{
    return (
        <div className="wrapper">
        <div className="page">
            <div className="page-content h-100">
                <div className="background theme-header"><img src="img/city2.jpg" alt=""/></div>
                <div className="row mx-0 h-100 justify-content-center">
                    <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto text-center align-self-center">
                        <img src="img/logo-w.png" alt="" className="login-logo"/>
                        <h1 className="login-title"><small>Welcome to,</small><br/>Overux</h1>
                        <br/>
                        <h5 className="text-white mb-4">Sing in</h5>
                        <div className="login-input-content ">
                            <div className="form-group">
                                <input type="text" className="form-control rounded text-center" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control rounded text-center" placeholder="Password"/>
                            </div>
                            <a href="dashboard.html" className="btn btn-block btn-success rounded border-0 z-3">Sign in</a>
                        </div>
                        <br/>
                        <br/>
                        <div className="row no-gutters">
                            <div className="col-6 text-left"><a href="forgot-password.html" className="text-white mt-3">Forget Password?</a></div>
                            <div className="col-6 text-right"><a href="register.html" className="text-white text-center mt-3">Sign up</a></div>
                        </div>                        
                    </div>
                </div>

                <br/>

            </div>

        </div>

    </div>
    )
}
export default Login;