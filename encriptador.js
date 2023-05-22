function convertirVocales(texto) {
    texto = texto.replaceAll(/e/g, "enter");
    texto = texto.replaceAll(/i/g, "imes");
    texto = texto.replaceAll(/a/g, "ai");
    texto = texto.replaceAll(/o/g, "ober");
    texto = texto.replaceAll(/u/g, "ufat");
    return texto;
}

function revertirVocales(texto) {
    texto = texto.replaceAll(/ai/g, "a");
    texto = texto.replaceAll(/enter/g, "e");
    texto = texto.replaceAll(/imes/g, "i");
    texto = texto.replaceAll(/ober/g, "o");
    texto = texto.replaceAll(/ufat/g, "u");
    return texto;
}

function textoFinal(tipo) {
    const texto = document.getElementById("textarea").value;
    const textocifrado = tipo(texto);
    const resultado = document.getElementById("resultado");
    resultado.textContent = textocifrado;
}

function variables(tipo) {
    const texto = document.getElementById("textarea").value;
    const patron = /^[a-z\s]+$/;
    if (texto === "") {
        document.getElementsByClassName("textarea")[0].placeholder = "Ingrese un texto por favor";
        document.getElementById("textarea").focus();
    } else if (!patron.test(texto)) {
        document.getElementById("textarea").value = "";
        document.getElementsByClassName("textarea")[0].placeholder = "Recuerde, solo letras minúsculas y sin acentos";
        document.getElementById("textarea").focus();
    } else {
        document.getElementById("textoEncriptado").style.display = "flex";
        document.getElementById("eliminar").style.display = "block";
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("texto-rectangulo").style.display = "none";
        textoFinal(tipo);
        document.getElementById("textarea").focus();
    }
}

function botonEncriptar() {
    variables(convertirVocales)
}

function botonDesencriptar() {
    variables(revertirVocales)
}

function botonCopiar() {
const elemento = document.getElementById('resultado');
const contenido = elemento.textContent;
document.getElementById("textarea").value = contenido;
document.getElementById("textarea").focus();
navigator.clipboard.writeText(contenido)
  .then(() => {
    console.log('El contenido ha sido copiado al portapapeles');
  })
  .catch(err => {
    console.error('Error al copiar el contenido al portapapeles: ', err);
  });
}

function botonEliminar(){
    const eliminar = document.getElementById("eliminar");
    if (eliminar) {
        document.getElementById("textarea").value = "";
        document.getElementById("textarea").focus();
    }
}