const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let passOneEl = document.getElementById("password-one-el")
let passTwoEl = document.getElementById("password-two-el")

function generate() {
    const passOne = []
    const passTwo = []
    // create a for loop to randomly poplulate the password array with 
    // characters from the character array
    for (let i = 0; i < 15; i++) {
        let randomCharacter = characters[Math.floor( Math.random()*91 ) + 1]
        passOne.push(randomCharacter)
    }
    passOneEl.innerText = passOne.join("")

    for (let i = 0; i < 15; i++) {
        let randomCharacter = characters[Math.floor( Math.random()*91 ) + 1]
        passTwo.push(randomCharacter)
    }
    passTwoEl.innerText = passTwo.join("")
}