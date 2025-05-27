// Аккордеон для FAQ
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-item.active');

    if(currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
    }

    item.classList.toggle('active');
  });
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация при прокрутке
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .model-card, .testimonial-card');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Изначально скрываем элементы
document.querySelectorAll('.feature-card, .model-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
