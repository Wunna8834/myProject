let API = "https://www.themealdb.com/api/json/v1/1/";

let app = document.querySelector(".app");

let screen = {
    main: app.querySelector(".main-screen"),
    recipe: app.querySelector(".recipe-screen")
};

(async function(){
    let res = await fetch(API + "list.php?c=list");
    let data = res.json();
    let catagories = data.meals;
    for(let i = 1; i < catagories.length; i++){
        let div = document.createElement("div");
        div.innerText = catagories[i];
        div.addEventListener("click", function(){
            screen.main.querySelector(".catagories .active").classList.remove("active");
            div.classList.add("active");
            getRecipesOfCatagory(catagories[i].strCategory);
        });
        if(i == 1){
            div.classList.add("active");
        }
        screen.main.querySelector(".catagories").appendChild(div);
    }
})();