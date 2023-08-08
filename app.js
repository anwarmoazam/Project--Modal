function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login-form').classList.add('showloginform');
}

function closeModal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.login-form').classList.remove('showloginform');
}

document.querySelector('.btn-login').addEventListener('click',showModal)

document.querySelector('.login-form span').addEventListener('click',closeModal);

document.querySelector('.overlay').addEventListener('click',closeModal);