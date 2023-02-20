
function Link(props){
        const link = document.createElement("a");
        link.href = props.href;
        link.textContent = props.label;
        link.onclick =  function(event){
        event.preventDefault();
        history.pushState(null,"", event.target.href); 

        render();
  };
   return link;
}

function NavBar(){

    const linkHome = Link({
            href: "#home",
            label:"Home",
     });
      const linkAbout= Link({
            href: "#about",
            label:"About",
     });

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);
    return div;
}

function AboutScreen(){
    const linkHome = Link({
            href: "#home",
            label:"Back to Home",
     });
  
    const text = document.createElement("p");
    text.textContent = "Welcome to About!"

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text)
    return div;
}

function HomeScreen(){
        const navbar = NavBar();
        const textPreview = document.createElement("p")
        const input = document.createElement("input");
        input.oninput = function(event){
        textPreview.textContent = event.target.value;
        };
        input.placeholder = "Enter your name";
        const div = document.createElement("div");
        div.append(navbar);
        div.append(input);
        div.append(textPreview);
        return div;
    }



function App(){
    const homeScreen =  HomeScreen();
    const aboutScreen = AboutScreen();


    if (location.hash == "#about"){

        return aboutScreen;
    
    } else if (location.hash == "#home"){
     return homeScreen;
    }

}

function render(){
    const root = document.getElementById("root");
    const app = App();
    root.innerHTML = "";
    root.append(app);  
}

render();