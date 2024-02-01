import './App.css';
import calcSoldItems from "./helpers/calcSoldItems.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calcStockItems from "./helpers/calcStockItems.js";
import calcItemsToBeSold from "./helpers/calcItemsToBeSold.js";
import generateName from "./helpers/generateName.js";
import generatePrice from "./helpers/generatePrice.js";
import calcAvailableSizes from "./helpers/calcAvailableSizes.js";

function App() {

  return (
      <>
        <body>
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
                  <span className="img-bestelling-tv"><img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Samsung tv"/></span>
                  <div>
                      <p>{generateName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</p>
                      <p>{generatePrice(bestSellingTv.price)}</p>
                      <p>{calcAvailableSizes(bestSellingTv.availableSizes)}</p>
                  </div>
              </article>
          </section>
        </main>
        </body>
      </>
  )
}

export default App
