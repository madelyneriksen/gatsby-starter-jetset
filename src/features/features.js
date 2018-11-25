import React from 'react';


const cardClasses = `
w-100 mw6 bg-near-white ma3 flex flex-column justify-center items-center pa2 
br3
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
  <div
    id="features"
    className="min-vh-100 bg-light-gray flex flex-wrap items-center justify-center">
    <Card>
      <h2 className="db navy tc">Customize</h2>
      <p className="db lh-copy f4 tc">Ipsum ea eos molestiae occaecati repudiandae. At et et aperiam cumque.</p>
    </Card>
    <Card>
      <h2 className="db navy tc">Build</h2>
      <p className="db lh-copy f4 tc">Ipsum ea eos molestiae occaecati repudiandae. At et et aperiam cumque.</p>
    </Card>
    <Card>
      <h2 className="db navy tc">Deploy!</h2>
      <p className="db lh-copy f4 tc">Ipsum ea eos molestiae occaecati repudiandae. At et et aperiam cumque.</p>
    </Card>
  </div>
)
