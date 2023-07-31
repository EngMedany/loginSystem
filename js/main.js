var signUpName=document.getElementById('signUpName')
var signUpEmail=document.getElementById('signUpEmail')
var signUpPassword=document.getElementById('signUpPassword')
var signInEmail=document.getElementById('signInEmail')
var signInPassword=document.getElementById('signInPassword')
var incorrect=document.getElementById('incorrect')
var incorrect_up=document.getElementById('incorrect_up')
var box=document.getElementById('box')
var box2=document.getElementById('box2')
// var logOutBtn=document.getElementById('logOutBtn')
var arrSignUp=[]




// logOutBtn.addEventListener('click',function(){
//     window.location.href="index.html"
// })

function logOut(){
    window.location.href="index.html"
}

if(window.location.pathname.split("/").pop()=="home.html"){
    var homePage=document.getElementById('homePage')

    homePage.innerHTML="welcome"+" "+localStorage.getItem('userName')

}


if(localStorage.getItem('users')!=null)
{
    arrSignUp=JSON.parse(localStorage.getItem('users'));
    
}

function GetData(){
    

var flag=false;

for (let index = 0; index < arrSignUp.length; index++) {
    // if(signInEmail.value==""&&signInPassword.value==""){
    // incorrect.innerHTML="All Input Is Required"

    // }
       if(signInEmail.value==arrSignUp[index].email && signInPassword.value==arrSignUp[index].password)
//    {
    {

    
        flag=true;
        localStorage.setItem('userName',arrSignUp[index].name)
    }

    

//     homePage.innerHTML="Welcome "
//     box.classList.add('d-none')
  
//     // homePage.classList.replace('d-none','d-block')

//     box2.classList.remove('d-none')
//    }
//    else{
//     incorrect.innerHTML="incorrect password or email"
//    }
}
if(flag){
    console.log(homePage);

    window.location.href="home.html"
    

   
}


}
function checkEmail(){
    for (let index = 0; index < arrSignUp.length; index++) {
        if(signUpEmail.value==arrSignUp[index].email){

            return true
        }
        
    }

}



function storeData(){

    if(signUpName.value==""&&signUpEmail.value==""&&signUpPassword.value==""){
    incorrect_up.innerHTML="All Input Is Required"
    incorrect_up.classList.replace('text-success','text-danger')

    }
    else if(checkEmail()){
        incorrect_up.innerHTML="Email is already exist"
    incorrect_up.classList.replace('text-success','text-danger')



    }
    else{

    var userObject={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value,
    }

    arrSignUp.push(userObject)
    localStorage.setItem('users',JSON.stringify(arrSignUp))
    incorrect_up.innerHTML="success"
    clear()
}
}

function clear(){
    signUpName.value=""
  signUpEmail.value=""
  signUpPassword.value=""

    }
    


// for (let index = 0; index < arrSignUp.length; index++) {
//     console.log(arrSignUp[index].name);
//     console.log(arrSignUp[index].email);
//     console.log(arrSignUp[index].password);
    
// }
// for (let index = 0; index < arrLogin.length; index++) {
//     console.log(arrLogin[index].email);
//     console.log(arrLogin[index].pass);
    
// }



// function loginUser(){
//     for (let index = 0; index < arr.length; index++) {
        
//         if(signInEmail==arr[index].email  &&  signInPassword==arr[index].password){
//             console.log('done');
//         }
        
//     }
// }
