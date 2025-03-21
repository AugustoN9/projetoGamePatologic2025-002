function showInfoPanel(cellId) {
    const infoPanel = document.getElementById("infoPanel");
    infoPanel.style.display = "flex";
    infoPanel.textContent = `Célula ${cellId} clicada!`;
}

/*
function updateProgress() {
    let percentage = Math.round((clickedCount / 26) * 100);
    progress.textContent = percentage + "%";
    progress.style.background = `conic-gradient(#4CAF50 ${percentage}%, #ddd ${percentage}% 100%)`;
}
*/

const cellDivs = document.querySelectorAll(".tabuleiro .cellcor");
const progress = document.getElementById("progress");
const circle = document.getElementById("circle");

cellDivs.forEach(div => {
    div.addEventListener("click", function() {
        const percentage = this.getAttribute("data-value");
        circle.textContent = percentage + "%";
        progress.style.background = `conic-gradient(#4CAF50 ${percentage}%, #ddd ${percentage}% 100%)`;
        
    });
});