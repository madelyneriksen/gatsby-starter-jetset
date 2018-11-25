import React from 'react';
import { Link } from 'gatsby';
import { MainCta } from '../common/buttons/cta.js';


const navLinkClasses = "no-underline f4 mid-gray dn db-ns";


class Nav extends React.Component {
  render() {
    return (
      <nav
        className="bg-near-white flex items-center justify-around w-100 pv2 top-0"
        style={{position: "sticky"}}>
        <h2 className="db mid-gray">
          <Link to="/" className="no-underline navy">
            JetSet
          </Link>
        </h2>
        <a href="#about" className={navLinkClasses}>About</a>
        <a href="#features" className={navLinkClasses}>Features</a>
        <a href="#contact" className={navLinkClasses}>Contact</a>
        <a href="#hero" className={MainCta + " no-underline"}>Get Notified</a>
      </nav>
      )
    }
}

export default Nav;
