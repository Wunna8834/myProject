const characterList = document.querySelector(".characterList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter(character => {
        return(
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
})

const loadCharacters = async() => {
    try{
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        console.log(hpCharacters);
        displayCharacters(hpCharacters);
    }
    catch(err){
        console.log(err);
    }
}

const displayCharacters = (characters) =>{
    const htmlString = characters.map((character) => {
        return`
        <div class="wraper">
        <img src="${character.image}" alt="">
        <div class="textWrapper">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <p>Ancestry: ${character.ancestry}</p>
            
        </div>
    </div>
        `;
    })
    .join("");
    characterList.innerHTML = htmlString;
}

loadCharacters();