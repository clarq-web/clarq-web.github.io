// Seleção de elementos
const toggle = document.getElementById("mode-toggle");
const elementos = {
  nctc: document.querySelectorAll(".noncontac"),
  txt: document.querySelectorAll("h1, p, li, h4, h2"),
  bckgrnd: document.querySelectorAll("header, section, footer"),
  lg: document.querySelectorAll(".logo"),
  socialButtons: document.querySelectorAll(".social-button")
};

// Função para alternar classes
function alternarClasses(elementos, acao, classe) {
  elementos.forEach(elemento => elemento.classList[acao](classe));
}

// Função para alterar o logo
function alterarLogo(elementos, src) {
  elementos.forEach(elemento => {
    elemento.innerHTML = `<img src=${src} alt="logoheader">`;
  });
}

// Função para alternar o modo
function alternarModo(ativado) {
  const acaoClasse = ativado ? 'add' : 'remove';
  const logoSrc = ativado ? '/media/wlogo.svg' : '/media/blogo.svg';

  alternarClasses(elementos.nctc, acaoClasse, "txt-drk");
  alternarClasses(elementos.txt, acaoClasse, "txt-drk");
  alternarClasses(elementos.bckgrnd, acaoClasse, "bck-drk");
  alternarClasses(elementos.socialButtons, acaoClasse, "social-button-dark");
  alterarLogo(elementos.lg, logoSrc);
}

// Event listener para o toggle
toggle.addEventListener("change", () => alternarModo(toggle.checked));

// Event listener para os botões de redes sociais
elementos.socialButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = button.getAttribute("data-href");
  });
});
