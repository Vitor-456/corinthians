// Menu responsivo e atualização do ano no rodapé
const menuBotao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navegacao");

if (menuBotao && menu) {
  menuBotao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuBotao.setAttribute("aria-expanded", aberto);
    menuBotao.textContent = aberto ? "✕" : "☰";
  });
}

document.querySelectorAll(".ano").forEach((elemento) => {
  elemento.textContent = new Date().getFullYear();
});
