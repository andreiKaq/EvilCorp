function init() {    
    document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navbar.classList.toggle('active');
    });
  });
  
}

init()