const buttons = document.querySelectorAll('.accordion-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // close all
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('show');
    });
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.innerHTML = b.innerHTML.replace('▴', '▾');
    });

    // open selected if it was closed
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('show');
      btn.innerHTML = btn.innerHTML.replace('▾', '▴');
    }
  });
});
