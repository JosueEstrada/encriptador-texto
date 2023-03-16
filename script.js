const buttonEncrypt = document.querySelector('[data-btn-encrypt]');
const buttonDecrypt = document.querySelector('[data-btn-decrypt]');
const buttonCopy = document.querySelector('[data-btn-copy]');

// Crear contenedor de resultado
const outputContainer = document.querySelector('[data-result-container]');
const result = document.createElement('div');
const resultText = document.createElement('span');
resultText.setAttribute('data-copy-text', '');
outputContainer.prepend(result);
result.appendChild(resultText);

const encryptMessage = (e) => {
    e.preventDefault();
    const input = document.querySelector('[data-textarea]');
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
    const input = document.querySelector('[data-textarea]');
    const value = input.value;
    input.value = '';
    let message = value.toLowerCase();
    let messageDecrypted = '';
    messageDecrypted = message.replaceAll('ai', 'a');
    messageDecrypted = messageDecrypted.replaceAll('enter', 'e');
    messageDecrypted = messageDecrypted.replaceAll('imes', 'i');
    messageDecrypted = messageDecrypted.replaceAll('ober', 'o');
    messageDecrypted = messageDecrypted.replaceAll('ufat', 'u');
    resultText.innerText = messageDecrypted;
    deleteDefaultMessage();
};

const copyMessage = (e) => {
    e.preventDefault();
    console.log('funciona copy')
    const textToCopy = document.querySelector('[data-copy-text]');
    navigator.clipboard.writeText(textToCopy.innerText).then(() => {
        console.log('Texto copiado correctamente.');
    }).catch((err) => {
        console.error('Error al copiar el texto: ', err);
    });
};

const deleteDefaultMessage = () => {
    const deleteDefault = document.querySelector('[data-default]');
    deleteDefault.setAttribute('hidden', 'true');
}

// BOTONES ON CLICK
// const buttonEncrypt = document.querySelector('.btn-dark');
// const button2 = document.querySelector('.btn-light');
const addButtonListener = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        buttonElement.classList.add('active');
    });

    const resetButton = () => {
        buttonElement.classList.remove('active');
    };

    buttonElement.addEventListener('mouseout', resetButton);
};

addButtonListener(buttonEncrypt);
addButtonListener(buttonDecrypt);

// Evento Listener

buttonEncrypt.addEventListener('click', encryptMessage);
buttonDecrypt.addEventListener('click', decryptMessage);
buttonCopy.addEventListener('click', copyMessage);