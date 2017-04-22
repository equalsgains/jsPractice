var colors = ["red", "blue", "green", "purple"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    
}

// we could also do a forEach

colors.forEach(function(item){
    // the "item" holds the data of the array for each index of the array
    console.log(item);
});
functions printColor(color){
    console.log(color)
}

colors.forEach(printColor);