var limitDisplay = document.getElementById('limit'),
    p1Display = document.getElementById('p1'),
    p2Display = document.getElementById('p2'),
    p1Btn = document.getElementById('c1'),
    p2Btn = document.getElementById('c2'),
    resetBtn = document.getElementById('reset'),
    scoreInput = document.getElementById('scoreLimit'),
    p1Score = 0,
    p2Score = 0;



// the input number will be displayed in "limitDisplay"
// the score will be displayed for every time the input is changed
scoreInput.addEventListener("change", function(){
    limitDisplay.textContent = this.value.toString();
});




p1Btn.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score.toString();
});

p2Btn.addEventListener("click", function(){
    p2Score++;
    p2Display.textContent = p2Score.toString();
});

