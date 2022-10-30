function myFunction() {
    var buttons = document.getElementById("myButton").value;
    let winningButton;
    const onClick = function() {
        winningButton = winningButton ? winningButton : Math.floor(Math.random() * buttons);
            if (winningButton == this.id) {
                alert ("Congratulation! You have guessed the button!");
                document.location.reload();
            } else {
            alert ("This is not the right button, keep trying!");
            }
    }
    for (let i = 0; i < buttons; ++i) {
        const buton = document.createElement("button");
        document.querySelector("body").appendChild(buton);
        buton.id = i;
        buton.innerText = "Click on me!";
        buton.addEventListener("click", onClick);
        buton.style.height = '120px';
        buton.style.width= '120px';
    }
}
