$(function () {

  var theList = [];
  // list starts out as an empty array

  while (command !== "quit") {
    // unless they type 'quit', the user will be prompted to enter a new command
    var command = prompt("What would you like to do?");
    // asking for the command
    if (command == "new") {
      var newItem = prompt("What would you like to add?");
      // we're asking for what they would like to add to the list, then we store in a a new variable
      theList.push(newItem);
      // we add the new item to the end of the list/array
      console.log("item " + newItem + " has been successfully added to the list ", theList);
      // console log the results
      // console.log(theList);
    } else if (command === "list")
      console.log(theList);
  }

});

