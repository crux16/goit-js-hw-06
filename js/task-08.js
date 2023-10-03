const formSubmit = document.querySelector('.login-form');
const loginObject = [];

const loginForm = (event) =>     {
    const {email,password} = event.currentTarget;
    if(email.value && password.value){
        event.preventDefault();
        let hiddenPass = '';
        for (let i = 0; i < password.value.length; i += 1){
            hiddenPass += '*';
        };
        const temp = {email:email.value,password:password.value};
        loginObject.push(temp);
         console.log(...loginObject);
         event.currentTarget.reset();
         return;
    }
        return alert('all fields must be filled in!');
};

formSubmit.addEventListener('submit', loginForm);
