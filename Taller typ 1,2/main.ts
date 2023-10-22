import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const seriesAvarage: HTMLElement = document.getElementById("avarage")!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((c) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="centrado">${c.id}</td>
                             <td class="centrado"><span class="series-name" style="color: blue; cursor: pointer;">${c.name}</span></td>
                             <td class="centrado">${c.channel}</td>
                             <td class="centrado">${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);

    const seriesNameElement = trElement.querySelector(".series-name");

    if (seriesNameElement) {
      seriesNameElement.addEventListener("click", () => showSeriesInfo(c));
    }
  });
}

function showSeriesInfo(series: Serie): void {
  const infoContainer = document.getElementById("series-detail");

  if (infoContainer) {
    infoContainer.innerHTML = "";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const nameElement = document.createElement("h5");
    nameElement.classList.add("card-subtitle", "mb-2", "text-muted");
    nameElement.textContent = series.name;

    const imageElement = document.createElement("img");
    imageElement.classList.add("card-img-top");
    imageElement.height = 250;
    imageElement.src = series.image;
    imageElement.alt = series.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card-text");
    descriptionElement.textContent = `Descripción: ${series.description}`;

    const webLinkElement = document.createElement("a");
    webLinkElement.classList.add("card-link");
    webLinkElement.href = series.webUrl;
    webLinkElement.textContent = "Pagina Web del programa";
    webLinkElement.target = "_blank";

    cardBody.appendChild(imageElement);
    cardBody.appendChild(nameElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(webLinkElement);
    infoContainer.appendChild(cardBody);
  }
}

function calcularPromedioSeasons(series: Serie[]): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const promedio = totalSeasons / series.length;
  let redonProm = Math.round(promedio);
  seriesAvarage.textContent = `Seasons avarage: ${redonProm}`;

  return promedio;
}

calcularPromedioSeasons(series);
renderSeriesInTable(series);
