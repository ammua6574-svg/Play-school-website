const counters = document.querySelectorAll('.counter');
const speed = 80;

const animateCounter = (el) => {
  const target = +el.dataset.target;
  const inc = Math.ceil(target / speed);
  let current = 0;
  const timer = setInterval(() => {
    current += inc;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 30);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => observer.observe(c));

document.getElementById('joinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  msg.textContent = '✅ Thank you! We will contact you soon for a free trial!';
  this.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const toys = document.querySelectorAll('.floating-toys span');
toys.forEach((t, i) => {
  t.style.left = (10 + i * 15) + '%';
  t.style.animationDelay = (i * 1.2) + 's';
});
