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
    elemento.innerHTML = `<img src="${src}" alt="logoheader">`;
  });
}

// Função para alternar o modo
function alternarModo(ativado) {
  const acaoClasse = ativado ? 'add' : 'remove';
  const logoSrc = ativado ? '/static/assets/wlogo.svg' : '/static/assets/blogo.svg';

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

// Salvar o estado do modo no cache
function salvarEstadoModo(ativado) {
  localStorage.setItem('modoDark', ativado);
}

// Carregar o estado do modo do cache
function carregarEstadoModo() {
  return localStorage.getItem('modoDark') === 'true';
}

// Inicializar o modo com base no cache
document.addEventListener("DOMContentLoaded", () => {
  const modoDarkAtivado = carregarEstadoModo();
  toggle.checked = modoDarkAtivado;
  alternarModo(modoDarkAtivado);
});

// Atualizar o cache quando o modo for alternado
toggle.addEventListener("change", () => {
  const ativado = toggle.checked;
  alternarModo(ativado);
  salvarEstadoModo(ativado);
});