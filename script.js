const clear = document.getElementById('clear');

const searchBox = document.getElementById('text');

//Make the 'clear' button (X) appear in Google Search page's text box (when text is entered)

function toggleClear() {
    if(searchBox.value === "") {
        clear.style.visibility = "hidden";
        action.style.action = "";
    }
    else {
        clear.style.visibility = "visible";
    }
}

searchBox.addEventListener("keyup", toggleClear);


//Make the text in the Google Search page's text box disappear when the 'clear' button ('X') is pressed

clear.addEventListener("click", () => searchBox.value = "");

