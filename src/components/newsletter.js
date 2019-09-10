import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';



const EmailListForm = () => {

  const [email, setEmail ] = useState('');

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called")
    addToMailchimp(email)
      .then((data) => {
         setMessage('Email added succesfully :)')
      })
      .catch((err) => {
        console.log(err)
      });
  };
  const handleEmailChange = (event) => {
     setEmail(event.currentTarget.value);
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ marginTop: "40px"}}><strong>AND SUBSCRIBE TO OUR <span style={{color: "#79a43d"}}>NEWSLETTER!</span></strong></h3>
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
          style={{padding: "8px", width: "200px", display: "block", margin: "10px auto"}}
        />
        <button  type="submit" style={{padding: "8px 30px", backgroundColor:"#79a43d", color: "white", borderRadius: "4px", letterSpacing: "0.5px" }}>SUBSCRIBE</button>
        <p style={{ marginBottom: "40px", fontWeight: "400", fontSize: "16px" }}>{message}</p>
      </div>
    </form>
  );
};

export default EmailListForm;