const formSubmit = document.querySelector('.login-form');

const loginForm = (event) =>     {
    const {email,password} = event.currentTarget;
    if(email.value && password.value){
         console.log(`email: ${email.value} password: ${password.value}`);
         event.currentTarget.reset();
         return alert('Successful login!');
    }
        return alert('all fields must be filled in!');
};

formSubmit.addEventListener('submit', loginForm);
