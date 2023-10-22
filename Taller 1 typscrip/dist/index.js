"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seriesTbody = document.getElementById("series");
const seriesAvarage = document.getElementById("avarage");
function crearTablaSeries(series) {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
        <td><span class="series-name" style="color: red; cursor: pointer;">${s.name}</span></td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        const showName = trElement.querySelector(".series-name");
    });
}
//# sourceMappingURL=index.js.map