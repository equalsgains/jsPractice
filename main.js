$(function () {

    var theList = [];
    // list starts out as an empty array

    while (input !== "quit") {
        // unless they type 'quit', the user will be prompted to enter a new input
        var input = prompt("What would you like to do?");
        // asking for the input
        if (input == "new") {
            addNewItem();
        } else if (input === "list") {
            listAll();
        } else if (input === "delete") {
            deleteItem();
        }
    }
    console.log("Ok fine!");


// functions for the loop

function addNewItem() {
    var newItem = prompt("What would you like to add?");
    // we're asking for what they would like to add to the list, then we store in a a new variable
    theList.push(newItem);
    // we add the new item to the end of the list/array
    console.log("item " + newItem + " has been successfully added to the list ", theList);
    // console log the results
    // console.log(theList);
};

function listAll() {
    // if their input is list, then console the array
    console.log("**********************");
    theList.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********************");
};

function deleteItem() {
    var index = prompt("Which item would you like to delete? select by number in the list");
    var deletedItem = theList.splice(index, 1);
    console.log("Item " + deletedItem + " has been deleted from the list");
};

});

