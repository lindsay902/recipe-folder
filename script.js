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
const brunchRecipeAdd = document.getElementById("recipe-form1").addEventListener('submit', function (e) {
    e.preventDefault();
    let existingEntries = JSON.parse(localStorage.getItem("allBrunchEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allBrunchEntries", JSON.stringify(existingEntries));

});

const appetizerRecipeAdd = document.getElementById("recipe-form2").addEventListener('submit', function (e) {
    e.preventDefault();
    let existingEntries = JSON.parse(localStorage.getItem("allAppetizerEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allAppetizerEntries", JSON.stringify(existingEntries));

});

const mainCourseRecipeAdd = document.getElementById("recipe-form3").addEventListener('submit', function (e) {
    e.preventDefault();
    let existingEntries = JSON.parse(localStorage.getItem("allMainCourseEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allMainCourseEntries", JSON.stringify(existingEntries));

});

const dessertRecipeAdd = document.getElementById("recipe-form4").addEventListener('submit', function (e) {
    e.preventDefault();
    let existingEntries = JSON.parse(localStorage.getItem("allDessertEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allDessertEntries", JSON.stringify(existingEntries));

});

const drinkRecipeAdd = document.getElementById("recipe-form5").addEventListener('submit', function (e) {
    e.preventDefault();
    let existingEntries = JSON.parse(localStorage.getItem("allDrinkEntries")) || [];
      // let formData = new Recipe {}

    let formData = new Recipe(this.recipename.value, this.instructions.value)
    
    localStorage.setItem("formData", JSON.stringify(formData));
    // Save allEntries back to local storage
    existingEntries.push(formData);
    localStorage.setItem("allDrinkEntries", JSON.stringify(existingEntries));

});

//write a function that loops throught the different tabs to get relevant <li> from local storage.

const saveRecipeToLocalStorage = (recipeNameInput, ulList, listItems, allItems) => {
    let input = document.getElementById(recipeNameInput).value;
    let ul = document.getElementById(ulList);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    li.setAttribute("id", input); // added line
    ul.appendChild(li);
    //keep all li items in local storage - option1
    let existingListItems = JSON.parse(localStorage.getItem(allItems)) || [];
    let newRecipeItemLi = input;
    localStorage.setItem(listItems, newRecipeItemLi);
    existingListItems.push(newRecipeItemLi);
    localStorage.setItem(allItems, JSON.stringify(existingListItems));  
}

// const saveAppetizerRecipeToLocalStorage = () => {
//     let input = document.getElementById("recipe-name-input").value;
//     let ul = document.getElementById("appetizer-list");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input));
//     li.setAttribute("id", input); // added line
//     li.setAttribute("class", "appetizer-list-item")
//     ul.appendChild(li);
//     //keep all li items in local storage - option1
//     let existingListItems = JSON.parse(localStorage.getItem("allAppetizerItems")) || [];
//     let newRecipeItemLi = input;
//     localStorage.setItem("appetizerListItems", newRecipeItemLi);
//     existingListItems.push(newRecipeItemLi);
//     localStorage.setItem("allAppetizerItems", JSON.stringify(existingListItems));  
// }

//write code to ensure list elements stay on refresh

const refreshListItems = (id, allItems) => {
    let items = JSON.parse(localStorage.getItem(allItems)) || [];
    console.log(items);
    let ul = document.getElementById(id);
    console.log(ul);

    items.forEach((item, index) => {
        let li = document.createElement("li");
        li.id = index;
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
        console.log(ul.appendChild(li));
    })
}

//on list item click, open the paper

//fill the paper with the proper recipe info:
//target the current list element by name
//loop through existing entries
// if target === existingEntries[i]
//get recipe name from local storage
//get instructions from local storage
//push recipename to recipenameinput.val
//push instructions to instructions.val
