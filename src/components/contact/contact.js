import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_jsabwf8',
      'template_4mguruv',
      {
        name,
        email,
        message,
      },
      '0Rq78dzAOptShc-9J'
    )
      .then(
        (result) => {
          setShowSuccessMessage(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setShowErrorMessage(true);
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Contact Me</h2>
        {showSuccessMessage && <p className="contact__success-message">Thank you for your message! We will be in touch soon.</p>}
        {showErrorMessage && <p className="contact__error-message">Error sending your message. Please try again later.</p>}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__form-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;