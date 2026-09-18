const BASE_URL = "https://rickandmortyapi.com/api";
const enpoint = "/character";

const container = document.querySelector(".container");

function getCharacters() {
  fetch(`${BASE_URL}${enpoint}`)
    .then((resp) => resp.json())
    .then((data) => {
        const results = data.results;
        results.forEach(element => {
            const card = document.createElement("article");

            const imgBlock = document.createElement("div");
            imgBlock.className = "card-img";
            const image = document.createElement("img");
            image.src = element.image;
            imgBlock.appendChild(image);
            
            const textBlock = document.createElement("div");
            textBlock.className = "card-text";
            
            const firstSection = document.createElement("div");
            const secondSection = document.createElement("div");
            const thirdSection = document.createElement("div");
            const name = document.createElement("a");
            name.textContent = element.name;
            name.href = element.url;
            name.target = "_blank";
            const statusAndSpecies = document.createElement("div");
            statusAndSpecies.textContent = `${element.status === "Alive" ? "🟢" : element.status === "Dead" ? "🔴" : "⚪️"} ${element.status} - ${element.species}`;




            const lastKnown = document.createElement("span");
            lastKnown.textContent = "Last known location:";

            const lastLink = document.createElement("a");
            lastLink.textContent = element.location.name;
            lastLink.href = element.location.url;
            lastLink.target = "_blank";



            const firstSeen = document.createElement("span");
            firstSeen.textContent = "First seen in:";

            const firstLink = document.createElement("a");
            firstLink.textContent = element.origin.name;
            firstLink.href = element.origin.url;
            firstLink.target = "_blank";


            firstSection.append(name, statusAndSpecies);
            secondSection.append(lastKnown, lastLink);
            thirdSection.append(firstSeen, firstLink);

            textBlock.append(firstSection, secondSection, thirdSection);
            
            card.append(imgBlock, textBlock);

            container.appendChild(card);

        })
    });
}

getCharacters();