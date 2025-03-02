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


function setBackground(urls,index){
    const bgImageDiv = document.querySelector('.bg-image');
    bgImageDiv.style.backgroundImage = `url(${urls[index]})`;
    return Math.floor(Math.random()*urls.length); 
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
    let navElements=document.getElementsByClassName("nav-link");
    activateNavElements(navElements);

    const backgroundURLS=['../resources/BistroBackground-home.jpg',
        '../resources/about-history-photo.webp',
        '../resources/about-chef_cooking.jpg',
        '../resources/altFundal.jpg',
        '../resources/Pasta-ShrimpPasta.jpg'
    ]

    let currentIndex = setBackground(backgroundURLS, Math.floor(Math.random()*backgroundURLS.length));

    setInterval(function() {
        currentIndex = setBackground(backgroundURLS, currentIndex);
    }, 10000);
    configureFooter();
}