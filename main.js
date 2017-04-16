var theList = [];

var command = prompt("What would you like to do?");



while (command !== "quit") {
  if (command == "new") {
    var newItem  =  prompt("What would you like to add?");
    theList.push(newItem);
    console.log("item " + newItem + " has been successfully added to the list ");
    console.log(theList);
} else if (command === "list")
  console.log(theList);
  command = prompt("What would you like to do?");
}
