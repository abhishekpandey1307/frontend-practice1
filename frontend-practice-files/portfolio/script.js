document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Link clicked:', link.textContent);
  });
});

