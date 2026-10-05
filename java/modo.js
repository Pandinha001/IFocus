const botao = document.getElementById("botao-tema");

if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
}

if (botao) {
  botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
      localStorage.setItem("tema", "escuro");
    } else {
      localStorage.setItem("tema", "claro");
    }
  });
}