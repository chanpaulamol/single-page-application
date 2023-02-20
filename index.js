const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

linkHome.onclick =  function(event){
    event.preventDefault();
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
    history.pushState(null,"", event.target.href);
}

linkAbout.onclick =  function(event){
    event.preventDefault();
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen);
    history.pushState(null,"", event.target.href);
}

function AboutScreen(){
    const text = document.createElement("p");
    text.textContent = "Welcome to About!"
    return text;
}


function HomeScreen(){
    const textPreview = document.createElement("p")
    const input = document.createElement("input");
    input.oninput = function(event){
    textPreview.textContent = event.target.value;
    }
    input.placeholder = "Enter your name";
    const div = document.createElement("div");
    div.append(input)
    div.append(textPreview)
    return div
}

if (location.hash == "#about"){
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen);
}else if (location.hash == "#home"){
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
}