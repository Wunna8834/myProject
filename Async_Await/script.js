console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Now we have the data')
            resolve({userEmail: email}) ;
        }, 3000)
    })
    
};

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve (["video1", "video2", "video3"]);
        },1000)
    })
    
};

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('title of the video')
        }, 2000)
    })
    
};
// const user = loginUser('wunnaaung99@gmail.com', 'awisemanoncesaid', user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//     });
//     videoDetails(videos[0], title => {
//         console.log(title);
//     })
// });
// console.log(user);

// loginUser('wunna@gmail.com', 'papaya')
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));
// console.log("End");

async function displayUser(){
    try{
        const loggedUser = await loginUser('wunna', 3456);
        const video = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(video[0]);
        console.log(detail);
    }
    catch(err){
        console.log("We have the error")
    }
}
displayUser();
// const yt = new Promise(reslove => {
//     setTimeout( () => {
//         console.log('getting stuff from you tube');
//         reslove({ videos: [1,2,3,4] });
//     }, 2000)
// });

// const fb = new Promise(reslove => {
//     setTimeout( () => {
//         console.log('getting stuff from facebook');
//         reslove({ user: "Name" });
//     }, 2000)
// });

// Promise.all([yt, fb]).then(result => console.log(result));