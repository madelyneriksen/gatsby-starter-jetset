import React from 'react';
import Form from '../common/forms/signup.js';

const gradient = "linear-gradient(to top right, indigo, tomato)";

export default () => (
  <div
    className="min-vh-100 ph1 pv4 flex flex-column items-center justify-center"
    id="hero"
    style={{backgroundImage: gradient}}>
    <h1 className="near-white f1">Pre-launch Your Project</h1>
    <Form />
  </div>
)
