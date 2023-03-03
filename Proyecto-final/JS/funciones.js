document.getElementById("lista-pre").addEventListener("click", Pres);
document.getElementById("lista-nya").addEventListener("click", Nya);
document.getElementById("lista-fecha").addEventListener("click", Fecha);
document.getElementById("lista-dom").addEventListener("click", Dom);
document.getElementById("lista-email").addEventListener("click", Mail);
document.getElementById("lista-exp").addEventListener("click", Exp);
document.getElementById("lista-ap").addEventListener("click", Ap);
function Pres() {
    document.getElementById("presentacion").style.display="none"
}
function Nya() {
    document.getElementById("nya").style.display="block"
}
function Fecha() {
    document.getElementById("fecha").style.display="block"
}
function Dom() {
    document.getElementById("domicilio").style.display="block"
}
function Mail() {
    document.getElementById("email").style.display="block"
}
function Exp() {
    document.getElementById("exp").style.display="block"
}
function Ap() {
    document.getElementById("aprendizaje").style.display="block"
}