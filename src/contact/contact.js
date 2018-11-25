import React from 'react';
import ContactForm from '../common/forms/contact.js';


export default () => (
  <div
    id="contact"
    className="min-vh-100 pa2 pv4 flex flex-wrap items-center justify-center">
    <div className="mw7 w-100">
      <div className="ph2">
        <h1 className="navy">Questions? Get in touch.</h1>
        <div className="mw3 navy"><hr /></div>
      </div>
      <ContactForm />
    </div>
  </div>
)
