let form=document.getElementById('form')
let email=document.getElementById('email')
let password=document.getElementById('password')
let password2=document.getElementById('password2')
let username=document.getElementById('username')
form.addEventListener('submit',e =>{
e.preventDefault();

validateInputs()
});

let  setError=(element, message)=>{
let inputControl=element.parentElement;
let  errorDisplay=inputControl.querySelector('.error')
errorDisplay.innerText = message;
inputControl.classList.add('error')
inputControl.classList.remove('success')

}
const  setSuccess=element=>{
    let inputControl=element.parentElement;
    let  errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText = ''
    inputControl.classList.remove('error')
    inputControl.classList.add('success')
    
    }
    const  isValidEmail=email=>{
   
      
        const  re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase())
    }
const validateInputs = () => {
    
    const emailValue=email.value.trim()
    const usernameValue=username.value.trim()
    const passwordValue=password.value.trim()
    const password2Value=password2.value.trim()
   

    if(usernameValue=== ''){
        setError(username,'username is requerted');
    }else{
        setSuccess(username);
    }
    if(emailValue===  ''){
        setError(email,'email is requerted');
    }else if(!isValidEmail(emailValue)){
        setError(email,'email is not valid  email address');
    }else{
        setSuccess(email);
    }
    if(passwordValue===''){
        setError(password,'password is requerted')
    }else if(passwordValue.length < 8 ){
        setError(password,'password must be at least 8 characters');
    }else{
        setSuccess(password);
    }
    if(password2Value=== ''){
        setError(password2,'password confirim your password');
    }else if(password2Value !== passwordValue){
        setError(password2,"passwords does not  match");
    }else{
        setSuccess(password2);
    }
    }

