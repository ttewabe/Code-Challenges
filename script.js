const inputEl = document.querySelector("input");
// Add your event listener here
inputEl.addEventListener("onkeyup",fixLength)

function fixLength() {
  
  if (inputEl.value.length > 12) {
   
    inputEl.value = inputEl.value.slice(0,12);
  
  } 
}