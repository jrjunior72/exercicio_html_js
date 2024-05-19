document.getElementById("form-validation").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B deve ser maior que A.");
    }
});