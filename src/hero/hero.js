import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Form from '../common/forms/signup.js';

const gradient = "linear-gradient(to top, #f4f4f4, #536dfe, #4257cb)";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        heroJson {
          title
          body
        }
      }
    `}
    render={data => (
      <div
        className="min-vh-100 ph1 pv4 flex flex-column items-center justify-center"
        id="hero"
        style={{backgroundImage: gradient}}>
        <h1 className="near-white f1 mb2 tc">{data.heroJson.title}</h1>
        <span className="near-white f4 mw7 tc mb4">{data.heroJson.body}</span>
        <Form />
      </div>
    )}
  />
)
