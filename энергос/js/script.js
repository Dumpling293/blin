

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', () => {
    dropdowns.forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('show');
      }
    });
    dropdown.classList.toggle('show');
  });
});


