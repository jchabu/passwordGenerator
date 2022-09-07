const password = document.getElementById('password');

function generatePassword() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength = 12;
    var passwordGenerate = '';
    for (var count = 0; count < passwordLength; count++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordGenerate += chars.substring(randomNumber, randomNumber + 1);
    }
    password.value = passwordGenerate;
}

function copyPassword() {
  var copyText = password;
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied to clipboard");
}