const buttonEncrypt = document.querySelector('[data-btn-encrypt]');
const buttonDecrypt = document.querySelector('[data-btn-decrypt]');
const buttonCopy = document.querySelector('[data-btn-copy]');

// Crear contenedor de resultado
const outputContainer = document.querySelector('[data-result-container]');
const result = document.createElement('div');
const resultText = document.createElement('span');
outputContainer.prepend(result);
result.appendChild(resultText);

const encryptMessage = (e) => {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = '';
    let message = value.toLowerCase();
    let messageEncrypted = '';
    let arr = [];
    for (const messageElement of message) {
        arr.push(messageElement);
    }
    // Recorrer el array y reemplazar por la encriptacion
    arr.forEach((element, index) => {
        switch (element) {
            case 'a':
                arr[index] = 'ai';
                break;
            case 'e':
                arr[index] = 'enter';
                break;
            case 'i':
                arr[index] = 'imes';
                break;
            case 'o':
                arr[index] = 'ober';
                break;
            case 'u':
                arr[index] = 'ufat';
                break;
        }
    });
    messageEncrypted = arr.join('');
    resultText.innerText = messageEncrypted;
    deleteDefaultMessage();
};

const decryptMessage = (e) => {
    e.preventDefault();
    console.log('funciona decryp')
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = '';
    let message = value.toLowerCase();
    let messageEncrypted = '';
};

const copyMessage = (e) => {
    e.preventDefault();
    console.log('funciona copy')
};

const deleteDefaultMessage = () => {
    const deleteDefault = document.querySelector('.defaultMessage');
    deleteDefault.setAttribute('hidden', true);
}


// Evento Listener
buttonEncrypt.addEventListener('click', encryptMessage);
buttonDecrypt.addEventListener('click', decryptMessage);
buttonCopy.addEventListener('click', copyMessage);