import React from 'react'

const ForgetPassword =()=>{
    return (
        <div className="wrapper">
        <div className="page">
            <div className="page-content h-100">
                <div className="background theme-header"><img src="img/city.jpg" alt=""/></div>
                <div className="row mx-0 h-100 justify-content-center">
                    <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto text-center align-self-center">
                        <img src="img/logo-w.png" alt="" className="login-logo"/>
                        <br/>
                        <br/>
                        <h5 className="text-white mb-4">Reset Password</h5>
                        <div className="login-input-content ">
                            <p className="text-white">Please enter your email address which you have registered with us. We will send you information steps to reset you password.</p>
                            <div className="form-group">
                                <input type="text" className="form-control rounded text-center" placeholder="Email address"/>
                            </div>
                            <a href="dashboard.html" className="btn btn-block btn-success rounded border-0 z-3">Reset</a>
                        </div>
                        <br/>
                        <br/>
                        <div className="row no-gutters">
                            <div className="col-12 text-center"><a href="login.html" className="text-white mt-3">Already have password? Sign in Now!</a></div>
                        </div>                        
                    </div>
                </div>

                <br/>

            </div>

        </div>
        

    </div>

    )
}
export default ForgetPassword;