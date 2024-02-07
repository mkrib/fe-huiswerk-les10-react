// function calcAvailableSizes(sizesArray) {
//     let output = '';
//
//     for (let i = 0; i < sizesArray.length; i++) {
//         const currentSizeInches = sizesArray[i];
//         const currentSizeCm = Math.round(sizesArray[i] * 2.54);
//
//         // Format de string
//         output += `${currentSizeInches} inch (${currentSizeCm} cm)`;
//
//         // Als we nog NIET bij de laatste size zijn, voeg dan een | toe aan het eind
//         if (i < sizesArray.length - 1) {
//             output = `${output} | `;
//         }
//     }
//
//     return output;
// }
//
// export default calcAvailableSizes;

export function calcAvailableSizes2(sizesArray) {
    return sizesArray.map((size) => {
        return `${size} inch (${Math.round(size * 2.54)}) cm `
    }).join("| ");
}