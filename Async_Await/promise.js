const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log("Got the user");
        // resolve({user: "Wunna Aung"});
        reject(new Error("User not found"));
    },2000);
});

promise
.then(user => {
    console.log(user);
})
.catch(err => console.log(err.message) )