const password =document.getElementById('password');
const username =document.getElementById('username');

document.getElementById('form').addEventListener('submit', (e)=>{
  e.preventDefault();
  valid = true;
  const passwprd_value = password.value;
  const username_value = username.value;

  if (username_value.length < 5 || passwprd_value < 12 ){
    alert('The form has not been submitted. ');
    valid=false;
  }
  if (valid){
    alert('The form has been completed.');
  }
})