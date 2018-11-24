import React from 'react';


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
      <form className="flex">
        <input
          type="text"
          value={this.state.value}
          name="email"
          className="bg-near-white mid-gray shadow-5 br-pill bn pa3 ph5 mh2 tc"
          placeholder="Your Email Address."
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Get Notified"
          className="bg-blue near-white shadow-5 br-pill pv3 bn ph4 grow" />
      </form>
    )
  }
}

export default EmailForm;
