import calcStockItems from "./calcStockItems.js";
import calcSoldItems from "./calcSoldItems.js";

function calcItemsToBeSold(productArray) {

    return calcStockItems(productArray) - calcSoldItems(productArray);
}

export default calcItemsToBeSold;