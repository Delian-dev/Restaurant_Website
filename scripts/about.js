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

function addAward(){
    let ulAwards=document.getElementById("awards-ul");
    console.log(ulAwards)
    let award=prompt("Introduceti numele premiului:");
        if(!award){
            const defaultvalue=localStorage.length+1;
            award="Premiul"+defaultvalue;
        }
    localStorage.setItem(localStorage.length,award);
    let liAward=document.createElement("li");
    liAward.textContent=award;
    ulAwards.appendChild(liAward);
}

function loadAwards(){
    if(localStorage.length>0){
        let ulAwards=document.getElementById("awards-ul");
        for(let i=0; i<localStorage.length; i++){
            const key=localStorage.key(i);
            if(!isNaN(key)){
                let liAward=document.createElement("li");
                liAward.textContent=localStorage.getItem(key);
                ulAwards.appendChild(liAward);
            }
        }
    }
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
    
    loadAwards();
    //console.log(localStorage);

    const awardsBtn=document.getElementById("awards-btn");
    awardsBtn.addEventListener("click",addAward);

    const clearAwardsBtn=document.getElementById("clear-awards");
    clearAwardsBtn.addEventListener("click",()=>{
        for(let i=0; i<localStorage.length; i++){
            const key=localStorage.key(i);
            if(!isNaN(key)){
                localStorage.removeItem(key);
                i-=1;
            }
        }
        let ulAwards=document.getElementById("awards-ul");
        ulAwards.innerHTML='';
    })

    const glovoBtn=document.getElementById("glovo-btn");
    glovoBtn.addEventListener("click",(e)=>{
        alert("The Glovo App is not available at this time. Try again later");
        e.stopPropagation();
    })
    const tazzBtn=document.getElementById("tazz-btn");
    tazzBtn.addEventListener("click",(e)=>{
        alert("The Tazz App is not available at this time. Try again later");
        alert("Button that triggered the event: " + e.target.id)
        e.stopPropagation();
        let test=window.getComputedStyle(tazzBtn)
        console.log(test)
    })

    const deliverySection=document.getElementsByClassName("delivery")[0];
    deliverySection.addEventListener("click",(e)=>{
        
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        const line4 = document.getElementById('line4');

        const styleLine1=window.getComputedStyle(line1); //getComputedStyle

        if(styleLine1.display!="none"){
            line1.style.display="none";
            line2.style.display="none";
            line3.style.display="none";
            line4.style.display="none";
            alert("The delivery scooter has stopped!");
        }
        else{
            line1.style.display="block";
            line2.style.display="block";
            line3.style.display="block";
            line4.style.display="block";
            alert("The delivery scooter is running again!");
        }
        alert("This action was activated by clicking on: "+e.currentTarget.className);
    })

    configureFooter();
}

