function openBars() {
  const nav = document.getElementById('navList');

  const isOpen = nav.classList.contains('flex');

  if (isOpen) {
    nav.classList.remove('flex');
    nav.classList.add('hidden');
    document.removeEventListener('click', outsideClickListener);
  } else {
    nav.classList.remove('hidden');
    nav.classList.add('flex');

    setTimeout(() => {
      document.addEventListener('click', outsideClickListener);
    }, 10);

    // Optional: Close nav when any link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('flex');
        nav.classList.add('hidden');
        document.removeEventListener('click', outsideClickListener);
      });
    });
  }

  function outsideClickListener(e) {
    const isClickInside = nav.contains(e.target) || e.target.closest('button');
    if (!isClickInside) {
      nav.classList.remove('flex');
      nav.classList.add('hidden');
      document.removeEventListener('click', outsideClickListener);
    }
  }
}
