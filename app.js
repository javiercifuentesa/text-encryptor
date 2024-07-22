// 1. Obtener elementos del DOM
const inputText = document.getElementById('text');
const resultText = document.getElementById('result');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');

// Función para generar un carácter aleatorio
function randomChar() {
    const chars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

// 2. Definir funciones de encriptación y desencriptación
function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        // Desplazamiento variable según la posición del carácter
        charCode += (i % 26) + 1;
        encryptedText += String.fromCharCode(charCode) + randomChar(); // Añadir carácter aleatorio
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';
    for (let i = 0, j = 0; i < text.length; i += 2, j++) {
        let charCode = text.charCodeAt(i);
        // Revertir el desplazamiento variable
        charCode -= (j % 26) + 1;
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}

// 3. Asignar eventos a los botones
encryptButton.addEventListener('click', function() {
    resultText.value = encrypt(inputText.value);
});

decryptButton.addEventListener('click', function() {
    resultText.value = decrypt(inputText.value);
});

// 1. Obtener el elemento del botón "copy" del DOM
const copyButton = document.getElementById('copy');

// 2. Asignar un evento de clic al botón "copy"
copyButton.addEventListener('click', function() {
    // 3. Utilizar la API del portapapeles para copiar el contenido de `resultText`
    navigator.clipboard.writeText(resultText.value)
        .then(() => {
            // 4. Opcional: Pegar el contenido copiado directamente en `inputText`
            inputText.value = resultText.value;
            console.log('Texto copiado al portapapeles y pegado en el área de texto de entrada.');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});

// 1. Obtener el elemento del botón "clear" del DOM
const clearButton = document.getElementById('clear');

// 2. Asignar un evento de clic al botón "clear"
clearButton.addEventListener('click', function() {
    // 3. Establecer el valor del `textarea` con id `text` a una cadena vacía
    document.getElementById('text').value = '';
});