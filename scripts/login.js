document.addEventListener('DOMContentLoaded', function() {
    let navElements=document.getElementsByClassName("nav-link");
    activateNavElements(navElements);
   
    document.getElementById("login-form").addEventListener("submit", function(e){
        e.preventDefault();
    
        const username = document.getElementById("username").value;
        const password=document.getElementById("password").value;
    
        fetch("../users_data/users.json")
            .then((response)=>response.json())
            .then((users)=>{
                const userExists = users.some(
                    (user) => user.username === username && user.password === password
                );
                if(userExists){
                    sessionStorage.setItem("username",username);
                    alert("Autentificare reusita!");
                    window.location.href="successfulLogin.html";
                }
                else{
                    window.location.href="404.html";
                }
            })
            .catch((error)=>{
                console.error("Eroare la preluarea listei de utilizatori: ",error);
            })
    })
});

function activateNavElements(navElements){
    for(let i=0; i<navElements.length; i++){
        if(navElements[i].href.includes("#")){ //functie din biblioteca string
            navElements[i].style.fontWeight="bold";
            navElements[i].style.fontSize=15;
            navElements[i].style.textDecoration="underline";
            navElements[i].style.color="#B22222";
            navElements[i].style.backgroundColor="aliceblue";
            navElements[i].style.opacity=0.8;
        }    
    }
}