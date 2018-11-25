import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const cardClasses = `
w-100 mw6 bg-near-white ma3 flex flex-column
 justify-center items-center pa2 br3
`;
const cardStyles = {maxWidth: "22rem", minHeight: "28rem"}


const Card = props => (
  <div
    className={cardClasses}
    style={cardStyles}>
    {props.children}
  </div>
)


export default () => (
  <StaticQuery
    query={graphql`
      query {
        card1: cardsJson(card: {eq: 1}) {
          title
          body
        }
        card2: cardsJson(card: {eq: 2}) {
          title
          body
        }
        card3: cardsJson(card: {eq: 3}) {
          title
          body
        }
      }  
    `}
    render={data => (
      <div
        id="features"
        className="min-vh-100 bg-light-gray flex flex-wrap items-center justify-center">
        <Card>
          <h2 className="db navy tc">{data.card1.title}</h2>
          <p className="db lh-copy f4 tc">{data.card1.body}</p>
        </Card>
        <Card>
          <h2 className="db navy tc">{data.card2.title}</h2>
          <p className="db lh-copy f4 tc">{data.card2.body}</p>
        </Card>
        <Card>
          <h2 className="db navy tc">{data.card3.title}</h2>
          <p className="db lh-copy f4 tc">{data.card3.body}</p>
        </Card>
      </div>
    )}
  />
)
