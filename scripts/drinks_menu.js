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

function newCocktail(drinkName,drinkPrice,ingredients,drinkSize,imageSrc){
    const cocktailMenu=document.getElementById("cocktails");
    let newCocktail=document.createElement("div");
    newCocktail.classList.add("drink-item");

    let newCocktailPresentation=document.createElement("div");
    newCocktailPresentation.classList.add("item-presentation");

    let itemImg = document.createElement("img");
    itemImg.src = imageSrc;
    itemImg.alt = "Couldn't load image";
    if(!itemImg.complete){ //daca imaginea a fost incarcata este true, altfel fals
        itemImg.style.backgroundColor="black";
    }

    let newCocktailDesc=document.createElement("div");
    newCocktailDesc.classList.add("item-desc");

    let h3Presentation=document.createElement("h3");
    h3Presentation.textContent=drinkName;
    let spanPresentation=document.createElement("span");
    spanPresentation.textContent="Price: "+drinkPrice+"$";

    newCocktailPresentation.appendChild(h3Presentation);
    newCocktailPresentation.appendChild(spanPresentation);

    let ingredientText=document.createElement("span");
    ingredientText.textContent="Ingredients:";

    let lista_ingrediente=document.createElement("ul");
    for(let i=0; i<ingredients.length; i++){
        let ingredient=document.createElement("li");
        ingredient.textContent=ingredients[i];
        lista_ingrediente.appendChild(ingredient);
    }

    let span_desc=document.createElement("span");
    span_desc.textContent="Serving size:"+drinkSize+"ml";

    newCocktailDesc.appendChild(ingredientText);
    newCocktailDesc.appendChild(lista_ingrediente);
    newCocktailDesc.appendChild(span_desc);

    newCocktail.appendChild(newCocktailPresentation);
    newCocktail.appendChild(itemImg);
    newCocktail.appendChild(newCocktailDesc);

    cocktailMenu.append(newCocktail);
}

function drinkRoulette(){
    const cocktailMenu=document.getElementById("cocktails");
    const cocktails=cocktailMenu.querySelectorAll("div.drink-item");
    const nrCocktailuri=cocktails.length
    if(nrCocktailuri>0){
        const indice=Math.floor(Math.random()*nrCocktailuri);
        const infoCocktail=cocktails[indice].textContent;
        cocktails[indice].remove();
        alert("A fost sters cocktail-ul: "+infoCocktail);
    }
    else
        alert("Nu avem ce cocktail sa eliminam!");
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

    const addDrinkBtn=document.getElementById("add-drink");
    addDrinkBtn.addEventListener("click",()=>{
        const drinkName=prompt("Introduceti numele cocktail-ului:");

        let drinkPrice;
        do{
            drinkPrice = prompt("Introduceti pretul cocktail-ului(valoare numerica, default:10): ");
        }while(isNaN(drinkPrice));
        if(!drinkPrice)
            drinkPrice=10;

        let noOfIngredients;
        do{
            noOfIngredients=prompt("Introduceti numarul de ingrediente ale cocktail-ului(valoare numerica, default:2):");
        }while(isNaN(noOfIngredients));
        if(!noOfIngredients)
            noOfIngredients=2;

        let ingredients=[]
        for(let i=0; i<noOfIngredients; i++){
            let ingredient=prompt("Introduceti un ingredient:");
            ingredients.push(ingredient);
        }

        let drinkSize;
        do{
            drinkSize = prompt("Introduceti cantitatea cocktail-ului(valoare numerica, default:200): ");
        }while(isNaN(drinkSize));
        if(!drinkSize)
            drinkSize=200;
        
        const imageSrc = prompt("Introduceti URL-ul imaginii pentru cocktail: ");

        newCocktail(drinkName,drinkPrice,ingredients,drinkSize,imageSrc);
    })


    const deleteDrinkBtn=document.getElementById("delete-drink");
    deleteDrinkBtn.addEventListener("click",drinkRoulette);

    configureFooter();
}