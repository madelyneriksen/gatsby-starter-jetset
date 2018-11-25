import React from 'react';
import { LightCta } from '../buttons/cta.js';


class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="flex flex-wrap items-center justify-center w-100">
        <input
          type="text"
          value={this.state.value}
          name="email"
          className="bg-near-white mid-gray shadow-5 br-pill bn pa3 ph4 ph5-m mh2 mv2 tc w-100 mw6"
          placeholder="Your Email Address."
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Get Notified"
          className={LightCta} />
      </form>
    )
  }
}

export default EmailForm;
