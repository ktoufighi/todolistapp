// 1. We need to capture the users input into the form field 
// 2. We need to store that into a variable 
// 3. User clicks on the submit button
// 4. the entery should be diplayed as a list item
// 5. Then when delete button is clicked the item should be removed from the list.
    // we need to create the delete button
    // we need to click the delete button when item is done
    // we need to clear the item from the list
// 6. after a new item is added to the list, the field should be cleared
// 7. the field should get focus (highlighed area)
// 8. bug to fix when you press enter the whole app refreshed

const addButton = document.querySelector('#addButton');
const addItem = document.querySelect    or('#itemToAdd');
const ul = document.querySelector(".todo");
// next step is add a event listener to addButton
addButton.addEventListener('click', function () {
    const newItem = createItem(addItem.value)
    // first we create the li element
    // and add the user text to the element we created
    // then add element as child to the ul
    ul.appendChild(newItem);
    
});

// going to create some sub functions
// create element is going to recieve an argument that is the value we are adding 
// to the input field called 'val' 
// we are going to use this function again and again
function createItem (val) {
    const item = document.createElement('li');
    // so here we add the textContent to our span instead of the item only
    const span = document.createElement('span');
    // we also adding a delete button to each new item/span we add to the list
    const deletebtn = document.createElement('button');
    span.textContent = val;
    deletebtn.textContent = 'Delete';
    
    // and spit out the newly created item in the list
    return item;
}