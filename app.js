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
// 9. when info is blank ' ' or an emptry string nothign should be added to the list

// we would use submit as our event listener instea of click like we had it before
// for that we will create a variable for our form that needs to listen for submit 
// event listener to add a new item to the list, targetting form with the add as its class
const form = document.querySelector('form.add')
const addButton = document.querySelector('#addButton');
const addItem = document.querySelector('#itemToAdd');
const ul = document.querySelector(".todo");
const body = document.querySelector('body');
// we want to prevent bubbling from happening to the click event on the child element inside the app not the whole body element
const app = document.querySelector('.app')


app.addEventListener('click', function(event) {
    event.stopPropagation();
})

// we are doing this b/c we want when viewer clicks outside the app div the field gets refreshed
body.addEventListener('click', function() {
    console.log('clear this');
})
// next step is add a event listener to the form
form.addEventListener('submit', function (event) {
    console.log(event);
    // to prevent browser from refershing
    // only if we have a value inside our form add it to the list
    event.preventDefault();
    if (addItem.value !== '') {
        const newItem = createItem(addItem.value)  
        // first we create the li element
        // and add the user text to the element we created
        // then add element as child to the ul
        ul.appendChild(newItem);
        addItem.value = '';
        // focus() method is also a property on the node addItem
        // node.focus()
        addItem.focus();
    }
    
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
    deletebtn.classList.add('btn-link');

    item.appendChild(span);
    item.appendChild(deletebtn);

        deletebtn.addEventListener('click', function(){
            // to remove node
            // nodeToRemove.parentNode.removeChild(nodeToRemove)
            item.parentNode.removeChild(item);
        })

        // Press the "Enter" key inside the input field to trigger the button
        addItem.addEventListener('keyup', function(event) {
            // Number 13 is the 'Enter' key on the keyboard 
            if(event.keyCode === 13) {
                // event.preventDefault();
                // Tirgger the button element with a click
                document.querySelector(addItem.click());
            }
        });


    // and spit out the newly created item in the list
    return item;
}

