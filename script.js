document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.primary-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = 'game.html';
    });
  });

  const heroTitle = document.querySelector('.hero-copy h1');

  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => {
      heroTitle.style.textShadow = '0 0 28px rgba(255, 140, 70, 0.5)';
    });

    heroTitle.addEventListener('mouseleave', () => {
      heroTitle.style.textShadow = 'none';
    });
  }

  document.querySelectorAll('.feature-card, .match-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-3px)';
      item.style.borderColor = 'rgba(255, 170, 92, 0.28)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.borderColor = 'rgba(255,255,255,0.06)';
    });
  });
});
