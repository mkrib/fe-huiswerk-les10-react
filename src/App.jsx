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
              <article className="article-bestselling-tv">
                  <img className= "img-bestselling-tv" src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Samsung tv"/>
                  <div className="bestselling-tv-text-div">
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
            <button className="btn-sort" type="button" onClick={mostSoldFirstClicked}>Meest verkocht eerst</button>
            <button className="btn-sort"  type="button" onClick={cheapestFirstClicked}>Goedkoopste eerst</button>
            <button className="btn-sort"  type="button" onClick={suitableForSportFirstClicked}>Meest geschikt voor sport eerst</button>
                </div>
            </section>
        </main>
      </>
  )
}

export default App
