document.querySelectorAll('.login_tab_button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.login_tab_button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelector('.login_button').addEventListener('click', function() {
  let id = document.querySelector('.login_input[type="text"]').value;
  let password = document.querySelector('.login_input[type="password"]').value;
  
  if (id === '' || password === '') {
    document.querySelector('.same_error_message').style.display = 'block';
  } else {
    document.querySelector('.same_error_message').style.display = 'none';
  }
});