const navToggle = document.getElementById(`navToggle`);
const navMenu = document.getElementById(`navMenu`);
navToggle.addEventListener("click", () =>   {
                            navMenu.style.display = navMenu.style.display === 'flex'? 'none' :'flex';});
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
    if (window.innerWidth < 769) navMenu.style.display = 'none';
  });
});