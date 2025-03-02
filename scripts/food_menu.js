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

function showAlert(message, duration) {
    const alertDiv = document.getElementById('custom-alert');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, duration);
}

function newMenuItem(categoryId,dishName, price, description, quantity, imageSrc) {
    const categoryMenu = document.getElementById(categoryId);
    let newCategoryItem = document.createElement("div");
    newCategoryItem.classList.add("menu-item");
    let newCategoryItem_presentation = document.createElement("div");
    newCategoryItem_presentation.classList.add("item-presentation");

    let itemImg = document.createElement("img");
    itemImg.src = imageSrc;
    itemImg.alt = "Couldn't load image";
    if(!itemImg.complete){ //daca imaginea a fost incarcata este true, altfel fals
        itemImg.style.backgroundColor="black";
    }


    let newCategoryItem_desc = document.createElement("div");
    newCategoryItem_desc.classList.add("item-desc");

    let h3_presentation = document.createElement("h3");
    h3_presentation.textContent = dishName;
    let span_presentation = document.createElement("span");
    span_presentation.textContent = "Price: " + price + "$";
    let p_desc = document.createElement("p");
    p_desc.textContent = description;
    let span_desc = document.createElement("span");
    span_desc.textContent = "Estimated quantity " + quantity + ":g";

    newCategoryItem_presentation.appendChild(h3_presentation);
    newCategoryItem_presentation.appendChild(span_presentation);

    newCategoryItem_desc.appendChild(p_desc);
    newCategoryItem_desc.appendChild(span_desc);

    newCategoryItem.appendChild(newCategoryItem_presentation)
    newCategoryItem.appendChild(itemImg)
    newCategoryItem.appendChild(newCategoryItem_desc)
    
    categoryMenu.appendChild(newCategoryItem)
}

function deleteMenuItem(categoryId){
    const categoryMenu=document.getElementById(categoryId);
    const menuItemsCategory=categoryMenu.querySelectorAll("div.menu-item");
    let pozitie=prompt("Introduceti indicele preparatului pe care vreti sa-l eliminati:")
    if(pozitie>=0 && pozitie<menuItemsCategory.length)
        menuItemsCategory[pozitie].remove();
    else
        alert("Index invalid!");
}

function configureFooter(){
    let footer=document.getElementsByTagName("footer")[0];
    let footer_p=document.createElement("p");
    let currentYear = new Date().getFullYear();
    let textNode = document.createTextNode("\u00A9 DelBistro " + currentYear + ". All rights reserved.");
    footer_p.append(textNode);
    footer.appendChild(footer_p);
}

window.onload = function () {
    let navElements=document.getElementsByClassName("nav-link");
    activateNavElements(navElements);


    const breakfastBtn = document.getElementById("breakfast-btn");
    breakfastBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;

        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");

        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("breakfast",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)
        
    })

    const breakfastDeleteBtn=document.getElementById("delete-breakfast");
    breakfastDeleteBtn.addEventListener("click", ()=>{
        deleteMenuItem("breakfast");
    })

    const appetizersBtn = document.getElementById("appetizers-btn");
    appetizersBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;
        
        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");

        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("appetizers",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)
    })

    const appetizerDeleteBtn=document.getElementById("delete-appetizer");
    appetizerDeleteBtn.addEventListener("click",()=>{
        deleteMenuItem("appetizers");
    })

    const soupsBtn = document.getElementById("soups-btn");
    soupsBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;
        
        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");

        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("soups",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)

    })

    const soupsDeleteBtn=document.getElementById("delete-soups");
    soupsDeleteBtn.addEventListener("click",()=>{
        deleteMenuItem("soups");
    })

    const pastaBtn = document.getElementById("pasta-btn");
    pastaBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;
        
        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");
        
        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("pasta",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)
    })
    
    const pastaDeleteBtn=document.getElementById("delete-pasta");
    pastaDeleteBtn.addEventListener("click",()=>{
        deleteMenuItem("pasta");
    })

    const mainCourseBtn = document.getElementById("mainCourse-btn");
    mainCourseBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;
        
        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");
       
        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("main-course",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)
    })

    const mainCourseDeleteBtn=document.getElementById("delete-mainCourse");
    mainCourseDeleteBtn.addEventListener("click",()=>{
        deleteMenuItem("main-course");
    })

    const dessertBtn = document.getElementById("dessert-btn");
    dessertBtn.addEventListener("click", () => {
        const dishName = prompt("Introduceti numele preparatului: ");
        
        let dishPrice;
        do{
            dishPrice = prompt("Introduceti pretul preparatului(valoare numerica, default:50): ");
        }while(isNaN(dishPrice));
        if(!dishPrice)
            dishPrice=50;
        
        const dishInfo = prompt("Introduceti eventuale precizari pentru preparat: ");

        let dishGramaj;
        do{
            dishGramaj = prompt("Introduceti gramajul preparatului(valoare numerica, default:250): ");
        }while(isNaN(dishGramaj));
        if(!dishGramaj)
            dishGramaj=250;

        const imageSrc = prompt("Introduceti URL-ul imaginii pentru preparat: ");
        
        showAlert("Item uploading...", 3000);

        setTimeout(()=>{
            newMenuItem("dessert",dishName, dishPrice, dishInfo, dishGramaj, imageSrc);
        },3000)
    })

    const dessertDeleteBtn=document.getElementById("delete-dessert");
    dessertDeleteBtn.addEventListener("click",()=>{
        deleteMenuItem("dessert");
    })

    configureFooter();

}