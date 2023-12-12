import React, { useState } from 'react'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import OtpInput from "otp-input-react"
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from './firebase.config'
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [otp, setOtp] = useState('')
  const [ph, setPh] = useState('')
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignup()
        },
        'expired-callback': () => {

        }
      });

    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatph = '+' + ph
    signInWithPhoneNumber(auth, formatph, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(true);
        setShowOTP(true);
        toast.success('OTP send Successfully')
      }).catch((error) => {
        console.log(error);
        setLoading(false)
      });

  }
  function onOTPVerify() {
    setLoading(true)
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user)
        setLoading(false)
        setTimeout(() => {
          navigate('/home'); // Redirect to home page after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        <Button variant="outline-primary">Home</Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
    <section className="loginpage">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {
          user ? (
            <h2 className='sucesslogo'>
              👍Login Success
            </h2>
          ) : (
            <div className='loginbox'>

              <h1 className='welcometext'>
                Welcome to  < br />  Login Page
              </h1>
              {
                showOTP ? (
                  <>
                    <div className='telephoneicon'>
                      <BsFillShieldLockFill size={30} />
                    </div>
                    <label htmlFor='otp' className='phonelabel'>Enter your otp</label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container"
                    ></OtpInput>
                    <button onClick={onOTPVerify} className='signupbutton'>
                      {loading && (
                        <CgSpinner size={30} className="spinner" />
                      )}
                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className='telephoneicon'>
                      <BsTelephoneFill size={30} />
                    </div>
                    <label htmlFor='' className='phonelabel'>Verify your phone number</label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput>
                    <button
                      onClick={onSignup}
                      className='signupbutton'
                    >
                      {loading && (
                        <CgSpinner size={30} className="spinner" />
                      )}
                      <span>Send code via SMS</span>
                    </button>
                  </>
                )

              }
            </div>
          )}

      </div>
    </section>
    </>
  )
}

export default Login;
