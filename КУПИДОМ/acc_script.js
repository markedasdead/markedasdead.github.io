document.querySelectorAll('.faq__acc').forEach(acc => {
  acc.addEventListener('click', () => {
    document.querySelectorAll('.faq__acc').forEach(otherAcc => {
      if (otherAcc !== acc) {
        otherAcc.classList.remove('active');
      }
    });

    acc.classList.toggle('active');
  });
});
