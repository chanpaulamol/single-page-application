let state = {
    inputValue: localStorage.getItem("inputValue") ?? "",
    hash: location.hash,
};


function setState(newState){
    const prevState = {...state};
    const nextState = {...state, ...newState};
    state = nextState;
    render();
    onStateChange(prevState, newState);
}

function onStateChange(prevState, nextState){
    if (prevState.inputValue == nextState.inputValue){
        localStorage.setItem("inputValue", nextState.inputValue)
    }

    if (prevState.hash !== nextState.hash){
         history.pushState(null, "", nextState.hash)
    }
}

function Link(props){
        const link = document.createElement("a");
        link.href = props.href;
        link.textContent = props.label;
        link.onclick =  function(event){
        event.preventDefault();
        console.log(event.target.href)
        const url = new URL(event.target.href)
        setState({hash: url.hash});
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
        textPreview.textContent = state.inputValue;

        const input = document.createElement("input");
        input.id = "input";
        input.value = state.inputValue;

        input.oninput = function(event){
              state.inputValue = event.target.value;
              setState({inputValue: event.target.value});
        };
        input.placeholder = "Enter your name";

        const buttonClear = document.createElement("button");
        buttonClear.textContent = "Clear";

        buttonClear.onclick = function(event){
           setState({inputValue: ""});
        }
        const div = document.createElement("div");
        div.append(navbar);
        div.append(input);
        div.append(buttonClear);
        div.append(textPreview);
        return div;
    }



function App(){
    const homeScreen =  HomeScreen();
    const aboutScreen = AboutScreen();

    if (state.hash == "#about"){

        return aboutScreen;
    } else if (state.hash == "#home"){
     return homeScreen;
    }
}

function render(){
    const root = document.getElementById("root");
    const app = App();
    const focusedElementId = document.activeElement.id;
    const focusedElementSelectionStart =document.activeElement.selectionStart;
     const focusedElementSelectEnd =document.activeElement.selectionEnd;
    root.innerHTML = "";
    root.append(app);  

    if (focusedElementId){
        const focusedElement = document.getElementById(focusedElementId)
        focusedElement.focus();
        focusedElement.focusedElementSelectionStart;
        focusedElement.focusedElementSelectEnd;
    }
}

render();