document.querySelectorAll('.login_tab_button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.login_tab_button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});