const jokeDisplay = document.getElementById("showJoke")
const getJoke = document.getElementById("showJoke")
const jokeApi = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const joke = () => {
    fetch(jokeApi)
    .then((resolve, reject) => {
        console.log(resolve);
        let data = resolve.json();
        console.log(data);
        
        
    })
    // .catch(reject) {
    //     console.log("You experienced a network failiure");
        
    // }
}

joke();