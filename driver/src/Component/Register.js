import React from 'react'

const Register =()=>{
    return (
        <div className="wrapper">
        <div className="page">
            <div className="page-content h-100">
                <div className="background theme-header"><img src="img/city2.jpg" alt=""/></div>
                <div className="row mx-0 h-100 justify-content-center">
                    <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto text-center align-self-center">
                        <img src="img/logo-w.png" alt="" className="login-logo"/>
                        <br/>
                        <br/>
                        <h5 className="text-white mb-4">Register with us</h5>
                        <br/>
                        <div className="login-input-content ">
                            <div className="form-group">
                                <input type="text" className="form-control rounded text-center" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control rounded text-center" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control rounded text-center" placeholder="Phone number"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control rounded text-center" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control rounded text-center" placeholder="Confirm Password"/>
                            </div>
                            <a href="login.html" className="btn btn-block btn-success rounded border-0 z-3">Sign Up</a>
                        </div>
                        <br/>
                        <br/>
                        <div className="row no-gutters">
                            <div className="col-12 text-center text-white">Already have account?<br/>Please <a href="login.html" className="text-white font-weight-bold mt-3">Sign In</a> here.</div>
                        </div>                        
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>
    );
}
export default Register;