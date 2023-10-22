import { Serie } from "./Serie";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const seriesAvarage: HTMLElement = document.getElementById("avarage")!;

function crearTablaSeries(series: Serie[]): void {
  series.forEach((s) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
        <td><span class="series-name" style="color: red; cursor: pointer;">${s.name}</span></td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>`;

    seriesTbody.appendChild(trElement);

    const showName = trElement.querySelector(".series-name");

    //if (showName) {
    //  showName.addEventListener("click", () => showInfo(s));
    //}
  });
}

//function showInfo(serie: Serie): void {}
