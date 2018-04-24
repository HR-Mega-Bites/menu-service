/* eslint-disable */
import React from 'react';
import $ from 'jquery';
import Wine from './Wine';

const WinePairings = () => {
  const handleArrowClick = () => {
    const $wineContainer = $('.recipe-wine-container');
    const $wineInfo = $('.recipe-wine-info');
    const numWines = $wineContainer.children.length;
    const totalContainerWidth = $wineInfo.outerWidth(true) * numWines;
    
    const getWineContainerSize = () => {
      return $wineContainer.outerWidth();
    }
    const wineContainerSize = getWineContainerSize();
    
    const getScrollDistance = () => {
      return totalContainerWidth - wineContainerSize;
    }
    const scrollDistance = getScrollDistance();

    const scrollTime = 400;
    $wineContainer.animate({scrollLeft: scrollDistance}, scrollTime);
  };

  return (
    <section className="recipe-wine">
      <h6 className="recipe-wine-title">BLUE APRON WINE PAIRING</h6>
      <div className="scroll-button-container">
        <div className="recipe-wine-container">
          <Wine />
          <Wine />
          <div className="recipe-wine-nav">
            <div onClick={() => handleArrowClick()} className="recipe-wine-nav-arrow" />
          </div>
        </div>
      </div>
      {/* {wines.map(wine => <Wine img={wine.img}
      title={wine.title} sub-title={wine.sub}
      description={wine.description} /> } */}
    </section>
  );
};

export default WinePairings;
