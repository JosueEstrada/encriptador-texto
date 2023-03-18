const buttonEncrypt = document.querySelector('[data-btn-encrypt]');
const buttonDecrypt = document.querySelector('[data-btn-decrypt]');
const buttonCopy = document.querySelector('[data-btn-copy]');

// Crear contenedor de resultado
// const outputContainer = document.querySelector('[data-result-container]');
// const result = document.createElement('div');
// const resultText = document.createElement('span');
// resultText.setAttribute('data-copy-text', '');
// outputContainer.prepend(result);
// result.appendChild(resultText);
const resultText = document.querySelector('[data-copy-text]');

const output = document.querySelector('.output');



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
    if (messageEncrypted === message) {
        console.log('Ninguna vocal encontrada');
        // Mostrar mensaje default
        output.style.display = 'none';
        showDefaultMessage();
    }
    else {
        resultText.innerText = messageEncrypted;
        output.style.display = 'revert';
        deleteDefaultMessage();
        showButtonCopy();
    }
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
    output.style.display = 'revert';
    deleteDefaultMessage();
    showButtonCopy();
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
    deleteDefault.style.display = 'none';
}
const showDefaultMessage = () => {
    const deleteDefault = document.querySelector('[data-default]');
    deleteDefault.style.display = 'revert';
}

const showButtonCopy = () => {
    const showCopy = document.querySelector('.btn-copiar');
    showCopy.style.display = 'revert';
}

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

// Mostrar y ocultar el nav
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');
logo.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
logo.addEventListener('mouseenter', () => {
    navMenu.style.display = 'flex';
});

// Refrescar pagina
document.getElementById("refresh-button").addEventListener("click", function() {
    location.reload();
});


// Evento Listener

buttonEncrypt.addEventListener('click', encryptMessage);
buttonDecrypt.addEventListener('click', decryptMessage);
buttonCopy.addEventListener('click', copyMessage);