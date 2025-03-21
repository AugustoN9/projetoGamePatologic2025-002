function checkAnswer(element, isCorrect) {
    const result = document.getElementById("result");
    if (isCorrect) {
        result.textContent = "Correto! A biópsia é a remoção e análise de um fragmento de tecido vivo para diagnóstico.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorreto! Tente novamente.";
        result.style.color = "red";
    }
}