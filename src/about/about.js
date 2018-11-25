import React from 'react';
import Illustration from '../../content/images/about__illustration.svg';
import { StaticQuery, graphql } from 'gatsby';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: {type: {eq: "copy"}, name: {eq: "about"}}) {
          html
          frontmatter {
            title
          }
        }
      } 
    `}
    render={data => (
      <div
        id="about"
        className="min-vh-100 flex flex-wrap items-center justify-around ph2 pv4 bg-light-gray">
        <section className="w-100 mw6">
          <h1 className="f2 navy">{data.markdownRemark.frontmatter.title}</h1>
          <div className="lh-copy f4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </section>
        <div className="w-100 mw6">
          <img src={Illustration} alt="" />
        </div>
      </div>
    )}
  />
)
