
document.getElementById('user-register').addEventListener('click', function(){
    // handle user name
    const handleUserName = document.getElementById('user-name');
    const userName = handleUserName.value;
    console.log(userName);
    // handle user email
    const handleUserEmail = document.getElementById('user-email');
    const userEmail = handleUserEmail.value;
    console.log(userEmail);
    // handle user password
    const handlePassword = document.getElementById('user-password');
    const userPassword = handlePassword.value;
    console.log(userPassword);
    // handle user confirm password
    const handleConfirmPassword = document.getElementById('user-confirm-password');
    const userConfirmPassword = handleConfirmPassword.value;
    console.log(userConfirmPassword);

    if(userName == 'imran' && userEmail == 'imran@dev.com' && userPassword == '123' && userConfirmPassword == '123'){
        window.location.href = 'index.html';
    }

})