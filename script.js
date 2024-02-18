async function loadAndProcessData() {

const response = await fetch("./data/ddo_fullforms_2023-10-11.csv");
const rawtext = await response.text();

globalArrayofWords = rawtext.split("\n").map(line => {
    const parts = line.split("\t");
    return {
        variant: parts[0],
        headword: parts[1],
        homograph: parts[2],
        partofspeech: parts[3],
        id: parts[4]
    }
});
console.log(globalArrayofWords);
}

function sortDanishWords() {
    globalArrayOfWords.sort((a, b) => a.variant.localeCompare(b.variant, 'da'));
}

loadAndProcessData().then(() => {
    console.log("Data loaded and processed.");
    sortDanishWords();
    console.log("Data sorted according to Danish alphabetical rules:", globalArrayOfWords);
}).catch(error => {
    console.error("An error occurred:", error);
});

