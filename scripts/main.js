// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
const btnToggle2 = document.querySelector('.toggle-btn2');
const btnClose = document.getElementById('close');
const btnClose2 = document.getElementById('close2');
const btnRemove = document.getElementById('remover');

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementsByClassName('container')[0].classList.toggle('blured');
  document.getElementsByClassName('navbar')[0].classList.toggle('blured');   
});

btnClose.addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementsByClassName('container')[0].classList.remove('blured');
    document.getElementsByClassName('navbar')[0].classList.remove('blured');   
});

btnRemove.addEventListener('click', function () {
    document.getElementById('removerCompra').remove()
});

