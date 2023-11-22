import React, { useState } from 'react'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import OtpInput from "otp-input-react"
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from './firebase.config'
import { toast, Toaster } from "react-hot-toast";


const Login = () => {
  const [otp, setOtp] = useState('')
  const [ph, setPh] = useState('')
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

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
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }

  return (
    
    <section className="abhishek">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {
          user ? (
            <h2 className='abhishek8'>
              👍Login Success
            </h2>
          ) : (
            <div className='abhishek2'>

              <h1 className='abhishek3'>
                Welcome to  < br />  Login Page
              </h1>
              {
                showOTP ? (
                  <>
                    <div className='abhishek4'>
                      <BsFillShieldLockFill size={30} />
                    </div>
                    <label htmlFor='otp' className='abhishek5'>Enter your otp</label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container"
                    ></OtpInput>
                    <button onClick={onOTPVerify} className='abhishek6'>
                      {loading && (
                        <CgSpinner size={30} className="abhishek7" />
                      )}
                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className='abhishek4'>
                      <BsTelephoneFill size={30} />
                    </div>
                    <label htmlFor='' className='abhishek5'>Verify your phone number</label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput>
                    <button
                      onClick={onSignup}
                      className='abhishek6'
                    >
                      {loading && (
                        <CgSpinner size={30} className="abhishek7" />
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
    
  )
}

export default Login;
