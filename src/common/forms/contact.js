import React from 'react';
import "./styles/contact.css"
import { MainCta } from '../buttons/cta.js';


const formClasses = "w-100 pv2 bg-transparent f4 bn contact__form"


class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "", email: "", message: ""};
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleMessage(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <form>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-100 ph2 pv4">
            <input
              type="text"
              value={this.state.name}
              name="name"
              className={formClasses}
              placeholder="Your Name"
              onChange={this.handleName}
              required />
          </div>
          <div className="w-100 ph2 pv4">
            <input
              type="email"
              value={this.state.email}
              name="email"
              className={formClasses}
              placeholder="Email"
              onChange={this.handleEmail}
              required />
          </div>
          <div className="w-100 ph2 pv4">
            <textarea
              value={this.state.message}
              name="message"
              className={formClasses}
              placeholder="Questions, Comments, Concerns..."
              required
              rows="1"
              onChange={this.handleMessage} />
          </div>
          <input
            type="submit"
            value="Submit"
            className={MainCta + " w-100 mw5"} />
        </div>
      </form>
    )
  }
}

export default ContactForm;
