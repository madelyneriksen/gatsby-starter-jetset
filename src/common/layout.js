import React from 'react';
import Helmet from 'react-helmet';
import 'tachyons';


export default props => (
  <React.Fragment>
    <Helmet>
      <body className="mid-gray bg-near-white" />
    </Helmet>
    {props.children}
  </React.Fragment>
)
