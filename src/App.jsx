import './App.css';
import calcSoldItems from "./helpers/calcSoldItems.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calcStockItems from "./helpers/calcStockItems.js";
import calcItemsToBeSold from "./helpers/calcItemsToBeSold.js";
import generateName from "./helpers/generateName.js";
import generatePrice from "./helpers/generatePrice.js";
// import calcAvailableSizes from "./helpers/calcAvailableSizes.js";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import {calcAvailableSizes2} from "./helpers/calcAvailableSizes.js";
import './constants/oefenBestand.js';

function App() {
    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold -b.sold;
        });
        console.log(inventory)
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);
    }

    function mostSoldFirstClicked(){
        console.log("Meest verkocht eerst");
    }

    function cheapestFirstClicked() {
        console.log("Goedkoopste eerst");
    }

    function suitableForSportFirstClicked() {
        console.log("Meest geschikt voor sport eerst");
    }

  return (
      <>
        <header>
          <h1>Tech it easy dashboard</h1>
        </header>
        <main>
          <h2>Verkoopoverzicht</h2>
          <section className="sales-overview">
            <article className="article-items-sold">
              <h3>Aantal verkochte producten</h3>
              <p>{calcSoldItems(inventory)}</p>
            </article>
            <article className="article-items-bought">
              <h3>Aantal ingekochte producten</h3>
                <p>{calcStockItems(inventory)}</p>
            </article>
            <article className="article-items-to-be-sold">
              <h3>Aantal te verkopen producten</h3>
                <p>{calcItemsToBeSold(inventory)}</p>
            </article>
          </section>
          <h2>Best verkochte tv</h2>
          <section className="bestselling-tv">
              <article className="article-tv">
                  <img className= "img-tv" src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Samsung tv"/>
                  <div className="tv-text-div">
                      <p>{generateName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</p>
                      <p>{generatePrice(bestSellingTv.price)}</p>
                      <p>{calcAvailableSizes2(bestSellingTv.availableSizes)}</p>
                      <p><img className="icon-check" src={checkIcon} alt="Check icon"/> wifi <img className="icon-minus" src={minusIcon} alt="Minus icon"/> speech <img className="icon-check" src={checkIcon} alt="Check icon"/> hdr <img className="icon-check" src={checkIcon} alt="Check icon"/> bluetooth <img className="icon-minus" src={minusIcon} alt="Minus icon"/> ambilight</p>
                  </div>
              </article>
          </section>
            <h2>Alle tv's</h2>
            <section className="section-all-tvs">
                <div className="div-sort-buttons">
            <button className="btn-sort" type="button" onClick={sortBestSellers}>Meest verkocht eerst</button>
            <button className="btn-sort"  type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
            <button className="btn-sort"  type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>
                </div>
                {inventory.map((tv) => {
                    return (
                        <article className="article-tv map-article">
                            <img className= "img-tv" src={tv.sourceImg} alt="Afbeelding televisie"/>
                            <div className="tv-text-div">
                                <p>{generateName(tv.brand, tv.type, tv.name)}</p>
                                <p>{generatePrice(tv.price)}</p>
                                <p>{calcAvailableSizes2(tv.availableSizes)}</p>
                                <p>{tv.options.map((option) => {
                                    if (option.applicable === true) {
                                        return <img className="icon-check" src={checkIcon} alt="Check icon"/>;
                                    //     Waarom lukt het mij niet om ook de option.name weer te geven naast het icoon? Onderstaande manieren heb ik geprobeerd:
                                    //     return <img className="icon-check" src={checkIcon} alt="Check icon"/> option.name;
                                    //     return <img className="icon-check" src={checkIcon} alt="Check icon"/> {option.name};
                                    } else {
                                        return <img className="icon-minus" src={minusIcon} alt="Minus icon"/>;
                                    }
                                })}</p>
                            </div>
                        </article>
                    )
                })}

            </section>
        </main>
      </>
  )
}

export default App
