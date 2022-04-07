const friends = [
    {
        id: 0,
        name: "Wunna Aung",
        age: 23,
        education: "Under Gratitude",
        skill: "Swel Sone Kyan",
        image: "me.jpg",
        text: "Wunna Aung, also known as the sayar gyi of everything because he knows everything.", 
    },
    {
        id: 1,
        name: "Khant Thu Naing",
        age: 23,
        education: "Under Gratitude",
        skill: "Ma Har Tayar Kyan",
        image: "KTN.jpg",
        text: "Khant Thu Naing, the drawing god. He knows all about engineering drawing and god of MOM(Mother of Mechanics).", 
    },
    {
        id: 2,
        name: "Aung Kyaw Hein",
        age: 23,
        education: "Mahar Zaw Ti Ka",
        skill: "Sout Myint Kat Ag Kyan",
        image: "AKH.jpg",
        text: "Aung Kyaw Hein(Tongue Master 69), there is nothing in the world he doesn't know.", 
    },
    {
        id: 3,
        name: "Wai Phyo Aung",
        age: 23,
        education: "Master in coding",
        skill: "Kyout Pho Kaung Lout Ag Kyan",
        image: "WP.jpg",
        text: "The god of coding, he even knows all syntax of the programing languages that never exist.", 
    },
    {
        id: 4,
        name: "Phu Pwint Khine",
        age: 23,
        education: "Under Gratitude",
        skill: "A Kyan Sone",
        image: "ppk.jpg",
        text: "The short girl but she is the god of the gods.", 
    },
];

const img = document.getElementById("person-img");
const friend = document.getElementById("name");
const age = document.getElementById("age");
const edu = document.getElementById("edu");
const skill = document.getElementById("skill");
const text = document.getElementById("text");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
    const item = friends[currentItem];
    img.src = item.image;
    friend.innerText = item.name;
    age.innerText = item.age;
    edu.innerText = item.education;
    skill.innerText = item.skill;
    text.innerText = item.text;
});

 showPerson = (person) => {
    const item = friends[person];
    img.src = item.image;
    friend.innerText = item.name;
    age.innerText = item.age;
    edu.innerText = item.education;
    skill.innerText = item.skill;
    text.innerText = item.text;
};

nextBtn.addEventListener("click", () => {
    console.log("mml");
    currentItem++;
    if(currentItem > friends.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = friends.length - 1;
    }
    showPerson(currentItem);
})

