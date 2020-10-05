class Recipe {
    constructor(recipename, instructions) {
        this._recipename = recipename;
        this._instructions = instructions;
    }

    get recipename() {
        return this._recipename;
    }

    get instructions() {
        return this._instructions;
    }

}

const recipeAdd = document.getElementById("recipe-form").addEventListener('submit', function (e) {
    e.preventDefault();

    let existingEntries = JSON.parse(localStorage.getItem("allEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));

});

const getRecipeName = () => {
    let input = document.getElementById("recipe-name-input").value;
    let ul = document.getElementById("brunch-list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    li.setAttribute("id", input); // added line
    ul.appendChild(li);
}

const saveRecipesToLocalStorage = () => {
    
}

const openRecipe = () => {
    
}
/*
    document.getElementById('submit-button').onclick = function addElement () { 
  // create a new div element 
        const newDiv = document.createElement("li"); 
  
  // and give it some content 
        const newContent = document.createTextNode(this.recipename.value); 
  
  // add the text node to the newly created div
        newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
        const currentDiv = document.getElementById('recipe-list'); 
        document.body.insertAfter(newDiv, currentDiv); 
    }
*/



//export {recipeAdd};


/*const brunchItem = document.createElement('li');

brunchItem.id = 'brunch-recipe';

brunchItem.innerHTML = 'pancakes';

document.getElementById('recipe-name').appendChild(brunchItem);
*/


//let element = document.getElementById('interact');
//element.onclick = function() { element.style.backgroundColor = 'blue' };

/*let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed; */

//ON SAVE CLICK CALL FUNCTION