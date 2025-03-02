function activateNavElements(navElements){
    for(let i=0; i<navElements.length; i++){
        if(navElements[i].href.includes("#")){ //includes-String function
            navElements[i].style.fontWeight="bold";
            navElements[i].style.fontSize=15;
            navElements[i].style.textDecoration="underline";
            navElements[i].style.color="#B22222";
            navElements[i].style.backgroundColor="aliceblue";
            navElements[i].style.opacity=0.8;
        }    
    }
}

function setRegex(){
    const nameInput=document.getElementById("name");
    nameInput.pattern="[A-Za-z\\s]{3,20}";

    const emailInput=document.getElementById("email");
    emailInput.pattern=".*@.*";

    // const phoneInput=document.getElementById("phone");
    // phoneInput.pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})";
}

function configureFooter(){
    let footer=document.getElementsByTagName("footer")[0];
    let footer_p=document.createElement("p");
    let currentYear = new Date().getFullYear();
    let textNode = document.createTextNode("\u00A9 DelBistro " + currentYear + ". All rights reserved.");
    footer_p.append(textNode);
    footer.appendChild(footer_p);
}

window.onload=function(){
    setRegex();

    let navElements=document.getElementsByClassName("nav-link");
    activateNavElements(navElements);

    configureFooter();
}