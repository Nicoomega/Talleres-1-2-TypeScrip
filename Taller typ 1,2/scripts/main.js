import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var seriesAvarage = document.getElementById("avarage");
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"centrado\">".concat(c.id, "</td>\n                             <td class=\"centrado\"><span class=\"series-name\" style=\"color: blue; cursor: pointer;\">").concat(c.name, "</span></td>\n                             <td class=\"centrado\">").concat(c.channel, "</td>\n                             <td class=\"centrado\">").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var seriesNameElement = trElement.querySelector(".series-name");
        if (seriesNameElement) {
            seriesNameElement.addEventListener("click", function () { return showSeriesInfo(c); });
        }
    });
}
function showSeriesInfo(series) {
    var infoContainer = document.getElementById("series-detail");
    if (infoContainer) {
        infoContainer.innerHTML = "";
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        var nameElement = document.createElement("h5");
        nameElement.classList.add("card-subtitle", "mb-2", "text-muted");
        nameElement.textContent = series.name;
        var imageElement = document.createElement("img");
        imageElement.classList.add("card-img-top");
        imageElement.height = 250;
        imageElement.src = series.image;
        imageElement.alt = series.name;
        var descriptionElement = document.createElement("p");
        descriptionElement.classList.add("card-text");
        descriptionElement.textContent = "Descripci\u00F3n: ".concat(series.description);
        var webLinkElement = document.createElement("a");
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
function calcularPromedioSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var promedio = totalSeasons / series.length;
    var redonProm = Math.round(promedio);
    seriesAvarage.textContent = "Seasons avarage: ".concat(redonProm);
    return promedio;
}
calcularPromedioSeasons(series);
renderSeriesInTable(series);
