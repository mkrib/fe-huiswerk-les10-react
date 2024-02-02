import {inventory} from "./inventory.js";

// Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.

const tvType = inventory.map((inventory) => {
    return inventory.type;
});

console.log(tvType);

//     Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOutTvs = inventory.filter((tv) => {
    if (tv.originalStock === 0) {
        return tv;
    }
});

console.log(soldOutTvs);

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.

const findTvType = inventory.find((tv) => {
    return tv.type === 'NH3216SMART';
});

console.log(findTvType);


//     Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

let suitable = '';

const brandNameSuitableForSport = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        suitable = true;
    } else if (tv.refreshRate < 100) {
        suitable = false;
    }
    return `name: ${tv.brand} ${tv.name}, suitable: ${suitable} `;
})

console.log(brandNameSuitableForSport);

//     Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

const screenSizeBiggerThan65 = inventory.filter((tv) => {
    return tv.availableSizes.find((size) => {
        return size >= 65;
    });
});

console.log(screenSizeBiggerThan65);

// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.

const optionAmbilight = inventory.filter((tv) => {
    return tv.options.find((option) => {
        (option.name === "ambiLight") && (option.applicable === true);
    });
});

    console.log(optionAmbilight);