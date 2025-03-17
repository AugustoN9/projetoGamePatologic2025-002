function showContent(image) {
  const content = document.getElementById("content");
  content.style.backgroundImage = `url(${image})`;
  content.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const voltar = document.getElementById("content");

  voltar.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "home.html";
  });

});


    const isChecked = document.getElementById("concluir");
    document.querySelectorAll('button').forEach(button => {
        button.disabled = !isChecked;
    });
