function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            
            console.log("this is register section");
            console.log("This is callback");
            return resolve("Error while registering!");
        },2000);

    });
   
}

function sendEmail(){
    return new Promise((resolve,reject)=>{

        setTimeout(function(){
            console.log("this is sendEmail section");
            console.log("this is callback2");
            resolve();

            
        },3000)
    });
   
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("this is login section");
            console.log("this is callback3");
            resolve();

            
            
        },4000)

    });
   
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("this is getUserData section");
            console.log("this is callback4");
            resolve();

            
        },4000)
    })
   
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("this is displayUserData section");
            resolve();

        },4000)
    })
   
}

// callback here in form of nested function
// register(function(){
// sendEmail(function(){
// login(function(){
// getUserData(function(){
// displayUserData();
// });
// });
// });
// });

// using promise

// NOTE:which parameter we pass in then we access from 'resolve' 
// NOTE:which parameter we pass in catch we access from 'reject'

register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch(function(err){
    console.log("Error:",err);

});

console.log("all other function working properly!"); 
