import './App.css';
import calcSoldItems from "./helpers/calcSoldItems.js";
import {inventory} from "./constants/inventory.js";
import calcStockItems from "./helpers/calcStockItems.js";
import calcItemsToBeSold from "./helpers/calcItemsToBeSold.js";

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
          <section>
            <span><img src="" alt=""/></span>
            <div>

            </div>
          </section>
        </main>
        </body>
      </>
  )
}

export default App
