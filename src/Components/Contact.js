import React, { useState, useEffect } from "react";
import './Contact.css';

const Contact = () => {
  return (
        <form className = "form">
            <h1> Contact form </h1>
        
        <label> Name </label>
        <input placeholder = "Name" />

        <label> Email </label>
        <input placeholder = "Email" />

        <label> Message </label>
        <textarea placeholder = "Message" > </textarea>

        <button type = "submit"> Submit </button>

        </form>
  );
};

export default Contact;