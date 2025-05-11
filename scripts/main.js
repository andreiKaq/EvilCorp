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

function active_Card () {
  const cards = document.querySelectorAll('.shop-card')

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active')
    })
  });

}

  active_Card()