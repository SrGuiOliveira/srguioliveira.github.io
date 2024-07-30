function clique() {
    var input = document.getElementById("input").value;

    if (input === "") {
        document.getElementById("texto").innerHTML = "O campo acima está vazio!";
    } else {
        document.getElementById("texto").innerHTML = `Você digitou "${input}" no campo acima.`;
    }
}
