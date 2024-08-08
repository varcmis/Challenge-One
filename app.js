  // Función para encriptar un texto
  function encriptarTexto() {
    let textoOriginal = document.getElementById('inputword').value;
    let textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/a/g, "ai")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar un texto
function desencriptarTexto() {
    let textoEncriptado = document.getElementById('inputword').value;
    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar mensaje de éxito
        alert('Texto copiado al portapapeles con éxito');
    }).catch(err => {
        // Mostrar mensaje de error
        alert('Error al copiar el texto al portapapeles');
        console.error('Error al copiar el texto: ', err);
    });
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function mostrarResultado(resultado) {
    asignarTextoElemento('#reportResult', resultado);
    document.getElementById('copyButton').style.display = 'block';
}

function copyResultToClipboard() {
    let resultText = document.getElementById('reportResult').innerText;
    copyToClipboard(resultText);
}