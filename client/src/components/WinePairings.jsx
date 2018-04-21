import React from 'react';
import Wine from './Wine';

const WinePairings = () => (
  <section className="recipe-wine">
    <h6 className="recipe-wine-title">BLUE APRON WINE PAIRING</h6>
    <div className="scroll-button-container">
      <div className="recipe-wine-container">
        <Wine />
        <Wine />
        <div className="recipe-wine-nav">
          <div className="recipe-wine-nav-button" />
        </div>
      </div>
    </div>
    {/* {wines.map(wine => <Wine img={wine.img}
    title={wine.title} sub-title={wine.sub}
    description={wine.description} /> } */}
  </section>
);

export default WinePairings;
