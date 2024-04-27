import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a16d65d-2abd-4918-ae75-010ba6df25f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">  
      <h3>Send us a message <img src={msg_icon} alt="" /></h3>
      <p>Reach out to us! Connect for inquiries, support, or collaborations. We're here to help</p>
      <ul>
        <li><img src={mail_icon} alt="" /> contact@meshdex.com</li>
        <li><img src={phone_icon} alt="" /> +91 321123334</li>
        <li><img src={location_icon} alt="" /> 77, yoyo ave,<br />Ma 321121 Dubai</li>
      </ul>
      </div>
      <div className="contact-col">  
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter your name' required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' />
        <label>Mail Id</label>
        <input type="mail" name='mail' placeholder='Enter your mail id' />
        <label>Write your messages here</label>
        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
