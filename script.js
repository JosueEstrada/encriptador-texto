const buttonEncrypt = document.querySelector('[data-btn-encrypt]');
const buttonDecrypt = document.querySelector('[data-btn-decrypt]');
const buttonCopy = document.querySelector('[data-btn-copy]');
// console.log(buttonCopy);
// console.log(buttonDecrypt);
// console.log(buttonEncrypt);

const encryptMessage = (e) => {
    e.preventDefault();
    // console.log('funciona encryt')
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = '';
    let message = value.toLowerCase();
    let messageEncrypted = '';
    // console.log(value);
    // console.log(message);
    let arr = [];
    for (const messageElement of message) {
        arr.push(messageElement);
    }
    // console.log(message);
    // console.log('lista array:', arr);
    // Recorrer el array y reemplazar por la encriptacion
    arr.forEach((element, index) => {
        //console.log('elemento: ' + element + ' index ' + index);
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
    // console.log('encriptado: ',arr);
    // console.log(arr.join(''));
    messageEncrypted = arr.join('');
    console.log('var messageEncrypted: ', messageEncrypted);
};

const decryptMessage = (e) => {
    e.preventDefault();
    console.log('funciona decryp')
};

const copyMesagge = (e) => {
    e.preventDefault();
    console.log('funciona copy')
};
// Evento Listener
buttonEncrypt.addEventListener('click', encryptMessage);
buttonDecrypt.addEventListener('click', decryptMessage);
buttonCopy.addEventListener('click', copyMesagge);