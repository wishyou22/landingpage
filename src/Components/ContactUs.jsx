
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"
import support from "./Assets/businesswoman-call-center-office.jpg"


const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qnvw4s5', 'template_ogeqypd', form.current, 'ipUvNoWN-ZVdZn_mU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
  const done=()=>{
       window.alert("Your Form Has Been Submitted")
  }
  return (
    <div>
      <div className='main-contact-div'>
        <div className='support-text'><h1>Need Support?</h1></div>
        <div className='contact-div'>
          <div className='contact-img'><img src={support} alt='apic'/></div>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>

              <div className='name-div'><input type="text" name="user_name" placeholder='Name' required /></div>
              
              <div className='email-div'><input type="email" name="user_email" placeholder='Email Id'/></div>
              <div className='email-div'><input type="number" name="user_phoneno" placeholder='Phone Number'  required/></div>
              <div className='main-radio-div'> 

               <div className='radio-div'> <div> <input type="radio" name="user_want"  value="App"  required/></div><div>App</div></div>
                <div className='radio-div'><div><input type="radio" name="user_want"  value="Panel"   required/></div><div>Panel</div></div>
              </div>
              <div className='Meassage-div'><textarea name="message" placeholder='Message'  required /></div>
             <div className='main-submit-btn'> <div className='submit-btn'><input type="submit" value="Send" onClick={done} /></div></div>
            </form>




          </div>

        </div>
        <div className='ending-support-div'>
     <h1>
  
 " Have questions? Want to know more? Reach out to us anytime.
           Your educational journey begins here "
    

     </h1>

        </div>
        <div>


        </div>

      </div>

    </div>
  )
}

export default ContactUs