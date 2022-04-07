const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if(id){
        //remove active from button and add active to target button
        btns.forEach(btn => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hide other articles
        articles.forEach(article => {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
} )